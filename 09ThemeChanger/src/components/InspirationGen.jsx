import React from 'react';
import  { useState } from 'react';
import Inspiration from './Inspiration';


function InspirationGen({children}) {
    let [index, setindex] = useState(0);

    const next = () => {
        setindex((index+1)% Inspiration.length)
    }
    const ins = Inspiration[index];

    return (
         <div>
            <h3>{ins.type}</h3>
            <h2>{ins.value}</h2>
            i am from inspiration compo
            {children}
            <button onClick={next}>click me</button>
         </div>
         );

}

export default InspirationGen;