import { useEffect, useState } from "react"
import ProductComponent from "./prodect"

const ProductList = ()=>{
        const [products,  setProducts] = useState([])
            

     useEffect(()=>{
    
            fetch('https://fakestoreapi.com/products')
            .then((res)=> res.json())
            .then((res)=>setProducts(res))

    
        },[])

        const prolist = products.map(item => item);
        // console.log(prolist)
  
    return(
        <>
          <div > 
            {
               prolist.map((item)=>

                  <ProductComponent 
                  title={item.title} 
                  price={item.price} 
                  description={item.description} 
                  category={item.category} 
                  url={item.image} 
                  />

               )
            }
             </div>
        </>
    )
}

export default ProductList

