import { useState , createContext} from 'react'

import './App.css'
import Home from './components/home'

export const LogInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = ()=>{
      setIsLoggedIn(true)
  }

 const handleLogout = ()=>{
  setIsLoggedIn(false);

  }
                             
  return (
  
    <LogInContext.Provider value={{isLoggedIn, handleLogin, handleLogout}}>
    <h1>User Authentication</h1>
     <Home />


    </LogInContext.Provider>
    //  {/* <h1>User Authentication</h1>
    //  <Home isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/> */}
  
  )
}

export default App
