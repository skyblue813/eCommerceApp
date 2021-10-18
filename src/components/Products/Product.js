import { useParams } from "react-router";
import {commerce} from "../../lib/commerce";
import {useEffect,useState} from "react"
import { Grid } from "@material-ui/core";
import"react-image-gallery/styles/css/image-gallery.css"
import ReactImageGallery from 'react-image-gallery';
//import { PictureAsPdfSharp } from "@material-ui/icons";
import ProdPics from "./ProdPics";
import '../../App.css';



function Product(){
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
                    <ReactImageGallery items={ 
                        images.map(
                            (pict)=>{
                                return{original:"/assets/" + pict}})
                    } showPlayButton ={false} >
                    </ReactImageGallery> 
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