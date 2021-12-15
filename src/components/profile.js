
import { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import { Grid, TextField, Button } from "@material-ui/core";
import ReactPhoneInput from 'react-phone-input-material-ui';




function Profile({ isLogin, setIsLogin }) {
    const [fullName, setFullName] = useState("");
    const [textError, setTextError] = useState(false);
    const [textHelper, setTextHelper] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelper, setPhoneHelper] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelper, setEmailHelper] = useState("");
    const [custID, setCustID] = useState("");


    useEffect(() => {
        if (commerce.customer.isLoggedIn()) {
            commerce.customer.about().then(
                (customer) => {
                    console.log(customer);
                    setCustID(customer.id);
                    setPhone(customer.phone);
                    setFullName(customer.firstname + ' ' + customer.lastname);
                    setEmail(customer.email);
                }
            );
        }
    }, []);

    const handleUpdate = (e) => {
        if (e) {
            const indexofspace = fullName.indexOf(' ');
            const firstname = fullName.substring(0, indexofspace);
            const lastname = fullName.substring(indexofspace+1);

            commerce.customer.update({
                email: email,
                firstname: firstname,
                lastname: lastname,
                phone: phone,
            }, custID).then((customer) => console.log(customer));
        }

    }
    const onTextFieldChange = (e) => {
        setFullName(e.target.value);
    }
    const onTextFieldUnfocused = (e) => {
        if (!fullName) {
            setTextError(true);
            setTextHelper("Please provide your full name");
        } else {
            setTextError(false);
            setTextHelper("All set");
        }
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onEmailfieldUnfocused = (e) => {
        if (!email) {
            setEmailError(true);
            setEmailHelper("Please enter your email");
        } else {
            setEmailError(false);
            setEmailHelper("All set");
        }
    }

    const onPhoneChange = (phoneNumber) => {
        setPhone(phoneNumber);
    };
    const onPhoneUnfocused = () => {
        if (phone.length !== 11) {
            setPhoneError(true);
            setPhoneHelper("Plese enter the phone number");
        } else {
            setPhoneError(false);
            setPhoneHelper("");
        }
    }


    return (
        <div>
            <h3>Profile</h3>
            <Grid container direction='column'>
                <Grid item>
                    <TextField name="fullName" label=" Full Name " value={fullName} onChange={onTextFieldChange}
                        error={textError}
                        helperText={textHelper}
                        onBlur={onTextFieldUnfocused}
                    />
                </Grid>
                <Grid item>
                    <TextField name="email" label="Email " value={email} onChange={onEmailChange}
                        error={emailError}
                        helperText={emailHelper}
                        onBlur={onEmailfieldUnfocused}
                    />
                </Grid>
                <Grid item>
                    <ReactPhoneInput component={TextField} value={phone} onChange={onPhoneChange}
                        inputProps={
                            {
                                error: phoneError,
                                helperText: phoneHelper,
                                onBlur: onPhoneUnfocused
                            }
                        }
                    />
                    <Button onClick={handleUpdate}>UPDATE</Button>
                </Grid>
            </Grid>

        </div>
    );
}

export default Profile;