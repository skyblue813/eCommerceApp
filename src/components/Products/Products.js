
import { useState, useEffect} from "react";
import { commerce } from '../../lib/commerce';
import {Card, CardActionArea, CardMedia, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
//import { red } from "@material-ui/core/colors";


const useStyles= makeStyles({
  media: {
     height: 210,
     border: '2px solid blue',
  }
});
function Products() {
  const classes = useStyles();

  console.log("Products.js");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    commerce.products.list().then(result => {
      // setProducts([{'id': 1, 'name': 'productA'}]);
      setProducts(result.data);
      console.log(result.data);
    });
   
  }, []); 
  console.log("during the render");
  
  return (
   
    <Grid container spacing={4}>
      
      {products.length === 0 && <p>Loading . . .</p>}
      {
        products.map((product) => {
          
          //return <Link to={"/Products/" + product.id} key={product.id}><img key={product.id} src={product.image.url} alt={product.name} /></Link>;
          return (
          <Grid item xs = {12} sm={6} md={4} lg={3} >
            <Card style = {{width: '18'}}>
              <CardActionArea className={classes.media}> 
                <CardMedia >            
              <a href = {"/Products/" + product.id} >
          <img key = {product.id} src = {product.image.url} alt={product.name} width= {210}/>
          </a> 
             </CardMedia>
              </CardActionArea>

             
            </Card>
          
          </Grid>);
        })
      }
  </Grid>
  );
  
}

export default Products