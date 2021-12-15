import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';

import { commerce } from "../lib/commerce"
import { Button, Grid } from '@material-ui/core';
import ShippingForm from './ShippingForm'
import PaymentForm from './paymentForm';



function Checkout({ cart }) {
    const [checkout, setCheckout] = useState({});
    useEffect(() => {
        if (cart.id) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
                (checkout) => {
                    setCheckout(checkout)
                    //console.log(CheckoutID)
                }
            );
        }
    }, [cart]);
    console.log(checkout)

    const [shippingInfo, setshippingInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});
    // console.log(shippingInfo)

    const handlePlaceOrder = (checkout, shippingInfo, paymentMethod) => {
        console.log(checkout);
        console.log(shippingInfo);
        console.log(paymentMethod);

        const indexofspace = shippingInfo.fullName.indexOf(' ');
        const orderData = {
            "line_items": checkout.live.line_items,
            "customer": {
                "email": shippingInfo["email"],
                "firstname": shippingInfo["fullName"].substring(0, indexofspace),
                "lastname": shippingInfo["fullName"].substring(indexofspace + 1),
                "phone": shippingInfo["phone"]
            },

            "shipping": {
                "name": shippingInfo["fullName"],
                "street": shippingInfo["streetAddress"],
                "town_city": shippingInfo["city"],
                "county_state": shippingInfo["region"],
                "postal_zip_code": shippingInfo["zipcode"],
                "country": shippingInfo["country"]
            },
            "fulfillment": {
                "shipping_method": shippingInfo["shipping"],
            },
            "payment": {
                "gateway": 'stripe',
                "stripe": {
                    "payment_method_id": paymentMethod["id"]
                }
            }

        };
        //console.log(orderData);
        commerce.checkout.capture(checkout.id, orderData).then(
            (response) => {
                console.log(response);
                setIsOrderPlaced(true);

            }
        );
    }

    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    if (isOrderPlaced) {
        return <h3> Your Order is Placed!< br /> You will receive confirmation email shortly!</h3>
    }

    if (!checkout.id) return <h4>Loading</h4>
    return (
        <Grid container direction='column' spacing={2}>
            <Grid item >
                <h4>Checkout</h4>
                <Grid item >
                    <h4>ShippingForm</h4>
                    <ShippingForm checkoutToken={checkout.id} setshippingInfo={setshippingInfo} />
                    {
                        shippingInfo["country"] &&
                        console.log(
                            shippingInfo)}

                </Grid>

                <Grid item >

                    <PaymentForm setPaymentMethod={setPaymentMethod} />
                </Grid>
                <Grid item >
                    <Button variant="contained" color="secondary" onClick={(event) => { handlePlaceOrder(checkout, shippingInfo, paymentMethod) }}> PLACE ORDER</Button>
                </Grid>

            </Grid>

        </Grid>
    )

}
export default Checkout;