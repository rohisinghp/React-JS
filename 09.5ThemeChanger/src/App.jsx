import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebtn';
import Card from './components/card';

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => {
    setthemeMode("dark");
  }
  const lightTheme = () => {
    setthemeMode("light");
  }

  useEffect(() => {
    let background = document.querySelector('html');
    background.classList.remove("light", "dark")
    background.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
