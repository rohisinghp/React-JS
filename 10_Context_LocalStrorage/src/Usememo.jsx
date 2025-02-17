import React, { useMemo } from 'react';
import { useState } from 'react';

function UseMemo() {

    const [num, setnum] = useState(0);
    const [counter, setcounter] = useState(0);

    const handle = ()=>{
        console.log("calculation DOne! ");
        return Math.pow(num,3);
    }

    const result =  useMemo(handle , [num])

    return ( 
        <>
          <input value={num} onChange={(e)=>{setnum(e.target.value)}} className='bg-black p-2' type="number" />
          <h1>{result}</h1>

          <button onClick={()=>{setcounter(counter+1)}}>+1</button>

          <h1>{counter}</h1>


        </>
     );
}

export default UseMemo;