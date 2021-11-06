import react from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { commerce } from "../lib/commerce"
import { Grid } from '@material-ui/core';
import ShippingForm from './ShippingForm'

function Checkout({ cart }) {

    const [checkoutToken, setCheckoutToken] = useState(cart);

    useEffect(() => {
        if (cart.id) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
                (checkoutToken) => { 
                    setCheckoutToken(checkoutToken.id)
                //console.log(checkoutID.id); 
            }

            );
        }

    }, [cart]);
   // console.log(checkoutToken);


    const [formData, setFormData] = useState({});


    return (

        <Grid container direction="column">

            <Grid item>
                <h1> Checkout Page</h1>
            </Grid>
            <Grid item >
                <h3> Shipping Form</h3>
                <Grid item>
                    <ShippingForm checkoutToken={checkoutToken} setFormData={setFormData} />

                    {/* <p> Form Submission Summary:</p>
                    {formData["Country"] && <p>Country: {formData["Country"]}</p>}
                    {formData["fullName"] && <p>Full Name: {formData["fullName"]}</p>}
                    {formData["Phone"] && <p>Phone Number: {formData["Phone"]}</p>}
                    {formData["StreetAddress"] && <p>Street Address: {formData["StreetAddress"]}</p>} */}
                </Grid>

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