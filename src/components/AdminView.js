import { Button } from '@material-tailwind/react';
import Card from '@material-tailwind/react/Card';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import Baseurl from './Baseurl';
import BaseurlAdmin from './BaseurlAdmin';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function AdminView({ adminappdetails }) {


    const appcode = localStorage.getItem("appcode")
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);
    const [enterotp, setenterotp] = useState("");
    // const [appdetailvalue,setappdetailvalue]= useState({
    //     email
    // })
    // console.log("Appdetails  "+JSON.stringify(appdetails.map(e=>{e})))
    // const [email, setemail] = useState(Object.assign({},(appdetails.map((ap)=>ap.email))));
    // const [desc, setdesc] = useState(Object.assign({},(appdetails.map((ap)=>ap.desc))));
    // const [appname, setappn] = useState(Object.assign({},(appdetails.map((ap)=>ap.appname))));

    const [email, setemail] = useState(adminappdetails.email);
    const [desc, setdesc] = useState(adminappdetails.desc)
    const [appname, setappn] = useState(adminappdetails.appname);
    const [appusername, setappusername] = useState(adminappdetails.appusername);
    const [apppassword, setapppassword] = useState(adminappdetails.apppassword);
    const [admappdetails, setadmappdetails] = useState();

    const [emailError, setemailError] = useState("");
    const [emailHelperText, setemailHelperText] = useState("");
    const [descError, setdescError] = useState("");
    const [descHelperText, setdescHelperText] = useState("");
    const [appnameError, setappnameError] = useState("");
    const [appnameHelperText, setappnameHelperText] = useState("");

    const [appusernameError, setappusernameError] = useState("");
    const [appusernameHelperText, setappusernameHelperText] = useState("");

    const [apppasswordError, setapppasswordError] = useState("");
    const [apppasswordHelperText, setapppasswordHelperText] = useState("");
    const emailregex = /\S+@\S+\.\S+/;

    // const handleEmail=(e)=>{

    //     email=Object.assign({},appdetails.map((app)=>app.email))
    //     setemail(e.target.value)
    //     console.log(email);

    // }

    const [flag, setFlag] = useState('0');
    const [otpresp, setOtpres] = useState("");

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

    function getappdetails() {
        fetch(BaseurlAdmin + `appdetail/${appcode}`)
            // fetch(`http://localhost:8082/dept/appdetail/${appcode}`)
            .then((data) => {
                const res = data.json();
                console.log("resss", res)
                return res
            }).then((res) => {
                // setappdetail(res)
                // setadmappdetails(res)
                adminappdetails.email = res.email
                adminappdetails.desc = res.desc
                adminappdetails.appname = res.appname
                admappdetails.appusername = res.appusername
                admappdetails.apppassword = res.apppassword

                // adminappdetails = res
                console.log("resss==========>", JSON.stringify(res))
                console.log("admin", JSON.stringify(adminappdetails.appname))
            }).catch(e => {
                console.log("error", e)
            })

        setFlag(1)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        // event.preventdefault();
        //     const Name = event.target.name;
        //     const value = event.target.value;
        //     setappdetailvalue(values => ({ ...values, [Name]: value }))
        //    // console.log(appdetailvalue)

        alert("handlechange")

    }


    // const handleUpdate = (e) => {
    //     // e.preventdefault();
    //     console.log(appdetailvalue)

    //     let demo = JSON.stringify(appdetailvalue);
    //     console.log(JSON.parse(demo));
    //     fetch("http://localhost:8082/appupdate/6" , {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: demo
    //     }).then(r => { console.log(r.json()) })

    //      alert("Added Successfully");

    // }

    const handleUpdate = (e) => {
        setFlag(0)

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








        console.log(JSON.stringify({ adminappdetails }) + "---------------->adminappdetails")

        e.preventDefault()

        let demo = JSON.stringify({ email, desc, appname })
        console.log(demo)
        console.log(JSON.parse(demo))

        if (email != "" && desc != "" && appname != "") {
            fetch(BaseurlAdmin + `appupdate/${appcode}`,
                // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

                {
                    method: "POST",
                    body: JSON.stringify({ email, desc, appname, appusername, apppassword }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },

                }
            ).then(r => {
                // alert(r.status)
                if (r.status == 200) {
                    alert("Application detail updated successfully")
                }
                else {
                    alert("Error")
                }
                getappdetails()
                // window.location.reload(false);

            })

                .catch(r => { alert("Updation unsuccessfull") })


        }

    }


    // const appdetail1= JSON.parse(localStorage.getItem('appdetail'));
    //console.log(appdetail)

    // const [appdetail, setappdetail] = useState([]);
    // const [appname, setappname] = React.useState();

    // const handleChange = e => {
    //     // alert(e.target.value)
    //     //alert(e.target.value)
    //     // setappname(e.target.value)

    //     //  history.push('/view')

    //     fetch(`http://localhost:8082/appdetail/${e.target.value}`)
    //         .then((data) => {
    //             const res = data.json();
    //             console.log("resss", res)
    //             return res
    //         }).then((res) => {
    //             setappdetail(res)
    //             console.log("resss", res)
    //         }).catch(e => {
    //             console.log("error", e)
    //         })
    //     };

    if (flag == '0') {
        return (
            <>
                {/* <h1> abc {admappdetails.appname}</h1> */}

                <div align="center" style={{ width: 'auto', backgroundColor: 'aliceblue' }}>
                    {/* <Card> */}
                    <Grid style={{ backgroundColor: 'aliceblue' }}>

                        <br></br>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>

                                <Typography variant='h5' style={{ color: 'black', backgroundColor: '#80aed736' }}>Application Details</Typography><br></br>
                                {/* <h2 style={{ color: 'blue', backgroundColor: '#80aed736' }}>Application Details</h2> */}

                                <Grid item lg={3}>
                                    {/* <br></br> */}
                                    <TextField
                                        id="standard-helperText"
                                        label="Email"
                                        //    style={{color:'red'}}
                                        // defaultValue={appd.email}
                                        // defaultValue={adminappdetails.email}
                                        defaultValue={email}
                                        // value={appd.email}
                                        placeholder="Enter email"

                                        onChange={(e) => setemail(e.target.value)}
                                        // onClick={(e) => setemail(e.target.value)}
                                        //   onClick={handleEmail}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={emailError}
                                        helperText={emailHelperText}
                                    />

                                </Grid>



                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Description"
                                        // defaultValue={adminappdetails.desc}
                                        defaultValue={desc}
                                        // value={appd.desc}
                                        placeholder="Enter Description"
                                        onChange={(e) => setdesc(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={descError}
                                        helperText={descHelperText}
                                    />


                                </Grid>


                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Appname"
                                        placeholder='Enter Appname'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={appname}
                                        // value={appd.appname}
                                        onChange={(e) => setappn(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={appnameError}
                                        helperText={appnameHelperText}
                                    />


                                </Grid>

                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Application Username"
                                        placeholder='Enter Application Username'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={appusername}
                                        // value={appd.appname}
                                        onChange={(e) => setappusername(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={appusernameError}
                                        helperText={appusernameHelperText}
                                    />


                                </Grid>


                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Application Password"
                                        placeholder='Enter Application Password'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={apppassword}
                                        // value={appd.appname}
                                        onChange={(e) => setapppassword(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={apppasswordError}
                                        helperText={apppasswordHelperText}
                                        type="password"
                                    />


                                </Grid>







                                <br></br>


                                <Grid item xs={3}>
                                    {/* handleClickOpen */}
                                    <Button variant='contained' size='small' width='10px' onClick={handleUpdate}>Update</Button>
                                    {/* <Dialog
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
                                            <Button onClick={handleUpdate} autoFocus>
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog> */}





                                </Grid>
                                <br></br>
                            </div>
                        </Box>
                    </Grid>

                    {/* </Card> */}
                </div>

            </>
        );
    }
    else if (flag == '1') {
        return (
            <>
                {/* <h1> abc {admappdetails.appname}</h1> */}

                <div align="center" style={{ width: 'auto', backgroundColor: 'aliceblue' }}>
                    {/* <Card> */}
                    <Grid style={{ backgroundColor: 'aliceblue' }}>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>



                                <h2 style={{ color: 'blue', backgroundColor: '#80aed736' }}>Application Details</h2>

                                <Grid item xs={3}>
                                    {/* <br></br> */}
                                    <TextField
                                        id="standard-helperText"
                                        label="Email"
                                        //    style={{color:'red'}}
                                        // defaultValue={appd.email}
                                        // defaultValue={adminappdetails.email}
                                        defaultValue={email}
                                        // value={appd.email}
                                        placeholder="Enter email"

                                        onChange={(e) => setemail(e.target.value)}
                                        // onClick={(e) => setemail(e.target.value)}
                                        //   onClick={handleEmail}
                                        // helperText="Some important text"
                                        variant="standard"
                                    />

                                </Grid>



                                <Grid item xs={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Description"
                                        // defaultValue={adminappdetails.desc}
                                        defaultValue={desc}
                                        // value={appd.desc}
                                        placeholder="Enter Description"
                                        onChange={(e) => setdesc(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                    />


                                </Grid>



                                <Grid item xs={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Appname"
                                        placeholder='Enter Appname'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={appname}
                                        // value={appd.appname}
                                        onChange={(e) => setappn(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                    />


                                </Grid>


                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Application Username"
                                        placeholder='Enter Application Username'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={appusername}
                                        // value={appd.appname}
                                        onChange={(e) => setappusername(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={appusernameError}
                                        helperText={appusernameHelperText}
                                    />


                                </Grid>


                                <Grid item lg={3}>


                                    <TextField
                                        id="standard-helperText"
                                        label="Application Password"
                                        placeholder='Enter Application Password'
                                        // defaultValue={adminappdetails.appname}
                                        defaultValue={apppassword}
                                        // value={appd.appname}
                                        onChange={(e) => setapppassword(e.target.value)}
                                        // onChange={handleChange}
                                        // helperText="Some important text"
                                        variant="standard"
                                        error={apppasswordError}
                                        helperText={apppasswordHelperText}
                                        type="password"
                                    />


                                </Grid>


                                <br></br>


                                <Grid item xs={3}>

                                    <Button variant='contained' size='small' width='10px' onClick={handleUpdate}>Update</Button>
                                    {/* <Dialog
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
                                            <Button onClick={handleUpdate} autoFocus>
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog> */}
                                </Grid>
                                <br></br>
                            </div>
                        </Box>





                    </Grid>

                    {/* </Card> */}
                </div>

            </>
        );
    }
}