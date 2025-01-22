import { useState } from 'react'
import Cardfirst from './components/card1';
import Cardsecond from './components/card2';
import CardThird from './components/card3';


function App() {

  let [count , setCount] = useState(0);
  let [name, setName]= useState("");

  function HandleClick(){
    setCount(count+1);
}

  return (

   <>
      <h3>Hello this is {count}</h3>
      <Cardfirst handle = {HandleClick} count={count} setCount = {setCount}/>

      {/* <Cardsecond>
        <h3>hello this is child of cardsecond</h3>
        <p>hello this is second child of cardsecond</p>

      </Cardsecond> */}

      {/* <Cardsecond countHandle={HandleClick}/> */}

      <Cardsecond count={count} Handeler = {HandleClick} />

      <h1>Hello this is {count}</h1>

      <CardThird name={name} setName={setName}/>

      <h1>My name is {name}</h1>

   </>
  )
}

export default App
