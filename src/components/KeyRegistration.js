import React from "react";
import { Card } from '@material-tailwind/react'
import CardHeader from '@material-tailwind/react/CardHeader';
import { Box, Select, InputLabel, FormControl, MenuItem, Grid, Button, TextField } from '@mui/material';

import { useState, useEffect } from "react";
import { Label } from "reactstrap";
import Switch from '@mui/material/Switch';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import BaseLocal from "./BaseLocal";
import Baseurl from "./Baseurl";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { toast, ToastContainer } from 'react-toastify';
import BaseurlAdmin from "./BaseurlAdmin";



export default function KeyRegistration() {

    const [alertflag, setAlertflag] = useState('1');

    const toastAlertWarning = (message) => {

        toast.warn(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    // -----------------------------------------------

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

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    let history = useHistory();
    const [page, setPage] = useState('0');
    const [dept_code, setdept_code] = useState("");
    const [dept_codelist, setdept_codeList] = useState([]);


    const [oprlist, setOprlist] = useState([]);

    let dateFormateFortMui = formatDate();
    function formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    useEffect(() => {


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

        const token = sessionStorage.getItem("token");
        // if (token) {
        //     const payload = JSON.parse(atob(token.split('.')[1]));
        //     const exp = payload.exp;
        //     if (Date.now() >= exp * 1000) {
        //         sessionStorage.removeItem("token");
        //         history.push('/deptadmin/loginwithjwt');
        //     }
        // }


        const fetchData = () => {
            fetch(BaseurlAdmin + "oprlist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setOprlist(res)
                    // alert(dept_codelist.dept_code_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])

    const [opr, setOpr] = useState("")

    const handleOpr = (e) => {

        // var d = new Date();
        // alert(d)
        setOpr(e.target.value);

    }

    const [algo_idlist, setalgo_idList] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(BaseurlAdmin + "algoid")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setalgo_idList(res)
                    // alert(dept_codelist.dept_code_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])

    const [algo_id, setalgo_id] = useState("")
    const handleAlgo = (e) => {

        setalgo_id(e.target.value);
    }

    useEffect(() => {
        const fetchData = () => {
            fetch(Baseurl + "deptlist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setdept_codeList(res)
                    // alert(dept_codelist.dept_code_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])


    const [sslot, setsslot] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = () => {
            fetch(BaseurlAdmin + "slot")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setsslot(res)
                    // alert(dept_codelist.dept_code_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])

    const [slot, setslot] = useState("")
    const handlesslot = (e) => {

        setslot(e.target.value)
    }

    const [tkn_type, settkn_type] = useState("")
    const handleTokenType = (e) => {

        settkn_type(e.target.value);
    }

    const [key_label, setkey_label] = useState();




    const [key_is_active, setkey_is_active] = useState(false);

    const handlekey_is_active = (e) => {

        setkey_is_active(e.target.checked);

        // alert(e.target.checked)
    }

    const [is_default, setis_default] = useState(false);

    const handleis_default = (e) => {
        setis_default(e.target.checked)
    }

    const [key_expiry_date, setkey_expiry_date] = useState();

    const [changeexpirydate, setchangeexpirydate] = useState();

    const handlekey_expiry_date = (e) => {

        // alert(e.target.value)
        setchangeexpirydate(e.target.value)
        setkey_expiry_date(e.target.value + " 00:00:00")

        // const xyz= Math.floor(new Date('2012.08.10').getTime() / 1000)
        // setchangeexpirydate( Math.floor(new Date('2012.08.10').getTime() / 1000))

        // let currentTimestamp = Date.now()

        // console.log(currentTimestamp); // get current timestamp
        // let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)

        // let date      = new Date();
        // var timestamp = date.getTime();
        //         console.log("change dtae --->" +key_expiry_date+" 00:00:00" );
    }
    const handledept_code = (e) => {

        setAlertflag(0)
        setdept_code(e.target.value)
    }

    const handleCreate = (e) => {

        if (alertflag == '1') {
            toastAlertWarning('Please select Department first!')
        }
        else {
            setPage(1)
        }
    }

    const [key, setkey] = useState();
    // const [otpvalidation, setOtpvalidation] = useState('0');

    const [otpresp, setOtpres] = useState("");
    const [enterotp, setenterotp] = useState("");
    // const [otpstatus,setOtpstatus]=useState(false);

    const handleSubmit = (e) => {
        var otpstatus = false

        setOpen(false);

        if (enterotp == otpresp) {
            otpstatus = true;
        }
        else {
            otpstatus = false;
        }


        if (otpstatus) {





            // alert(opr)
            // alert(slot)
            // alert(algo_id)
            // alert(key_is_active)
            // alert(is_default)
            // alert(key_label)
            // alert(tkn_type)
            // alert(key_expiry_date)

            // if (opr != "" && slot != "" && algo_id != "" && key_label != "" && key_expiry_date != "" && key_is_active != "" && is_default != "" && tkn_type != "" && dept_code != "") {

            let demo = JSON.stringify({ opr, slot, algo_id, key_label, key_expiry_date, key_is_active, is_default, tkn_type, dept_code })

            fetch(BaseurlAdmin + `keyinfoinsert/${dept_code}`,
                {
                    method: "POST",
                    body: JSON.stringify({ opr, slot, algo_id, key_label, key_expiry_date, key_is_active, is_default, tkn_type, dept_code }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },
                }
            ).then(r => {
                // setOpen('false')


                if (r.status == 200) {
                    alert("Key Mapped successfully")

                }
                else {
                    alert("Failed")
                }


                setOpen(false)
                // getappdetails()
                // window.location.reload(false);

            })
                .catch(r => { alert("unsuccessfull") })
            // }
        }
        else {
            alert("Invalid otp")
        }
        setOpen(false);
    }


    const handleSoftSubmit = (e) => {

        setOpen('false')
        let demo = JSON.stringify({ opr, slot, algo_id, key_label, key_expiry_date, key_is_active, is_default, tkn_type, key, dept_code })
        // console.log(demo)
        // console.log(JSON.parse(demo))

        if (opr != "" && slot != "" && algo_id != "" && key_label != "" && key_expiry_date != "" && key_is_active != "" && is_default != "" && tkn_type != "" && dept_code != "" && key != "") {

            fetch(BaseurlAdmin + `keyinfoinsertforsoft/${dept_code}`,
                {
                    method: "POST",
                    body: JSON.stringify({ opr, slot, algo_id, key_label, key_expiry_date, key_is_active, is_default, tkn_type, key, dept_code }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },
                }
            ).then(r => {
                alert("Key Mapped successfully")
                // getappdetails()
                // window.location.reload(false);

            })
                .catch(r => { alert("unsuccessfull") })
        }
    }




    if (page == '0') {
        return (
            <>
                <ToastContainer />

                <div style={{ paddingBottom: '680px' }}>

                    {/* <Card> */}
                    {/* <CardHeader color="blue" contentPosition="left">
                            <h2 className="text-white text-2xl">Key Registration</h2>
                        </CardHeader><br></br> */}
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <div align="right">

                                <Box sx={{ minWidth: 110 }}>
                                    <FormControl style={{ minWidth: 170 }} size='small'>
                                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            value={dept_code}
                                            label="Department List"
                                            onChange={handledept_code}
                                        // style={{ height: '45px' }}
                                        >

                                            {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                            {dept_codelist.map((item, index) => (
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
                                <Button variant="contained" size='small' style={{ position: 'relative', marginTop: '5px', size: '20px' }} onClick={handleCreate}>Create</Button>
                            </div>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <div align="left">
                                <Button variant="contained" style={{ position: 'relative', marginTop: '10px' }} onClick={handleCreate}>Create</Button>
                            </div>
                        </Grid> */}


                    </Grid>
                    {/* <h1>Key Registration</h1> */}
                    {/* </Card> */}
                </div>
            </>
        );
    }
    else if (page == '1') {

        // <ToastContainer/>
        if (tkn_type == 'hard') {

            return (
                <>

                    <div style={{ paddingBottom: '680px' }}>

                        {/* <Card > */}
                        {/* <CardHeader color="blue" contentPosition="left">
                                <h2 className="text-white text-2xl">Key Registration</h2>
                            </CardHeader><br></br> */}
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <div align="right">

                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl style={{ minWidth: 170 }} size='small'>
                                            <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={dept_code}
                                                label="Department List"
                                                onChange={handledept_code}
                                            // style={{ height: '45px' }}
                                            >

                                                {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                {dept_codelist.map((item, index) => (
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
                                    <Button variant="contained" size='small' style={{ position: 'relative', marginTop: '7px' }} onClick={handleCreate}>Create</Button>
                                </div>
                            </Grid>
                            {/* <Grid item xs={6}>
                            <div align="left">
                                <Button variant="contained" style={{ position: 'relative', marginTop: '10px' }} onClick={handleCreate}>Create</Button>
                            </div>
                        </Grid> */}


                        </Grid><br></br>

                        {/* <div style={{backgroundColor:'steelblue'}}> */}
                        <Card>

                            <div style={{ width: '600px', marginLeft: "auto", marginRight: "auto" }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3} >
                                        {/* <div > */}

                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} >
                                                {/* <div> */}
                                                {/* <Label>Opr</Label> */}
                                                <InputLabel id="demo-simple-select-label">Opr</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={opr}
                                                    label="Opr "
                                                    onChange={handleOpr}
                                                    style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {oprlist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.opr_code} >


                                                            {item.opr_type}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} >
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Algo</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={algo_id}
                                                    label="Algo"
                                                    onChange={handleAlgo}
                                                    style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {algo_idlist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.algo_id} >
                                                            {item?.algo}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} >
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={slot}
                                                    label="Slot"
                                                    onChange={handlesslot}
                                                    style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {sslot.map((item, index) => (
                                                        <MenuItem key={index} value={item?.slot} >
                                                            {item?.slot}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 140 }}>
                                            <FormControl style={{ minWidth: 140 }} >
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Token Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={tkn_type}
                                                    label="Token Type"
                                                    onChange={handleTokenType}
                                                    style={{ height: '40px' }}
                                                >
                                                    <MenuItem value="hard" >Hard</MenuItem>
                                                    <MenuItem value="soft" >Soft</MenuItem>


                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>



                                </Grid><br></br><br></br>


                                <Grid container spacing={3}>
                                    <Grid item xs={3} >
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '15ch', height: '7ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            align="center"

                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="Key Label"
                                                variant="standard"
                                                required
                                                onChange={(e) => { setkey_label(e.target.value) }}

                                            />

                                        </Box>
                                    </Grid>

                                    <Grid item xs={3} >

                                        <div>
                                            <label>Key is Active</label>
                                            <Switch {...label} checked={key_is_active} onChange={handlekey_is_active} defaultChecked />
                                        </div>

                                    </Grid>

                                    <Grid item xs={3} >

                                        <div>
                                            <label>is Default</label><br></br>
                                            <Switch {...label} checked={is_default} onChange={handleis_default} defaultChecked />
                                        </div>

                                    </Grid>

                                    <Grid item xs={3} >



                                        <Stack component="form" noValidate spacing={3} style={{ height: '43px' }}>
                                            {/* <TextField
                                                id="date"
                                                label="Key Expiry Date"
                                                type="date"
                                                inputFormat="yyyy-MM-dd"
                                                onChange={handlekey_expiry_date}
                                                sx={{ width: 140 }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            /> */}

                                            <TextField
                                                id="date"
                                                label="Key Expiry Date"
                                                type="date"
                                                inputFormat="dd-MM-yyyy"
                                                defaultValue={dateFormateFortMui}
                                                onChange={handlekey_expiry_date}
                                                size="small"
                                                sx={{
                                                    width: 190,
                                                    "& .MuiInputBase-root": {
                                                        // color: theme.typography.primary.paragraphbody,
                                                        // backgroundColor: theme.dropdownbg.backgroundColor

                                                    },
                                                }}
                                                style={{ height: '33px', }}
                                                inputProps={{
                                                    // max: dateFormateFortMui,
                                                    min: dateFormateFortMui,

                                                    // color:'red'
                                                    // min: "1993-01-01"
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,

                                                }}

                                            />

                                        </Stack>
                                    </Grid>

                                </Grid><br></br>

                                <Grid container spacing={1}>
                                    <Grid item xs={12} >
                                        <div align="center">
                                            <Button variant='contained' size='small' width='10px' onClick={handleClickOpen} >Submit</Button>
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
                        {/* </div> */}


                        {/* </Card> */}
                    </div>
                </>
            );
        }
        else {
            return (
                <>

                    <div style={{ paddingBottom: '480px' }}>

                        {/* <Card > */}
                        {/* <CardHeader color="blue" contentPosition="left">
                                <h2 className="text-white text-2xl">Key Registration</h2>
                            </CardHeader><br></br> */}
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <div align="right">

                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl style={{ minWidth: 170 }} >
                                            <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={dept_code}
                                                label="Department List"
                                                onChange={handledept_code}
                                                style={{ height: '45px' }}
                                            >

                                                {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                {dept_codelist.map((item, index) => (
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
                                    <Button variant="contained" size='small' style={{ position: 'relative', marginTop: '7px' }} onClick={handleCreate}>Create</Button>
                                </div>
                            </Grid>
                            {/* <Grid item xs={6}>
                            <div align="left">
                                <Button variant="contained" style={{ position: 'relative', marginTop: '10px' }} onClick={handleCreate}>Create</Button>
                            </div>
                        </Grid> */}


                        </Grid><br></br>

                        {/* <div style={{backgroundColor:'steelblue'}}> */}
                        <Card>

                            <div style={{ width: '600px', marginLeft: "auto", marginRight: "auto" }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3} >
                                        {/* <div > */}

                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} size='small' >
                                                {/* <div> */}
                                                {/* <Label>Opr</Label> */}
                                                <InputLabel id="demo-simple-select-label">Opr</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={opr}
                                                    label="Opr "
                                                    onChange={handleOpr}
                                                // style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {oprlist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.opr_code} >


                                                            {item.opr_type}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} size='small'>
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Algo</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={algo_id}
                                                    label="Algo"
                                                    onChange={handleAlgo}
                                                // style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {algo_idlist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.algo_id} >
                                                            {item?.algo}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 100 }}>
                                            <FormControl style={{ minWidth: 100 }} size='small' >
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={slot}
                                                    label="Slot"
                                                    onChange={handlesslot}
                                                // style={{ height: '40px' }}
                                                >

                                                    {/* <MenuItem value={department.dept_code_code}  > {department.dept_code_name} </MenuItem> */}
                                                    {sslot.map((item, index) => (
                                                        <MenuItem key={index} value={item?.slot} >
                                                            {item?.slot}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    <Grid item xs={3} >
                                        {/* <div> */}
                                        <Box sx={{ minWidth: 140 }}>
                                            <FormControl style={{ minWidth: 140 }} size='small'>
                                                {/* <div> */}
                                                {/* <Label>Algo Id</Label> */}
                                                <InputLabel id="demo-simple-select-label">Token Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={tkn_type}
                                                    label="Token Type"
                                                    onChange={handleTokenType}
                                                // style={{ height: '40px' }}
                                                >
                                                    <MenuItem value="hard" >Hard</MenuItem>
                                                    <MenuItem value="soft" >Soft</MenuItem>
                                                    {/* {sslot.map((item, index) => (
                                                <MenuItem key={index} value={item?.sslot} >
                                                    {item?.sslot}
                                                </MenuItem>
                                            ))
                                            } */}

                                                </Select>
                                                {/* </div> */}
                                            </FormControl>
                                        </Box>
                                        {/* </div> */}
                                    </Grid>

                                    {/* <Grid item xs={2}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '15ch', height: '7ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    align="center"

                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Key Label"
                                        variant="standard"
                                        required
                                        onChange={(e) => { setkey_label(e.target.value) }}
                                    // error={emailError}
                                    // helperText={emailHelperText}

                                    />

                                </Box>
                            </Grid> */}



                                    {/* <Grid item xs={2}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '20', height: '7ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    align="center"

                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Key "
                                        variant="standard"
                                        required
                                    // onChange={(e) => { setEmail(e.target.value) }}
                                    // error={emailError}
                                    // helperText={emailHelperText}

                                    />

                                </Box>
                            </Grid> */}



                                </Grid><br></br><br></br>
                            </div>
                            <div style={{ width: '900px', marginLeft: "auto", marginRight: "auto" }}>

                                <Grid container spacing={3}>
                                    <Grid item xs={2} >
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '15ch', height: '7ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            align="center"

                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="Key"
                                                variant="standard"
                                                required
                                                onChange={(e) => { setkey(e.target.value) }}
                                            // error={emailError}
                                            // helperText={emailHelperText}

                                            />

                                        </Box>
                                    </Grid>

                                    <Grid item xs={2} >
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '15ch', height: '7ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            align="center"

                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="Key Label"
                                                variant="standard"
                                                required
                                                onChange={(e) => { setkey_label(e.target.value) }}
                                            // error={emailError}
                                            // helperText={emailHelperText}

                                            />

                                        </Box>
                                    </Grid>

                                    <Grid item xs={2} >

                                        <div>
                                            <label>Key is Active</label>
                                            <Switch {...label} checked={key_is_active} onChange={handlekey_is_active} defaultChecked />
                                        </div>

                                    </Grid>

                                    <Grid item xs={2} >

                                        <div>
                                            <label>is Default</label><br></br>
                                            <Switch {...label} checked={is_default} onChange={handleis_default} defaultChecked />
                                        </div>

                                    </Grid>

                                    <Grid item xs={2} >


                                        <Stack component="form" noValidate spacing={3} style={{ height: '43px' }}>
                                            <TextField
                                                id="date"
                                                label="Key Expiry Date"
                                                type="date"
                                                inputFormat="dd-MM-yyyy"
                                                defaultValue={dateFormateFortMui}
                                                onChange={handlekey_expiry_date}
                                                size="small"
                                                sx={{
                                                    width: 190,
                                                    "& .MuiInputBase-root": {
                                                    },
                                                }}
                                                style={{ height: '33px', }}
                                                inputProps={{
                                                    // max: dateFormateFortMui,
                                                    min: dateFormateFortMui,

                                                }}
                                                InputLabelProps={{
                                                    shrink: true,

                                                }}

                                            />

                                        </Stack>
                                    </Grid>


                                </Grid><br></br>
                            </div>

                            <Grid container spacing={1}>
                                <Grid item xs={12} >
                                    <div align="center">
                                        <Button variant='contained' size='small' width='10px' onClick={handleClickOpen} >Submit</Button>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <DialogTitle id="responsive-dialog-title">
                                                {"Do you really want to submit the form?"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button autoFocus onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleSoftSubmit} autoFocus>
                                                    Confirm
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </Grid>
                            </Grid>





                        </Card>
                        {/* </div> */}


                        {/* </Card> */}
                    </div>
                </>
            );

        }
    }
}