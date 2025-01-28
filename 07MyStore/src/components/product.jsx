

function ProductComponent({
    title,
    price,
    description,
    category,
    url

}){
    return (
<div className="w-64  p-10 ">
        <img className="w-full h-52" src={url} alt="product image" />
            <h5 className="">{title}</h5>
     
            <span className="">5.0</span>
        <div className="">
            <span className="text-amber-500">${price}</span>
            <a href="" className="px-1.5 py-1.5 bg-amber-500 text-white font-bold m-2 rounded-md">Add to cart</a>
        </div>
    </div>

      );
    }


export default ProductComponent;