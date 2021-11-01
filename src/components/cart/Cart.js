
import { Grid , Button, Link} from "@material-ui/core";
import CartItem from "./cartItem";
import {commerce} from "../../lib/commerce"




function Cart({cart, updateCart, emptyCart}){
    if(! cart || ! cart.line_items){
        return <div>Loading the cart...</div>
    }

    else if(cart.total_items === 0){
        return <div>your shopping cart is empty!</div>
    }
 
    else return(
        <div><h2>Your Shopping Cart</h2> 
        <Grid container direction = "column" spacing = {4}>
            
            <Grid item >
            {
             cart.line_items.map(
                 (cartItem) => {
                     return(
                         <CartItem key = {cartItem.id} cartItem = {cartItem} updateCart = {updateCart} emptyCart={emptyCart}/>
                                );
                         }
                    )
            }
            </Grid>
            <Grid item>
            <Button variant ="contained" color = "primary" onClick={
                        ()=> {
                            emptyCart();
                        }
                    }> Empty your Cart</Button>
            <Button onClick={
                (event) => {
                window.location.href='/Checkout'
                commerce.checkout.generateToken(cart.id, {"type": "cart"}).then( (response) => {
                console.log(response);
                });
            }}>Generate Checkout Token</Button>
            </Grid>
            </Grid>
        </div>
    
    );
}

export default Cart;
// event => window.location.href='/Checkout'