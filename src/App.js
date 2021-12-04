
import './App.css';
//import {commerce} from "@chec/commerce.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Product from './components/Products/Product';
import Products from './components/Products/Products';
import { Grid } from '@material-ui/core';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from './lib/commerce';
import Navbar from './components/navbar';
import Checkout from "./components/Checkout"
import Login from './components/login';
import HomePage from './components/homePage';




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
        setCart(response.cart);
      }
    );
  }
  
  const updateCart = (lineItemId,quantity) =>{
    commerce.cart.update(lineItemId,quantity).then(
      (response)=> {
        console.log(response);
        setCart(response.cart);
      }
    );
        
  }

  const emptyCart=()=>{
    commerce.cart.empty().then(
      (response) => {
        console.log(response);
        setCart(response.cart);
      }
      );
  }

  //const [loggedIn, setLoggedIn] = useState("");
  const [isLogin, setIsLogin] = useState(false);
    const isLoggedIn = commerce.customer.isLoggedIn();
  
  useEffect(() => {
    setIsLogin(commerce.customer.isLoggedIn());
  },[isLoggedIn]);

  return (
    <Grid container direction = 'column'>
      <Grid item>
        <Navbar cartItems = {cart.total_items} isLogin = {isLogin}/>
    </Grid>
    <Grid item container>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={8}>
          
          <h2>Welcome to Baby Shop!</h2>
              
              <BrowserRouter>
                <Switch>

                  <Route exact path={["/Products/:ProductId"]}>
                    <Product handleAddToCart={handleAddToCart}/>
                  </Route>

                  <Route exact path={["/Products"]}>
                    <Products />
                  </Route >
                  <Route exact path={["/cart"]}>
                    <Cart cart = {cart} updateCart={updateCart} emptyCart={emptyCart} Checkout ={Checkout} />
                    
                 </Route>
                   <Route exact path={["/Checkout"]}>
                  <Checkout  cart = {cart}/>

                  </Route>
                  <Route exact path={["/Login"]}>
                  <Login/>
                   
                  </Route>
                  <Route  path={["/user/:custID"]}>
                  <HomePage isLogin ={isLogin} setIsLogin={setIsLogin}/> 
                   
                  </Route>
                </Switch>

              </BrowserRouter>

          
          </Grid>
          <Grid item xs={false} sm={1} md={2} lg={2}></Grid>
      </Grid>
      </Grid>
  );
}


export default App;