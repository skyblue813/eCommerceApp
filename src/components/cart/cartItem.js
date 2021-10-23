import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    images: {
        width:168,
        height: 120
    },
    img: {
        border: '1px double blue',
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

function CartItem({cartItem}){
    const classes = useStyles();

    return(
        <Grid container spacing ={2}>
            <Grid item xs ={12} sm={4}  >
                <div className={classes.images}>
                    <img src={cartItem.image.url} className={classes.img}></img>
                </div>
            </Grid>
            <Grid item xs ={12} sm={6} container direction ="column" >
                <Grid item>
                    {cartItem.name}
                </Grid>
                <Grid item>
                   Quantity: {cartItem.quantity}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
                <div>{cartItem.line_total.formatted_with_symbol}</div>
            </Grid>
        </Grid>
    );
    
}

export default CartItem;