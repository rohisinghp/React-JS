

function CardThird({name , setName}){

    function handle(e){
        console.log(e.target.value);
        setName(e.target.value)
    }

    return(
        <>
        
          <input 
          style={{outline: 'none'}}
          type="text" onChange={handle} />
        
        </>
    )
}

export default CardThird