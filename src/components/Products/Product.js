import { useParams } from "react-router";
import {commerce} from "../../lib/commerce";
import {useEffect,useState} from "react"


function Product(){
    let {ProductId}=useParams();
    const[product,setProduct]=useState(undefined);
    useEffect(()=>{
        console.log(ProductId);
        commerce.products.retrieve(ProductId).then(response=>
            {setProduct(response);
                });
            },[ProductId]);

            return(
                <main>
                    {product !== undefined && 
                    <>
                    <img width = {250} 
                        key = {product.id} 
                        src = {product.image.url} 
                        alt= {product.name} />
                    <h2>{product.name}</h2>
                    <h3>${product.price.formatted}</h3>
                    <div dangerouslySetInnerHTML={{ __html: product.description}} />
                    </>}
                </main>
            );  
        
}

export default Product