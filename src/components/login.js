
import { commerce } from "../lib/commerce";
import { Grid, TextField , Button} from '@material-ui/core';
import { useState, useEffect } from "react";

function Login() {


    const [loginEmail, setEmail] = useState("");
    const [loginEmailError, setEmailError] = useState(false);
    const [loginEmailHelper, setEmailHelper] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onEmailfieldUnfocused = (e) => {
        if (!loginEmail) {
            setEmailError(true);
            setEmailHelper("Please provide your email");
        } else {
            setEmailError(false);
            setEmailHelper("");
        }
    }

    const handleEmail = (e)=>{
        if(loginEmail){
        commerce.customer.login(loginEmail, window.location.href+"/Products")
        .then((response) => 
            console.log(response))
        
    }
}
    return (
        <div>
            <h3>Login Here </h3>
            <Grid container direction='column'>
            <Grid item>
                    <TextField name="email" label="Email " onChange={onEmailChange}
                        error={loginEmailError}
                        helperText={loginEmailHelper}
                        onBlur={onEmailfieldUnfocused}
                    />
                </Grid>
            <Grid item>
            <Button size ="small" variant ="contained" color = "primary" 
                    onClick= {handleEmail} > Login Token</Button>
            </Grid>
                </Grid>
                </div>
);
    
}
export default Login;