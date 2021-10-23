import { Grid } from "@material-ui/core";
import CartItem from "./cartItem";

function Cart({cart}){
    if(! cart || ! cart.line_items){
        return <div>Loading the cart...</div>
    }

    else if(cart.total_items === 0){
        return <div>your shopping cart is empty!</div>
    }
 
    else return(
        <div><h2>Your Shopping Cart</h2> 
        <Grid container direction = "column">
            {
             cart.line_items.map(
                 (cartItem) => {
                     return(
                         <CartItem key = {cartItem.id} cartItem = {cartItem} />
                                );
                         }
                    )
            }

        </Grid>
        </div>
    
    );
}

export default Cart;