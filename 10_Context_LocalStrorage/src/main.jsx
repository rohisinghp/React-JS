import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import DOM from './DomAccess.jsx'
import UseMemo from './Usememo.jsx'

createRoot(document.getElementById('root')).render(
    <UseMemo/>
)
