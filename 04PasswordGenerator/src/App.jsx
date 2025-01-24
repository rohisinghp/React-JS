import { useCallback, useEffect } from 'react';
import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [password , setPassword ] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(true);
  const [characterAllowed , setCharacterAllowed] = useState(true);

 //use Ref hook 
  const passwordRef = useRef(null);

  // function passwordGenerator(){

  // }

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLNOPQRSTUVWXYZ";
    const numebers = "0123456789";
    const specialChar = "{})(*&^%$#@!?/~";

    let pass=''

    if(numberAllowed) str+=numebers;
    if(characterAllowed) str+=specialChar;
    str+="abcdefghijklmnopqrstuvwxyz"

    for(let i =1 ;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      // pass += str.charAt(char);
      pass += str[char];

    }
    
    setPassword(pass);

  }, [length,numberAllowed,characterAllowed])

  const copyPasswordToClipBoard=useCallback(()=>{
    console.log(passwordRef.current)
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password]
)


  
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-md'>

        <input type="text"
         value={password}
         placeholder='password'
          readOnly
          className='outline-none h-10 w-80'
          ref={passwordRef}
          
        />
        <button onClick={copyPasswordToClipBoard}>Copy</button>
        
<br />
        <input type="range" 
        value={length}
        min={6}
        max={100}
        onChange={(e)=>{setLength(e.target.value)}}
        className='cursor-pointer'

        />
        <label htmlFor=""> Length : {length}</label>
        
        <br />
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        onChange={()=>{setNumberAllowed(prev=>!prev)}}
        />
        <label htmlFor=""> Number Allowed</label>
  
       
        <br />
        <input type="checkbox" 
        defaultChecked={characterAllowed}
        onChange={()=>{setCharacterAllowed(prev=>!prev)}}
        />
        <label htmlFor=""> Special Character Allowed</label>
        
      </div>
    </>
  )
}

export default App
