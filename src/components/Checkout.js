
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from "../lib/commerce"
import { Grid } from '@material-ui/core';
import ShippingForm from './ShippingForm'
import PaymentForm from './paymentForm'

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

    return (

        <Grid container direction="column">

            <Grid item>
                <h1> Checkout Page</h1>
            </Grid>
            <Grid item >
                <h3> Shipping Form</h3>
                <ShippingForm checkoutToken={checkoutToken} setShippingInfo={setShippingInfo} />
                    {
                        //shippingInfo["country"] &&
                        console.log(shippingInfo)
                        // console.log("FullName:", shippingInfo["fullName"], 
                        //         "Ph no:", shippingInfo["Phone"], 
                        //         "StreetAddress:", shippingInfo["StreetAddress"], 
                        //         "City:", shippingInfo["City"], 
                        //         "Zipcode:", shippingInfo["Zipcode"], 
                        //         "country:", shippingInfo["Country"], 
                        //         "region:", shippingInfo["region"], 
                        //         "Shipping:", shippingInfo["shipping" ])
                    }
            </Grid>
            <Grid item>
                <PaymentForm />
            </Grid>
            <Grid item>
                <p>Submission</p>
            </Grid>
        </Grid>
    )

}

export default Checkout;