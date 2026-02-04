from package.Value import Value
import package.nn as mg
from fastapi import FastAPI
from typing import List

app = FastAPI()

def trace(root):
        nodes, edges = set(), set()

        def build(v):
            if v not in nodes:
                nodes.add(v)
                for child in v._prev:
                    edges.add((child, v))
                    build(child)

        build(root)
        return nodes, edges

def graph_to_json(output_node):
    nodes, edges = trace(output_node)

    return {
        "nodes": [
            {
                "id": v.id,
                "value": v.data,
                "grad": v.grad,
                "op": v._op
            }
            for v in nodes
        ],
        "edges": [
            {"from": u.id, "to": v.id}
            for (u, v) in edges
        ]
    }

@app.get('/')
def read_root():
    return {"Message": "Hello World!!!"}

@app.post("/mlp/visualize")
def visualize(x: list[float]):
    mlp = mg.MLP(3, [4,4,1])
    out = mlp([Value(v) for v in x])
    return graph_to_json(out)