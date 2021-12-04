import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { commerce } from "../lib/commerce";
//import { , useEffect } from "react";

function HomePage({isLogin, setIsLogin}) {

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
    }, [custID]);
    
    useEffect(() =>{
        commerce.customer.about().then(
            (customer) => {
                console.log(customer);
                setCustEmail(customer.email);
            }
        );
    });

    return (
        <div>
            <h2> HomePage</h2>
            {custEmail && <h3>Welcome! {custEmail}</h3>}
        </div>
            
    );
}

export default HomePage;