import { Grid, IconButton , Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles({
    images: {
        width:180,
        height: 200
    },
    img: {
        
        margin:'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    
    },
    buttons:{
        display: 'flex',
        alignItems:'center'
    },
});

function CartItem({cartItem, updateCart}){
    const classes = useStyles();
    return(
        
        <Grid  item container>
            
            <Grid item container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <div className={classes.images}>
                        <img src={cartItem.image.url} className={classes.img}></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} container direction="column" >
                    <Grid item>
                        {cartItem.name}
                    </Grid>
                    <Grid item>

                        <p><strong>Quantity: {cartItem.quantity}</strong></p>
                    </Grid>
                    
                    <Grid container item >
                        <Grid item>
                            <IconButton color="primary" onClick={
                                () => {
                                updateCart(cartItem.id, {quantity: cartItem.quantity + 1});
                            } }>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Grid>
                    
                        <Grid item>
                            <IconButton color="secondary" onClick={() => {
                                updateCart(cartItem.id, {quantity: cartItem.quantity -1});
                            } }>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                        </Grid>
                        
                        
                    </Grid>
                    <Grid item>
                            <Button size ="small" variant ="contained" color = "inherit" onClick={
                        ()=> {
                            updateCart(cartItem.id, {quantity:0});
                        }
                            }> Remove</Button>
                         </Grid>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div>{cartItem.line_total.formatted_with_symbol}</div>
                </Grid>
            </Grid>
        </Grid>
       
    );
    
                        }

export default CartItem;