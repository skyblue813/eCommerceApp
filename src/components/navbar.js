import StorefrontIcon from '@material-ui/icons/Storefront';
import {AppBar, Toolbar, Typography,IconButton, Badge, Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar({cartItems}){
    return(
    <AppBar position = "static" color = "primary">
          <Toolbar>
              
          <IconButton href ="/Products" width = '50'><StorefrontIcon/></IconButton>
              <Typography >Baby Shop</Typography>
              <IconButton href = "/cart">
                  <Badge badgeContent = {cartItems} color = "error">
                  <ShoppingCartIcon />
                  </Badge>
              </IconButton>
             <Button size ="small" variant ="inherit" color = "primary" onClick={
                (event) => {
                window.location.href='/login'}}> Login</Button>
          </Toolbar>
        </AppBar>
    );
   }
   export default Navbar;