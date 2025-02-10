import React, { useState } from 'react';

import './App.css'
import Fancytext from './components/Fancytext'
import InspirationGen from './components/InspirationGen.jsx';
import Copyright from './components/copyright.jsx';

function App() {
  const [title, settitle] = useState("This is title");

  return (
    <>
      <Fancytext title={title} text="Get Inspired App"/>
      <InspirationGen>
        <Copyright year={2000}/>
        
        <Copyright />
      </InspirationGen>
    </>
  )
}

export default App
