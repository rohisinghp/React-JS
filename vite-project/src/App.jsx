import { useState } from 'react'
import './index.css'

function App() {
  const [count, setC] = useState(0)
  
  return (
    <>
      <h1>Vite + React </h1>
      
      <h2>the value of count : {count}</h2>
        <button onClick={() => setC((count) => count + 1)}>
          increament
        </button>
        <button onClick={()=>setC((count)=> count-1)}>
          decreament
        </button>
       <p className='text-m'>Hello this is me Rohit</p>
    </>
  )
}
export default App
