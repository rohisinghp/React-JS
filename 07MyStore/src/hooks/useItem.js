import { useEffect, useState } from "react";


function useItem(){
    const [products,  setProducts] = useState([])

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((res)=>setProducts(res))

    },[])

    return {products};

}

export default useItem;
