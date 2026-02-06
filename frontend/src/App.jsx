import { useState } from 'react'
import InputBox from './components/InputBox'

function App() {

  return (
    <div className='bg-blue-200 h-screen flex flex-col gap-20 items-center'>
      <div className='bg-blue-400 flex justify-center w-screen'>
        <h1 className='text-white text-5xl font-bold p-2'>Neuralviz</h1>
      </div>

      <div>
        <InputBox />
      </div>
    </div>

  )
}

export default App
