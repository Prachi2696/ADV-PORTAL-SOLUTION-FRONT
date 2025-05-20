import * as React from "react";
// import Button from "react-bootstrap/Button";

import { Box, TextField, Button, Grid, Select, MenuItem } from '@mui/material';

import { useHistory } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { useState, useEffect } from "react";
import BaseLocal from "./BaseLocal";
import Baseurl from "./Baseurl";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@material-ui/core";
import BaseurlAdmin from "./BaseurlAdmin";
import { useRef } from "react";

function Registration() {

    // -----------------------------------------------

    const [dept_is_active, setdept_is_active] = useState();
    const handleDeptStatusChange = (event, newStatus) => {
        // alert(newStatus)
        setdept_is_active(newStatus);
    };


    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
        fetch(BaseurlAdmin + "otp")
            .then((data) => {
                const res = data.json();

                return res
            }).then((res) => {
                setOtpres(res)
                //alert(JSON.stringify(res))
                // setsslot(res)
                // alert(dept_codelist.dept_code_name)
                // console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })
    };

    const handleClose = () => {
        setOpen(false);
    };



    //----------------------------------------------------





    const [dept_name, setdept_name] = useState("")
    const [dept_nameError, setdept_nameError] = useState("")
    const [dept_nameHelperText, setdept_nameHelperText] = useState("")

    const [address, setAddress] = useState("")
    const [addressError, setAddressError] = useState("")
    const [addressHelperText, setaddressHelperText] = useState("")

    const [contact_person, setcontact_person] = useState("")
    const [contact_personError, setcontact_personError] = useState("")
    const [contact_personHelperText, setcontact_personHelperText] = useState("")

    const [designation, setdesignation] = useState("")
    const [designationError, setdesignationError] = useState("")
    const [designationHelperText, setdesignationHelperText] = useState("")

    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState("")
    const [emailHelperText, setemailHelperText] = useState("")
    const emailregex = /\S+@\S+\.\S+/;

    const [mobile, setmobile] = useState("");
    const [mobileError, setmobileError] = useState("");
    const [mobileHelperText, setmobileHelperText] = useState("");
    // const phoneregex=/^\(\d{6}\)\s\d{6}\s-\s\d{4}/g;
    const mobileregex = /^[0-9]+$/;

    const [phone, setphone] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [phoneHelperText, setphoneHelperText] = useState("");
    const phoneregex = /^\(\d{6}\)\s\d{6}\s-\s\d{4}/g;

    const [username, setusername] = useState("");
    const [usernameError, setusernameError] = useState("");
    const [usernameHelperText, setusernameHelperText] = useState("");

    const [passwd, setpasswd] = useState("");
    const [passwdError, setpasswdError] = useState("");
    const [passwdHelperText, setpasswdHelperText] = useState("");

    const [city, setcity] = useState("");
    const [cityError, setcityError] = useState("");
    const [cityHelperText, setcityHelperText] = useState("");

    const [pincode, setpincode] = useState("");
    const [pincodeError, setpincodeError] = useState("");
    const [pincodeHelperText, setpincodeHelperText] = useState("");
    let history = useHistory();

    const [state, setState] = useState([]);
    const [category, setCategory] = useState();
    // const [slabid, setSlabId] = useState('');
    const slabidref = useRef('');
    const [otpresp, setOtpres] = useState("");
    const [enterotp, setenterotp] = useState("");


    const handleChangeMobile = (e) => {
        setmobile(e)
        setmobileHelperText("");
        if (mobile == "") {
            setmobileError(true)
            setmobileHelperText("Please enter mobile number!")
        }
        //  else if (!mobileregex.test(mobile)) {

        else if (mobile.length != 9) {
            // alert(mobile+" == "+mobile.length)
            setmobileError(true)
            setmobileHelperText("Mobile number should be 10 digits!")
            // return true;
        } else if (mobile.length == 9) {
            // alert(mobile+" == "+mobile.length)
            setmobileError(false)
            setmobileHelperText("")
            return true;
        }
    }
    const handleCategory = (e) => {
        // alert(e.target.value)
        // setSlabId(2)
        setCategory(e.target.value)
        // e.target.value == 'PSU'? setSlabId(2) : setSlabId(1)

        // alert(slabid+"==slabid")

        // setSlabId('2')
        // alert(slabid)

        if (e.target.value == 'PSU') {
            slabidref.current = 2
            // setSlabId(2)
            // alert(slabid)
        }
        else if (e.target.value == 'Govt') {

            slabidref.current = 1
            // setSlabId('1')

        }
        else if (e.target.value == 'Private') {
            // setSlabId(3)
            // alert(slabid)
            slabidref.current = 3
        }
        // alert(slabidref.current + "-----  slabidref.current")
    }



    useEffect(() => {

        //----------------JWT-------------------------------
        // const token = window.sessionStorage.getItem("token");
        // if (!token) {
        //     // Redirect to login page if no token found
        //     history.push('/deptadmin/loginwithjwt');
        //     return;
        // }
        const token = sessionStorage.getItem("token");
        

        //------------------------------------------------------
        window.scrollTo(0, 0)

        // fetch(BaseLocal + "isSessNull")
        //     // fetch("http://localhost:8082/isSessNull")
        //     .then((response) => {

        //         if (response.status == 400) {
        //             console.log("bad request ")
        //         }
        //     }).then((actualData) =>
        //         console.log(actualData + "___response from JAVA ")
        //     )
        //     .catch((err) => {
        //         console.log(err.message);

        //         localStorage.clear();
        //         history.push("/LoginRequired")
        //     });





        const fetchData = () => {

            fetch(BaseurlAdmin + "statelist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setState(res)
                    // alert(deptlist.dept_name)
                    // console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])

    const [state_code, setstate_code] = useState({})

    const handleState = (e) => {
        setstate_code(e.target.value);
    }

    // const [otpvalidation, setOtpvalidation] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        var otpstatus = false

        // JSON.stringify() 
        setOpen(false);

        if (enterotp == otpresp) {
            otpstatus = true;
            // alert(enterotp + "------enter otp" + otpresp + "------respotp")
            // alert(otpstatus + "otpvalidation inside if")
        }
        else {
            otpstatus = false;
        }
        // alert(otpstatus + "otpvalidation")

        if (otpstatus) {
            setOpen(false);
            e.preventDefault();

            // fetch("http://localhost:8082/isSessNull");
            setdept_nameError(false)
            setdept_nameHelperText("");
            if (dept_name == "") {
                setdept_nameError(true);
                setdept_nameHelperText("Please Enter Department Name!");
            }

            setAddressError(false)
            setaddressHelperText("");
            if (address == "") {
                setAddressError(true)
                setaddressHelperText("Please Enter Address!")
            }

            setcontact_personError(false)
            setcontact_personHelperText("");
            if (contact_person == "") {
                setcontact_personError(true)
                setcontact_personHelperText("Please Enter Contact Person!")
            }

            setdesignationError(false)
            setdesignationHelperText("");
            if (contact_person == "") {
                setdesignationError(true)
                setdesignationHelperText("Please Enter Contact Person!")
            }

            setemailError(false)
            setemailHelperText("");
            if (email == "") {
                setemailError(true)
                setemailHelperText("Please Enter Email!")
            }

            // !new RegExp(/\S+@\S+\.\S+/).test(email)
            else if (!emailregex.test(email)) {
                setemailError(true)
                setemailHelperText("Please Enter Valid Email!")
            }

            setmobileError(false)
            setmobileHelperText("");
            if (mobile == "") {
                setmobileError(true)
                setmobileHelperText("Please enter mobile number!")
            }
            //  else if (!mobileregex.test(mobile)) {

            else if (mobile.length != 10) {
                setmobileError(true)
                setmobileHelperText("Mobile number should be 10 digits!")
            }
            //     setmobileError(true)
            //     setmobileHelperText("Please enter valid mobile number")
            // }

            // setphoneError(false);
            // setphoneHelperText("")
            // if (phone == "") {
            //     setphoneError(true)
            //     setphoneHelperText("Please Enter Phone Number! ")

            // }
            // else if (!phoneregex.test(phone)) {
            //     setphoneError(true)
            //     setphoneHelperText("Please Enter  Valid Phone Number! ")
            // }


            setusernameError(false)
            setusernameHelperText("")
            if (username == "") {
                setusernameError(true)
                setusernameHelperText("Please Enter Username!")
            }

            setpasswd(false)
            setpasswdHelperText("")
            if (passwd == "") {
                // setpasswdError(true)
                // setpasswdHelperText("Please Enter password!")
            }
            else if (passwd.length < 8) {
                setpasswdError(true)
                setpasswdHelperText("Password should be atleast 8 digit")
            }

            setcityError(false)
            setcityHelperText("")
            if (city == "") {
                setcityError(true)
                setcityHelperText("Please Enter City Name!")
            }


            setpincodeError(false)
            setpincodeHelperText("")
            if (pincode == "") {
                setpincodeError(true)
                setpincodeHelperText("Please Enter Pincode!")
            }
            else if (pincode.length < 6) {
                setpincodeError(true)
                setpincodeHelperText(" Pincode cannot be less than 6 digits!")
            }
            else if (pincode.length > 6) {
                setpincodeError(true)
                setpincodeHelperText(" Pincode cannot be more than 6 digits!")
            }



            const slab_id = slabidref.current;

            // e.preventDefault()
            // alert(state_code)
            let demo = JSON.stringify({ dept_name, address, contact_person, designation, email, mobile, phone, username, passwd, city, state_code, pincode, category, slab_id, dept_is_active })
            // console.log(demo)
            // console.log(JSON.parse(demo))
            // alert(JSON.stringify(demo))
            if (dept_name != "" && address != "" && contact_person != "" && designation != "" && email != "" && mobile != "" && username != "" && city != "" && state_code != "" && pincode != "" && category != "" && dept_is_active != "") {
                // alert("before page")

                fetch(BaseurlAdmin + `deptregistration`,

                    {
                        method: "POST",
                        body: JSON.stringify({ dept_name, address, contact_person, designation, email, mobile, phone, username, passwd, city, state_code, pincode, category, slab_id, dept_is_active }),
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",

                        },
                    }
                ).then(r => {
                    // alert(r.status)
                    if (r.status == 200) {
                        alert("Department added successfully")
                    }
                    else {
                        alert("Error in department addition")
                    }
                    setOpen(false)
                    window.location.reload(false);
                }).catch(e => {
                    console.log("error in registration", e)
                    alert(" unsuccessfull")
                })

                e.preventDefault()
            }
        }
        else {
            alert("invalid otp")
        }

    }
    return (
        <>
            {/* <Card> */}
            {/* <Card> */}
            <div style={{ marginLeft: '20%', marginRight: '20%', }}>
                {/* <Card > */}
                <Typography variant="h5" align="center" >Department Registration</Typography>

                <div style={{ width: '700px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '300px' }}>
                    {/* <Card> */}
                    <br></br>
                    <div style={{}}>
                        <form noValidate autoComplete="on" onSubmit={handleSubmit}>

                            <Grid container spacing={5} >
                                <Grid item xs={6} align="center" >
                                    <TextField
                                        id="standard-basic"
                                        label="*Department Name"
                                        variant="standard"
                                        required
                                        onChange={(e) => (setdept_name(e.target.value))}
                                        error={dept_nameError}
                                        helperText={dept_nameHelperText}
                                    />
                                </Grid>
                                <Grid item xs={6} align="center" >
                                    <TextField
                                        id="standard-basic"
                                        label="*Address"
                                        variant="standard"
                                        required
                                        onChange={(e) => (setAddress(e.target.value))}
                                        error={addressError}
                                        helperText={addressHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>

                            <Grid container spacing={5}>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Contact Person"
                                        variant="standard"
                                        required
                                        onChange={(e) => (setcontact_person(e.target.value))}
                                        error={contact_personError}
                                        helperText={contact_personHelperText}
                                    />
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Designation"
                                        variant="standard"
                                        required
                                        onChange={(e) => (setdesignation(e.target.value))}
                                        error={designationError}
                                        helperText={designationHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>

                            <Grid container spacing={5}>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Email"
                                        variant="standard"
                                        required
                                        onChange={(e) => (setemail(e.target.value))}
                                        error={emailError}
                                        helperText={emailHelperText}
                                    />
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Mobile Number"
                                        variant="standard"
                                        required
                                        onChange={
                                            (e) => (setmobile(e.target.value))
                                        }
                                        //   onChange={
                                        //     (e) => (handleChangeMobile(e.target.value))
                                        // }
                                        error={mobileError}
                                        helperText={mobileHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>


                            <Grid container spacing={5}>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="Phone Number"
                                        variant="standard"
                                        required
                                        onChange={
                                            (e) => (setphone(e.target.value))
                                        }
                                    // error={phoneError}
                                    // helperText={phoneHelperText}
                                    />
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Username"
                                        variant="standard"
                                        required
                                        onChange={
                                            (e) => (setusername(e.target.value))
                                        }
                                        error={usernameError}
                                        helperText={usernameHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>

                            <Grid container spacing={5}>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                        required
                                        onChange={
                                            (e) => (setpasswd(e.target.value))
                                        }
                                        error={passwdError}
                                        helperText={passwdHelperText}
                                    />
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*City"
                                        variant="standard"
                                        required
                                        onChange={
                                            (e) => (setcity(e.target.value))
                                        }
                                        error={cityError}
                                        helperText={cityHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>



                            <Grid container spacing={5}>

                                <Grid item xs={6} align="center">
                                    <ToggleButtonGroup
                                        value={dept_is_active}
                                        exclusive
                                        onChange={handleDeptStatusChange}
                                        // style={{ margin: '26px 18px' }}
                                        size='small'
                                    >
                                        <ToggleButton value="true" color="primary" fullWidth>
                                            Active
                                        </ToggleButton>
                                        <ToggleButton value="false" color="primary" fullWidth>
                                            Deactive
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Grid>

                                <Grid item xs={6} align="center">
                                    <TextField
                                        id="standard-basic"
                                        label="*Pincode"
                                        variant="standard"
                                        required
                                        onChange={
                                            (e) => (setpincode(e.target.value))
                                        }
                                        error={pincodeError}
                                        helperText={pincodeHelperText}
                                    />
                                </Grid>
                            </Grid><br></br>


                            <Grid container spacing={5}>

                                <Grid item xs={6} align="center">
                                    <div align="center">
                                        <Box sx={{ minWidth: 200 }}>
                                            <FormControl style={{ minWidth: 185 }} size="small">
                                                <InputLabel id="demo-simple-select-label">State</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="State"
                                                    onChange={handleState}
                                                >

                                                    {state.map((item, index) => (
                                                        <MenuItem key={index} value={item?.stateCode} >
                                                            {item?.stateName}
                                                        </MenuItem>
                                                    ))
                                                    }



                                                </Select>

                                            </FormControl>

                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6} align="center">
                                    {/* <TextField
                                        id="standard-basic"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                        required
                                        onChange={
                                            (e) => (setpasswd(e.target.value))
                                        }
                                        error={passwdError}
                                        helperText={passwdHelperText}
                                    /> */}
                                    <FormControl size="small" style={{ minWidth: 185 }}>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Category"
                                            onChange={handleCategory}
                                        >
                                            <MenuItem value="Govt">Government</MenuItem>
                                            <MenuItem value="PSU">PSU</MenuItem>
                                            <MenuItem value="Private">Private</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid><br></br>

                            <Grid container spacing={1}>
                                <Grid item xs={12} align="center">

                                    <Button variant="contained" onClick={handleClickOpen} >Submit</Button>
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                            {"Please check your mail "}
                                            <br></br>
                                            <TextField id="standard-basic" label="Enter OTP" variant="standard" onChange={(e) => (setenterotp(e.target.value))} />
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleSubmit} autoFocus>
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>




                            </Grid>

                        </form>


                    </div>
                    {/* </Card> */}
                </div>

                {/* </Card> */}
                <br></br>

            </div>

            {/* </div> */}

            {/* </Card> */}
            {/* </div> */}
            {/* </Card> */}
        </>
    );
}
export default Registration;