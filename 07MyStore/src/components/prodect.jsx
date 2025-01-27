

function ProductComponent({
    title,
    price,
    description,
    category,
    url

}){


    return(
           <div className="hello">
            <img  src={url} alt="not valid" />
            <p>{title}</p>
           </div>
    )

}

export default ProductComponent;