import { useState } from 'react'
import InputBox from './components/InputBox'
import GraphView from './components/GraphView'

function App() {
  const [graphData, setGraphData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const visualize = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("http://localhost:8000/mlp/visualize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([2.0, -1.0, 0.5])
      });

      if (!res.ok) {
        throw new Error("Backend error");
      }

      const data = await res.json();
      setGraphData(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-blue-200 min-h-screen flex flex-col gap-10 items-center'>
      
      {/* Header */}
      <div className='bg-blue-400 flex justify-center w-screen'>
        <h1 className='text-white text-5xl font-bold p-2'>Neuralviz</h1>
      </div>

      {/* Controls */}
      <div className='flex flex-col gap-6 items-center'>
        <InputBox />

        <button
          onClick={visualize}
          disabled={loading}
          className='bg-red-500 p-4 rounded-3xl text-white font-semibold hover:cursor-pointer disabled:opacity-50'
        >
          {loading ? "Visualising..." : "Visualise"}
        </button>

        {error && <p className="text-red-600">{error}</p>}
      </div>

      {/* Graph */}
      <div className="w-[90%] h-[90vh] bg-amber-50 overflow-auto">
        {graphData && <GraphView data={graphData} />}
      </div>

    </div>
  );
}

export default App;
