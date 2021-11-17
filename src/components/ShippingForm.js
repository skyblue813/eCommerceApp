import { MenuItem, Select, Button, TextField, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import ReactPhoneInput from 'react-phone-input-material-ui';


function ShippingForm({ checkoutToken, setshippingInfo }) {
    //console.log(checkoutToken)

    const [country, setCountry] = useState("");

    const [fullName, setFullName] = useState("");
    const [textError, setTextError] = useState(false);
    const [textHelper, setTextHelper] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelper, setPhoneHelper] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelper, setEmailHelper] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [addressHelper, setAddressHelper] = useState("");
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState(false);
    const [cityHelper, setCityHelper] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [zipcodeError, setZipcodeError] = useState(false);
    const [zipcodeHelper, setZipcodeHelper] = useState("");



    const [countries, setCountries] = useState(undefined);
    useEffect(() => {
        if (checkoutToken) {
            commerce.services.localeListShippingCountries(checkoutToken).then((response) => {
                setCountries(response["countries"]);
                setCountry(Object.keys(response["countries"])[0]);
            }
            );
        }
    }, [checkoutToken]);

   //console.log(country);
    //console.log(countries);

    //for region

    const [region, setRegion] = useState("");
    const [regions, setRegions] = useState(undefined);

    useEffect(() => {

        if (country) {
            commerce.services.localeListShippingSubdivisions(checkoutToken, country)
                .then((response) => {
                    setRegions(response["subdivisions"]);
                    setRegion(Object.keys(response["subdivisions"])[0]);

                });

        }

    }, [checkoutToken, country]);

    //console.log(region);
    //console.log(regions);

    // shippingMethod

    const [shippingMethods, setShippingMethods] = useState(undefined);

    const [shippingMethod, setShippingMethod] = useState("");

    useEffect(() => {
        if (country && region) {
            commerce.checkout.getShippingOptions(checkoutToken, {
                "country": country,
                "region": region,
            }).then((response) => {
                console.log(response);
                setShippingMethods(response);
                setShippingMethod(response[0]["id"]);
            });
        }
    }, [checkoutToken, country, region]);

    //console.log(shippingMethod);


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
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onEmailfieldUnfocused = (e) => {
        if (!email) {
            setEmailError(true);
            setEmailHelper("Please provide your email");
        } else {
            setEmailError(false);
            setEmailHelper("All set");
        }
    }


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
            setCityHelper("Please enter the city");
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



    return (
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <TextField name="fullName" label=" Full Name " onChange={onTextFieldChange}
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
                    <TextField name="email" label="Email " onChange={onEmailChange}
                        error={emailError}
                        helperText={emailHelper}
                        onBlur={onEmailfieldUnfocused}
                    />
                </Grid>
                <Grid item>
                    <TextField name="streetAddress" label=" Street Address " onChange={onStreetAddressChange}
                        error={addressError}
                        helperText={addressHelper}
                        onBlur={onStreetAddressUnfocused}
                    />
                </Grid>
                <Grid item>
                    <TextField name="city" label=" City " onChange={onCityChange}

                        error={cityError}
                        helperText={cityHelper}
                        onBlur={onCityUnfocused}
                    />
                </Grid>
                <Grid item>
                    <TextField name="zipcode" label=" Zipcode " onChange={onZipcodeChange}

                        error={zipcodeError}
                        helperText={zipcodeHelper}
                        onBlur={onZipcodeUnfocused}
                    />
                </Grid>
                {countries && country && <Grid item>

                    <Select value={country} onChange={(e) => { setCountry(e.target.value) }}>

                        {
                            Object.keys(countries).map((countryCode) => {
                            return <MenuItem value={countryCode} key={countryCode}> {countries[countryCode]}</MenuItem>
                            })

                        }
                    </Select>
                </Grid>}

                {regions && region && <Grid item>

                    <Select value={region} onChange={(e) => { setRegion(e.target.value) }}>

                        {
                            Object.keys(regions).map((regionCode) => {
                                return <MenuItem value={regionCode} key={regionCode}> {regions[regionCode]}</MenuItem>
                            })

                        }

                    </Select>

                </Grid>}

                {shippingMethods && shippingMethod && <Grid item>

                    <Select value={shippingMethod} onChange={(e) => { setShippingMethod(e.target.value) }}>

                        {

                            shippingMethods.map((oneMethod) => {
                                return <MenuItem value={oneMethod["id"]} key={oneMethod["id"]}> {oneMethod["description"]}</MenuItem>
                            })

                        }

                    </Select>

                </Grid>}

                <Grid item>
                    <Button size ="small" variant ="contained" color = "primary" 
                    onClick={() => {
                        onTextFieldUnfocused(fullName)
                        onPhoneUnfocused(phone)
                        onStreetAddressUnfocused(streetAddress)
                        onCityUnfocused(city)
                        onZipcodeUnfocused(zipcode)
                        onEmailfieldUnfocused(email)

                        setshippingInfo(
                            {
                                "country": country,
                                "fullName": fullName,
                                "phone": phone,
                                "email": email,
                                "streetAddress": streetAddress,
                                "city": city,
                                "region": region,
                                "shipping": shippingMethod,
                                "zipcode": zipcode,
                            });
                    }
                    }> Use this Shipping Address</Button>

                </Grid>

            </Grid>
        </div>

    );
}
export default ShippingForm;
