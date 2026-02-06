import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import ELK from "elkjs/lib/elk.bundled.js";
import "reactflow/dist/style.css";

const elk = new ELK();

function GraphView({ data }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (!data) return;

    const runLayout = async () => {
      const elkGraph = {
        id: "root",
        layoutOptions: {
          "elk.algorithm": "layered",
          "elk.direction": "DOWN",
          "elk.spacing.nodeNode": "50",
          "elk.layered.spacing.nodeNodeBetweenLayers": "80"
        },
        children: data.nodes.map(n => ({
          id: String(n.id),
          width: 80,
          height: 40
        })),
        edges: data.edges.map((e, i) => ({
          id: `e${i}`,
          sources: [String(e.from)],
          targets: [String(e.to)]
        }))
      };

      const layoutedGraph = await elk.layout(elkGraph);

      setNodes(
        layoutedGraph.children.map(n => ({
          id: n.id,
          position: { x: n.x, y: n.y },
          data: { label: n.id }
        }))
      );

      setEdges(
        layoutedGraph.edges.map(e => ({
          id: e.id,
          source: e.sources[0],
          target: e.targets[0]
        }))
      );
    };

    runLayout();
  }, [data]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}

export default GraphView;
