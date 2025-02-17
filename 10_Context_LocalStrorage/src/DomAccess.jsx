import React, { useRef } from 'react';

function DOM() {

    const inputElem = useRef();
    const btnHandle = ()=>{
        console.log(inputElem.current.value)
    }

    return ( 
        <>
          <input className='bg-amber-100 text-black' type="text" placeholder='Enter ' ref={inputElem}/>
          <button onClick={btnHandle}>click here</button>
        </>
     );
}

export default DOM;