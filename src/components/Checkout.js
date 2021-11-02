import react from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from "../lib/commerce"
import { Grid } from '@material-ui/core';
import ShippingForm from './ShippingForm'

function Checkout({ cart }) {
    //     const [token,setToken] = useState({});
    // useEffect(() => {
    //   commerce.checkout.generateToken(cart.id, {type :"cart"}).then(
    //     (response)=> {
    //       console.log(response);
    //       setToken(response);
    //     }
    //   )
    // }, []);

    const [checkoutToken, setCheckoutToken] = useState();

    useEffect(() => {
        if (cart.id) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
                (response) => { 
                    console.log(response);
                    setCheckoutToken(response);
                     }
            );
        }
    }, [cart]);
    //console.log(checkoutToken.id);


    const [formData, setFormData] = useState({});
    return (

        <Grid container direction="column">

            <Grid item>
                <p> Checkout Page</p>
            </Grid>
            <Grid item >
                <p> Shipping Form</p>
                <ShippingForm checkoutToken = {checkoutToken} setFormData={setFormData} />
                <p> Form Submission Summary:</p>
                {formData["Country"] && <p>Country: {formData["Country"]}</p>}
                {formData["userName"] && <p>User Name: {formData["userName"]}</p>}
            </Grid>
            <Grid item>
                <p>Payment Information</p>
            </Grid>
            <Grid item>
                <p>Submission</p>
            </Grid>
        </Grid>
    )
}

export default Checkout;