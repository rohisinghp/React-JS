import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [car, setCar] = useState({

  //   model : "Tesla",
  //   year : 2021,
  //   color : "black"
    
  // })

  // const handler = ()=>{
  //   // setCar({color : "white"})
  //   setCar(prev=>{
  //     return {...prev , color: "red"};
  //   })
  // }

  const [name, setname] = useState('');
 
  const [count, setcount] = useState(0);
  

  useEffect(()=>{
    HandleInput

  },[])

  console.log("i am outside useeffect")

  const HandleInput = (e)=>{
    setname(e.target.value)
    console.log("i am inside useeffect")

  }

  const handleD = ()=>{
    setcount(count-1)
  }

  const handleI = ()=>{
    setcount(count+1)
  }
  return (
    <>
    <input onChange={HandleInput}  type="text" placeholder='Enter your name'/>
    <h1>name : {name}</h1>

    <button onClick={handleI}>+1</button>
    <p>value of count : {count}</p>
    <button onClick={handleD}>-1</button>


    </>
  )
}
export default App
