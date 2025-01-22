


function Cardfirst(prop){

    
   function increase(){
     prop.setCount(prop.count+1);
   }
    return(
        <>

        <button onClick={prop.handle}>Click Me</button>
        <button onClick={increase}> Button from card1</button>
        <p>{prop.count}</p>

        </>
    )
}

export default Cardfirst;

