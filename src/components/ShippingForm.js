import { MenuItem, Select, Button, TextField, Grid} from "@material-ui/core";
import { Fullscreen } from "@material-ui/icons";
import { useState } from "react";
import ReactPhoneInput from 'react-phone-input-material-ui';


function ShippingForm({ setFormData, checkoutToken}) {
    const [country, setCountry] = useState("USA");
    const [fullName, setFullName] = useState("");
    const [textError, setTextError] = useState(false);
    const [textHelper, setTextHelper] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelper, setPhoneHelper] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [addressHelper, setAddressHelper] = useState("");
    const [city,setCity] = useState("");
    const [cityError, setCityError] = useState(false);
    const [cityHelper, setCityHelper] = useState("");
    const [zipcode,setZipcode] = useState("");
    const [zipcodeError, setZipcodeError] = useState(false);
    const [zipcodeHelper, setZipcodeHelper] = useState("");

    console.log(checkoutToken);

    

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
    //console.log(fullName);

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
    //console.log(phone);

    const onStreetAddressChange = (e) => {
        setStreetAddress(e.target.value);
    };

    const onStreetAddressUnfocused = (e) => {
        if (!streetAddress) {
            setAddressError(true);
            setAddressHelper("Plese enter the Address");
        } else {
            setAddressError(false);
            setAddressHelper("");
        }
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
    };

    const onCityUnfocused = (e) => {
        if (!city) {
            setCityError(true);
            setCityHelper("Plese enter the city");
        } else {
            setCityError(false);
            setCityHelper("");
        }
    }

    const onZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const onZipcodeUnfocused = (e) => {
        if (zipcode.length !== 5) {
            setZipcodeError(true);
            setZipcodeHelper("Plese enter the Zipcode");
        } else {
            setZipcodeError(false);
            setZipcodeHelper("");
        }
    }

    console.log({fullName, phone, streetAddress, city, zipcode, country});

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <TextField name="fullName" label="Enter your Full Name " onChange={onTextFieldChange}
                        error={textError}
                        helperText={textHelper}
                        onBlur={onTextFieldUnfocused}
                    />
                    </Grid>
                    <Grid item>
                        <ReactPhoneInput component={TextField} onChange={onPhoneChange}
                            inputProps={
                                {
                                    error: phoneError,
                                    helperText: phoneHelper,
                                    onBlur: onPhoneUnfocused
                                }
                            }
                        />
                </Grid>
                <Grid item>
                    <TextField name="streetAddress" label=" Enter Street Address " onChange={onStreetAddressChange}
                        error={addressError}
                        helperText={addressHelper}
                        onBlur={onStreetAddressUnfocused}
                    />
                    </Grid>
                    <Grid item>
                    <TextField name="city" label="Enter City " onChange={onCityChange}
                        
                                    error={cityError}
                                    helperText={cityHelper}
                                    onBlur= {onCityUnfocused}
                        />
                </Grid>
                <Grid item>
                    <TextField name="zipcode" label="Enter Zipcode " onChange={onZipcodeChange}
                        
                                    error={zipcodeError}
                                    helperText={zipcodeHelper}
                                    onBlur= {onZipcodeUnfocused}
                        />
                </Grid>
                <Grid item>
                    <Select value={country} onChange={(e) => { setCountry(e.target.value) }}>
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="Canada">Canada</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                        <MenuItem value="Australia">Australia</MenuItem>
                    </Select>
                </Grid>
                <Grid item>

                </Grid>
                <Grid item>
                    <Button variant ="contained" color = "primary" onClick={() => {
                        onTextFieldUnfocused(fullName)
                        onPhoneUnfocused(phone)
                        onStreetAddressUnfocused(streetAddress)
                        onCityUnfocused(city)
                        onZipcodeUnfocused(zipcode)

                        setFormData(
                            {
                                "Country": country,
                                "fullName": fullName,
                                "Phone": phone,
                                "StreetAddress": streetAddress,
                                "City": city,
                                "Zipcode": zipcode,
                            }
                        )
                    }
                    }>Use this Shipping Address</Button>

                </Grid>

            </Grid>
        </div>

    );
}
export default ShippingForm;