import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'




function App() {

  const [count, setCount] = useState(0)
  
const addvalue= ()=>{
    if(count<20)
      // setCount(count+1)
    setCount(previousCount => previousCount+1);

}
const sbtratvalue=()=>{
  if(count >0)
      setCount(count-1)
}


  return (
    <>

      <p className='text-3xl bg-pink-700 p-10 text-white font-bold rounded-xl' >hello this is Rohit</p>
      <h3 className='text-left bg-orange-400 text-5xl mt-10 p-5 rounded-md'>Hello this is heading</h3>

      <h2 className='bg-pink-300 font-bold text-3xl mt-11 p-8 rounded-xl'>Counter {count}</h2>
      <button onClick={addvalue} className='px-4 py-3 text-xl font-semibold  bg-emerald-500 rounded-xl mt-5 hover:bg-emerald-600 active:bg-emerald-950 active:text-yellow-50'> Increase</button><br />
      <button onClick={sbtratvalue} className='px-4 py-3 text-xl font-semibold  bg-emerald-500 rounded-xl mt-5 hover:bg-emerald-600 active:bg-emerald-950 active:text-yellow-50'> Decrease</button>

    </>
  )
}

export default App
