
import { commerce } from "../lib/commerce";
import { Grid, TextField , Button} from '@material-ui/core';
import { useState } from "react";

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
        commerce.customer.login(loginEmail, "http://localhost:3000/user")
        .then((response) => 
            console.log(response),
            setIsSent(true)
            );      
    }
     

}
const [isSent, setIsSent] = useState(false);
if(isSent) {
    return <h3> An email is sent to {loginEmail}</h3>
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