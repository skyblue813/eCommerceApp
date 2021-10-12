import { useParams } from "react-router";
import {commerce} from "../../lib/commerce";
import {useEffect,useState} from "react";



function Product(){
    let {ProductId}=useParams();
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        console.log(ProductId);
        commerce.products.retrieve(ProductId).then(response=>
            {setProduct(response);
                });
            },[ProductId]);
    return(
    <div>
        <p> My Product: {product.name}</p> 
        <p> {product.description}</p>



    </div>

    );      
        
}

export default Product