import { useParams } from "react-router";
import {commerce} from "../../lib/commerce";
import {useEffect,useState} from "react"
import { Grid } from "@material-ui/core";


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
                <Grid container direction = 'row'>
                    
                    {product !== undefined && 
                    <>
                    <Grid item xs= {6}>
                    <img width = {250} 
                        key = {product.id} 
                        src = {product.image.url} 
                        alt= {product.name} />
                  </Grid>
                  <Grid item xs= {6}>
                    <h2>{product.name}</h2>
                    <h3>${product.price.formatted}</h3>
                    <div dangerouslySetInnerHTML={{ __html: product.description}} />
                   
                </Grid>
                </>}
                </Grid>
            );  
        
}

export default Product