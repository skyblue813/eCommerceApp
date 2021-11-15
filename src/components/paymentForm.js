import { Button, Grid } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { useState } from "react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({setPaymentMethod}) {
    console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    console.log(stripePromise);
    const cardElement = useState("");

    const handleCardSubmit = (event, stripe, elements) => {
        event.preventDefault();
        
        cardElement = elements.getElement(cardElement);
        console.log(cardElement);

        stripePromise.createPaymentMethod({ type: "card", card: cardElement }).then(
            ({ error, paymentMethod }) => {
                if (error) {
                    console.log(error);
                }
                else {
                    setPaymentMethod(paymentMethod);
                    console.log(paymentMethod);
                }
            }
        );
    }

    return (

        <Elements stripe={stripePromise} >
            <ElementsConsumer>
                {
                    ({ stripe, elements }) => (
                        <div>
                            <CardElement />
                            <Button onClick ={(event) => handleCardSubmit(event,stripe, elements)} 
                            variant="contained" color="primary" size="small"> Submit Card Payment</Button>
                        </div>
                    )
                }
            </ElementsConsumer>

        </Elements>
    );
}

export default PaymentForm;