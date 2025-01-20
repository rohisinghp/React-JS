import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Rohit.jsx'
// import './style.css'

// const AnotherApp = ()=>{

//     return(
//         <>
//             <h1>hello this is rohit singh</h1>
//              <a href="https://www.google.com" target='_blank' >visit Page</a>
//         </>
//     )
// }

// createRoot(document.getElementById('root')).render(
//     // <App />    
//     // <Chai/>
//     <AnotherApp/> 
// )   


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <AnotherApp/>
// )

const AnotherApp =
    (
        <>
            <h1>hello this is rohit singh</h1>
             <a href="https://www.google.com" target='_blank' >visit Page</a>
        </>
    )

createRoot(document.getElementById('root')).render(
    // <App />
    AnotherApp 
)   
