
import { useState, useEffect, Link } from "react";
import { commerce } from '../../lib/commerce';

function Products() {
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
    <main>
      {products.length === 0 && <p>Loading . . .</p>}
      {
        products.map((product) => {
          
          //return <Link to={"/Products/" + product.id} key={product.id}><img key={product.id} src={product.image.url} alt={product.name} /></Link>;
          return (
          <a href = {"/Products/" + product.id} >
          <img key = {product.id} src = {product.image.url} width= {150}/>
          </a> );
        })
      }
    </main>
  );
}

export default Products