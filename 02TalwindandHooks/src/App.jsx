import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
//  let obj = {channel : "chai or code" , name: "rohti"}
//  let anotherObj = [1,2,3,4,5,6,5,4,4,"ROhit singh Pilkhwal"]
 let image = "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHN8ZW58MHx8MHx8fDA%3D"

  return (
    <>
    <h1 className='bg-sky-300 p-5 rounded-xl mb-5'>Tailwind css</h1>

    {/* <Card someobj = {obj} anotherObj ={anotherObj}/> */}
    
    <Card username = "Aaleena " action = "visit me " image={image} />
    <Card username='Heeelena' action='Lorem' image='https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D'/>
    <Card  username='Alexxaa'/>
    <Card image='https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHN8ZW58MHx8MHx8fDA%3D'/>

     </>
  )
}

export default App
