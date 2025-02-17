import { useEffect, useRef, useState } from 'react'
import './App.css'

function Hello() {

  const [value, setValue] = useState(0);

  const count = useRef(0);
  
  useEffect(() => {
    count.current = count.current + 1;
  });


  return (
    <>
    <button onClick={()=>setValue(value+1)}>+1</button>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value-1)}>-1</button>
    <h1>render : {count.current}</h1>
    </>
  )
}
export default Hello
    

   

                                                                                                                                                                                              