import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core"

import { commerce } from "../lib/commerce";
import { makeStyles } from "@material-ui/core";


function HomePage({ isLogin, setIsLogin }) {
    const useStyles = makeStyles({

        media: {
 
            border: '1px solid black',
            maxWidth: 1200,
            boxShadow: '0 1px 3px 2px',
            backgroundColor: '#cacac8',
        },
        items: {
            //border: '1px solid black',
            boxShadow: '0 1px 3px 2px',
            maxWidth: 1200,
            backgroundColor: '#e8e8e6',
        }
    });
    const classes = useStyles();
    const { custID } = useParams();
    console.log(custID);

    const [custEmail, setCustEmail] = useState("");
    //const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        commerce.customer.getToken(custID).then(
            (response) => {
                console.log(response);
                setIsLogin(true);
                console.log(custID);
            }
        );
    }, [custID, setIsLogin]);

    useEffect(() => {
        commerce.customer.about().then(
            (customer) => {
                console.log(customer);
                setCustEmail(customer.email);
            }
        );
    });
    console.log(custID);
    const [custOrders, setCustOrders] = useState([]);

    useEffect(() => {
        if (commerce.customer.isLoggedIn() && isLogin) {
            commerce.customer.getOrders(commerce.customer.id()).then(
                (response) => {
                    console.log(response)
                    setCustOrders(response.data)
                }
            );
        }
    }, [isLogin]);

    if (!commerce.customer.isLoggedIn()) {
        return (
            <div> Please login first to view orders summary</div>
        );
    }

    return (
        <div>
            <h2> HomePage</h2>
            {custEmail && <h3>Welcome! {custEmail}</h3>}

            {custOrders.map(
                (orderItem) => {
                    var date = new Date(0);
                    date.setUTCSeconds(orderItem.created);
                    return (
                        <Grid container spacing={2} style ={{margin: '24px'}}>
                            <Grid item container direction="column" className={classes.media} >
                                <Grid item sm={6} md={4} lg={3}>
                                    <h4> Order Placed on:  {date.toLocaleDateString()} </h4>
                                    <h5> OrderTotal:  {orderItem.order_value.formatted_with_code} </h5>
                                </Grid>

                                {orderItem.order.line_items.map((lineItem) => {
                                    return (
                                        <Grid container direction="row" spacing={2} xs={10} className={classes.items}>
                                            <Grid item xs={7}><p>{lineItem.product_name}</p></Grid>
                                            <Grid item xs={2}><p>{lineItem.quantity}</p></Grid>
                                            <Grid item xs={3}><p>{lineItem.line_total.formatted_with_code}</p></Grid>
                                        </Grid>
                                    )
                                })
                                }

                            </Grid>
                        </Grid>

                    )
                }
            )
            }
        </div>
    );

}

export default HomePage;
