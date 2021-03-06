import StorefrontIcon from '@material-ui/icons/Storefront';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {commerce} from "../lib/commerce";

function Navbar({ cartItems, isLogin }) {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>

                <IconButton href="/Products" width='50'><StorefrontIcon /></IconButton>
                <Typography >Baby Shop</Typography>
                <IconButton href="/cart">
                    <Badge badgeContent={cartItems} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <Button onClick={(event) => {
                    window.location.href = '/user/:custID'
                }}> Orders </Button>
                 <IconButton href="/profile">
                        <AccountCircleIcon />
                </IconButton>
                {!isLogin && <Button onClick={(event) => {
                    window.location.href = '/Login'
                }
                }>LogIn  </Button>}
                {isLogin && <Button onClick={(event)=>{
                    commerce.customer.logout();
                    window.location.href = '/Products'}
                }>LogOut</Button>}                
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;