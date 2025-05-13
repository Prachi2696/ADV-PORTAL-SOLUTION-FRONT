import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import { Typography } from '@material-ui/core';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import BaseLocal from "./BaseLocal";
import Baseurl from "./Baseurl";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BaseurlAdmin from './BaseurlAdmin';


export default function AppRegistration() {

    // -----------------------------------------------
    const [otpresp, setOtpres] = useState("");
    const [enterotp, setenterotp] = useState("");
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
                console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })
    };

    const handleClose = () => {
        setOpen(false);
    };



    //----------------------------------------------------

    let history = useHistory();
    const [page, setPage] = useState('0');

    const [deptlist, setDeptList] = useState([]);

    const [dept, setDept] = useState("");

    const handleDept = (e) => {

        setDept(e.target.value)
        setPage(0)
    }

    function ErrorHandler({ error }) {

        function refreshPage() {
            window.location.reload(false);
        }

        return (
            <div role="alert" style={{ minHeight: '500px', textAlign: 'center' }}>

                <center>
                    {/* <p>An error occurred:</p> */}
                    <pre>Something went wrong  . . . </pre>
                    <Button variant="contained" style={{ position: 'relative', marginTop: '10px' }} onClick={refreshPage}>Refresh</Button>


                </center>

            </div>
        )
    }




    useEffect(() => {
        window.scrollTo(0, 0)

        fetch(BaseLocal + "isSessNull")
            // fetch("http://localhost:8082/isSessNull")
            .then((response) => {

                if (response.status == 400) {
                    console.log("bad request ")
                }
            }).then((actualData) =>
                console.log(actualData + "___response from JAVA ")
            )
            .catch((err) => {
                console.log(err.message);

                localStorage.clear();
                history.push("/LoginRequired")
            });




        const fetchData = () => {
            fetch(Baseurl + "deptlist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setDeptList(res)
                    // alert(deptlist.dept_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])


    const handleCreate = (e) => {

        setPage(1);
        // alert(dept);


    }
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");
    const [appname, setAppname] = useState("");
    const [emailError, setemailError] = useState("");
    const [emailHelperText, setemailHelperText] = useState("");
    const [descError, setdescError] = useState("");
    const [descHelperText, setdescHelperText] = useState("");
    const [appnameError, setappnameError] = useState("");
    const [appnameHelperText, setappnameHelperText] = useState("");
    const [appusername, setAppusername] = useState("");
    const [apppassword, setApppassword] = useState("");
    const emailregex = /\S+@\S+\.\S+/;

    const handleSubmit = (e) => {
        var otpstatus = false

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

            // setOpen(false);

            setemailError(false)
            setemailHelperText("");
            if (email == "") {
                setemailError(true)
                setemailHelperText("Please Enter Email!");
            }
            else if (!emailregex.test(email)) {
                setemailError(true)
                setemailHelperText("Please Enter Valid Email!")
            }

            setdescError(false)
            setdescHelperText("")
            if (desc == "") {
                setdescError(true)
                setdescHelperText("Please Enter Description!")
            }

            setappnameError(false)
            setappnameHelperText("")
            if (appname == "") {
                setappnameError(true)
                setappnameHelperText("Please Enter Application Name!")
            }




            // console.log(email);
            // console.log(desc);
            // console.log(appname);

            e.preventDefault()

            let demo = JSON.stringify({ email, desc, appname })
            // console.log(demo)
            // console.log(JSON.parse(demo))

            if (email != "" && desc != "" && appname != "") {

                fetch(BaseurlAdmin + `appcreate/${dept}`,

                    {
                        method: "POST",
                        body: JSON.stringify({ email, desc, appname, appusername, apppassword }),
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",

                        },

                    }
                ).then(r => {
                    if (r.status == 200) {
                        alert("Application detail added successfully")
                    }
                    else {
                        alert("Failed")
                    }
                    setOpen(false);
                    // window.location.reload(false);

                })

                    .catch(r => { alert(" unsuccessfull") })

            }
        }
        else {
            alert("Invalid otp")
        }
        setOpen(false);

    }



    if (page == '0') {
        try {
            return (
                <>

                    <div style={{ paddingBottom: '980px' }}>

                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <div align="right">

                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl style={{ minWidth: 170 }} size='small'>
                                            <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={dept}
                                                label="Department List"
                                                onChange={handleDept}
                                            >

                                                {deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item?.dept_code} >
                                                        {item?.dept_name}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div align="left">
                                    <Button variant="contained" size='small'
                                        style={{ marginTop: '5px' }}
                                        onClick={handleCreate}>Create</Button>
                                </div>
                            </Grid>



                        </Grid>

                    </div>
                </>
            );
        } catch (error) {
            return <ErrorHandler error={error} />
        }

    }

    if (page == '1') {
        try {
            return (
                <>
                    <div style={{ paddingBottom: '680px' }}>


                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <div align="right">

                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl style={{ minWidth: 170 }} size="small">
                                            <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={dept}
                                                label="Department List"
                                                onChange={handleDept}

                                            >

                                                {/* <MenuItem value={department.dept_code}  > {department.dept_name} </MenuItem> */}
                                                {deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item?.dept_code} >
                                                        {item?.dept_name}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div align="left">
                                    <Button variant="contained" size='small' style={{ position: 'relative', marginTop: '5px' }} onClick={handleCreate}>Create</Button>
                                </div>
                            </Grid>



                        </Grid>



                        <br></br>
                        <br></br>

                        {/* style={{ position: 'relative', paddingRight: '90px' }} */}
                        <div style={{ width: '400px', backgroundColor: 'aliceblue', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Card>
                                <div style={{}}>
                                    <Grid container spacing={1} >
                                        <Grid item xs={12}>
                                            {/* <h4 align="center" style={{ backgroundColor: '#80aed736' }}>Application Creation</h4><br></br> */}
                                            <Typography variant='h6' align='center'>Application Creation</Typography>

                                            <Box
                                                component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '30ch', height: '7ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                                align="center"

                                            >

                                                <TextField
                                                    id="filled-basic"
                                                    label="E-Mail Id*"
                                                    variant="standard"
                                                    required
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    error={emailError}
                                                    helperText={emailHelperText}

                                                /><br></br>

                                                <TextField id="filled-basic"
                                                    label="Description*"
                                                    variant="standard"
                                                    required
                                                    onChange={(e) => { setDesc(e.target.value) }}
                                                    error={descError}
                                                    helperText={descHelperText}
                                                /><br></br>

                                                <TextField id="filled-basic"
                                                    label="Application Name*"
                                                    variant="standard"
                                                    required
                                                    onChange={(e) => { setAppname(e.target.value) }}
                                                    error={appnameError}
                                                    helperText={appnameHelperText}
                                                /><br></br>

                                                <TextField id="filled-basic"
                                                    label="Application Username"
                                                    variant="standard"
                                                    // required
                                                    onChange={(e) => { setAppusername(e.target.value) }}
                                                // error={appnameError}
                                                // helperText={appnameHelperText}
                                                /><br></br>

                                                <TextField id="filled-basic"
                                                    label="Application Password"
                                                    variant="standard"
                                                    type="password"
                                                    // required
                                                    onChange={(e) => { setApppassword(e.target.value) }}
                                                // error={appnameError}
                                                // helperText={appnameHelperText}
                                                /><br></br>
                                            </Box>

                                        </Grid>

                                        <Grid item xs={12}>
                                            <div align="center">
                                                <Button variant="contained" onClick={handleClickOpen}>Submit</Button><br></br>
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
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Card>
                        </div>



                        {/* </Card> */}
                    </div>
                </>
            );
        } catch (error) {
            return <ErrorHandler error={error} />
        }
    }
}