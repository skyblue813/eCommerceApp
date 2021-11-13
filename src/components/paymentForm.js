import { Button } from "@material-ui/core";
import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm(){
    console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    console.log(stripePromise)
   
    return (
      
       <Elements stripe ={stripePromise} >
           <ElementsConsumer>
               {
                   ({stripe, elememnts}) => (
                       <form>
                           <CardElement />
                           <Button> Submit Card Payment</Button>
                           
                        </form>
                   )
               }
           </ElementsConsumer>

       </Elements>
    );
}

export default PaymentForm;