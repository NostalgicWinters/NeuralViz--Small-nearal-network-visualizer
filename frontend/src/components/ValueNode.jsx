import { Handle } from "reactflow";

export default function ValueNode({ data }) {
  const gradMag = Math.abs(data.grad || 0);

  return (
    <div
      style={{
        padding: "10px 14px",
        borderRadius: "12px",
        minWidth: "120px",
        background: "white",
        color: "black",
        border: `2px solid ${gradMag > 1 ? "#ef4444" : "#38bdf8"}`,
        fontFamily: "monospace",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
      }}
    >
      <Handle type="target" position="top" />
      
      <div style={{ fontSize: "12px", opacity: 0.9 }}>
        {data.op || "value"}
      </div>

      <div style={{ fontSize: "14px", fontWeight: "bold" }}>
        v = {data.value.toFixed(3)}
      </div>

      <div style={{ fontSize: "12px", color: "black" }}>
        ∂ = {data.grad.toFixed(3)}
      </div>

      <Handle type="source" position="bottom" />
    </div>
  );
}
