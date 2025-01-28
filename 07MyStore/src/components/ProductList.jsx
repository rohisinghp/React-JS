import ProductComponent from "./product"
import useItem from "../hooks/useItem"


const ProductList = ()=>{
        
   const {products} = useItem()

        // console.log(prolist)
  
    return(
        <>
          <div className="productlist"> 
            {
               products.map((item,index)=>

                  <ProductComponent key={index}
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

