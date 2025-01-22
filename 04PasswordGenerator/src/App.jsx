import { useState } from 'react'

function App() {
  const [text, setText] = useState("Rohit");

  return (
    <>
        <h2 className='text-red-300 text-9xl'>Hello</h2>
        <label htmlFor="name">Name : </label>
        <input
         type="text" 
         value={text}
         className='bg-slate-100 text-black outline-none active:border-s-violet-900 '/>
         
    </>
  )
}

export default App
