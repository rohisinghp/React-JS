import { useState } from 'react'

function App() {

  let [color, setColor] = useState('olive')
  let [headingC , setHeadingC] = useState('white');

  return (
     <div className='w-full h-screen'
     style={{backgroundColor: color}}>

      <h1 className= ' flex justify-center text-6xl font-bold p-5'
        style={{color : headingC}}
      >BackGround Changer</h1>

      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12'>
        <div className='flex flex-wrap justify-center p-2 m-1 gap-2 bg-white rounded-xl'>
          
          <button className='bg-red-900 text-white px-4 py-2 rounded-xl'
          onClick={()=>{setColor('#7f1d1d'), setHeadingC('white')}}
          >Red</button>

          <button className='bg-blue-900 text-white px-4 py-2 rounded-xl'
          onClick={()=>setColor('#1e3a8a')}
          >Blue</button>

          <button className='bg-black px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('black')}
          >Black</button>

           <button className='bg-green-900 px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('#14532d')}
          >Green</button>

           <button className='bg-sky-800 px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('#075985')}
          >Sky-Blue</button>

           <button className='bg-pink-800 px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('#9d174d')}
          >Pink</button>

           <button className='bg-slate-900 px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('#0f172a')}
          >Slate</button>

          <button className='bg-orange-800 px-4 text-white py-2 rounded-xl'
          onClick={()=>setColor('#9a3412')}
          >Orange</button>

          <button className='bg-yellow-500 px-4 text-white py-2 rounded-xl'
          onClick={()=>{setColor('#eab308'), setHeadingC('#9a3412')}}
          >Yellow</button>



        </div>
      </div>
     </div>
  )
}

export default App
