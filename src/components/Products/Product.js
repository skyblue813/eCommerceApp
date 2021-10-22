import { useParams } from "react-router";
import {commerce} from "../../lib/commerce";
import {useEffect,useState} from "react"
import { Grid, Button } from "@material-ui/core";
import"react-image-gallery/styles/css/image-gallery.css"
import ReactImageGallery from 'react-image-gallery';
import ProdPics from "./ProdPics";
import '../../App.css';



function Product({handleAddToCart}){
    let {ProductId}=useParams();
    const[product,setProduct]=useState(undefined);
    useEffect(()=>{
        console.log(ProductId);
        commerce.products.retrieve(ProductId).then(response=>
            {setProduct(response);
                });
            },[ProductId]);

            
    var images;
    if(product !== undefined){
        images=( (ProdPics().filter((element)=>element.name === product.name))[0].pictures );
    }
            

            return(
                <Grid container direction = 'row' spacing ={2}>
                    
                    {product !== undefined && 
                    <>
                    <Grid item xs= {6}>
                    <ReactImageGallery 
                    showPlayButton ={false}
                    items={ 
                        images.map(
                            (pict)=>{
                                return{original:"/assets/" + pict}})
                    }  >
                    </ReactImageGallery> 
                  </Grid>
                  <Grid item xs= {6}>
                    <h2>{product.name}</h2>
                    <h3>${product.price.formatted}</h3>
                    <Button variant ="contained" color = "primary" onClick={
                        ()=> {
                            handleAddToCart(product.id, 1);
                        }
                    }> Add Item to cart</Button>
                    <div dangerouslySetInnerHTML={{ __html: product.description}} />
                   
                </Grid>
                </>}
                </Grid>
            );  
        
}

export default Product