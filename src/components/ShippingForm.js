

import { MenuItem, Select, Button, TextField, Grid } from "@material-ui/core";
import { useState } from "react";


function ShippingForm({setFormData, checkoutToken}) {
    const [country, setCountry] = useState("USA");
    const [userName, setUserName] = useState("");
    console.log(checkoutToken);
    return (
       
        <div>
            
            <Grid container direction = "column">
                <Grid item>
            <TextField name = "UserName" label =" User Name: " onChange={(e) => {setUserName(e.target.value)}} ></TextField>
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
            <Button onClick ={() =>
            setFormData(
                {
                    "Country" : country,
                    "userName": userName,
                }
            )
            }>Submit form</Button>
</Grid>
            
            </Grid>
        </div>
    );
}
export default ShippingForm;