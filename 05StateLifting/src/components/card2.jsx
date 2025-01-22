

function Cardsecond({count , Handeler}) {

    return(
        <>
        <p style={{color: 'red'}}>Hello i am from card Second Component and my name is {count} </p>
        <button onClick={Handeler}>Click Me</button>
        </>
    )
}

export default Cardsecond