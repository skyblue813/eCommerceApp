import {commerce} from '../lib/commerce';
import { useEffect, useState,Link } from 'react';

function Products() {
  console.log("Products.js");
  const [Products, setProducts] = useState([]);
  useEffect( () => {
      commerce.products.list().then(result => {
          setProducts(result.data);
          console.log(result.data);
  });
}, []);
  

  return(
      <main>
          {Products.length === 0 && <p>Loading . . .</p>}
          {
              Products.map((Product) => {
                  return <Link to={"/products/"+Product.id} key={Product.id}><img key={Product.id} src ={Product.image.url} alt={Product.name} /></Link>;
              })
          }
      </main>
  );
}

export default Products;