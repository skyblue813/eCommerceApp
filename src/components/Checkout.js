
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from "../lib/commerce"
import { Grid, Button } from '@material-ui/core';
import ShippingForm from './ShippingForm'
import PaymentForm from './paymentForm'
import { CenterFocusStrong } from '@material-ui/icons';

function Checkout({ cart }) {

    const [checkoutToken, setCheckoutToken] = useState(cart);

    useEffect(() => {
        if (cart.id) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
                (checkoutToken) => {
                    setCheckoutToken(checkoutToken.id)
                    console.log(checkoutToken.id);
                }

            );
        }

    }, [cart]);
    console.log(checkoutToken);


    //const [formData, setFormData] = useState({});
    const [shippingInfo, setShippingInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});

    const handlePlaceOrder = (checkoutToken, shippingInfo, paymentMethod) => {
        console.log(checkoutToken);
        console.log(shippingInfo);
        console.log(paymentMethod);
    }

    return (

        <Grid container direction="column">

            <Grid item>
                <h3> Checkout Page</h3>
            </Grid>
            <Grid item >
                <h4><u>Shipping Form</u></h4>
                <ShippingForm checkoutToken={checkoutToken} setShippingInfo={setShippingInfo} />
                {
                    //shippingInfo["country"] &&
                    console.log(shippingInfo)
                }
            </Grid>
            <Grid item>
                <PaymentForm setPaymentMethod={setPaymentMethod} />
            </Grid>
            <Grid container justifyContent="center">
                <Grid item >
                    <Button onClick={(event) => { handlePlaceOrder(checkoutToken, shippingInfo, paymentMethod) }}
                    variant="contained" color="secondary" >Place Order</Button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Checkout;