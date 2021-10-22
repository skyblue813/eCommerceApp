
import './App.css';
//import {commerce} from "@chec/commerce.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Product from './components/Products/Product';
import Products from './components/Products/Products';
import {AppBar, Grid, Toolbar, Typography,IconButton} from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from './lib/commerce';



function App() {

  const [cart,setCart] = useState({});
useEffect(() => {
  commerce.cart.retrieve().then(
    (response)=> {
      console.log(response);
      setCart(response);
    }
  )
}, []);

 const handleAddToCart = (ProductId, quantity) => {
    commerce.cart.add(ProductId, quantity).then(
      (response) => {
        console.log(response);
      }
    );
  }
  
  return (
    <Grid container direction = 'column'>
      <Grid item>
        <AppBar position = "static">
          <Toolbar>
          <IconButton href ="/"><StorefrontIcon/></IconButton>
              <Typography>Baby Shop</Typography>
          </Toolbar>
        </AppBar>

      
    </Grid>
    <Grid item container>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={8}>
          
          <h1>Welcome to Baby Shop!</h1>
              
              <BrowserRouter>
                <Switch>

                  <Route path={["/Products/:ProductId"]}>
                    <Product handleAddToCart={handleAddToCart}/>
                  </Route>

                  <Route path={["/Products"]}>
                    <Products />
                  </Route >
                </Switch>

              </BrowserRouter>

          
          </Grid>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
      </Grid>
      </Grid>
  );
}


export default App;