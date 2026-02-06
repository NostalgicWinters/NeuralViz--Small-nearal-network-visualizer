from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from package.Value import Value
import package.nn as mg

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
                "value": float(v.data),
                "grad": float(v.grad),
                "op": v._op
            }
            for v in nodes
        ],
        "edges": [
            {"from": u.id, "to": v.id}
            for (u, v) in edges
        ]
    }

@app.get("/")
def read_root():
    return {"message": "Micrograd backend running"}

@app.post("/mlp/visualize")
def visualize(x: List[float]):
    mlp = mg.MLP(3, [4, 4, 1])

    inputs = [Value(v) for v in x]
    out = mlp(inputs)

    if isinstance(out, list):
        out = out[0]

    out.backward()

    return graph_to_json(out)
