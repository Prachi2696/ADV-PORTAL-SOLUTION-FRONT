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


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { FcCheckmark } from 'react-icons/fc';
import { FcCancel } from "react-icons/fc";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import BaseLocal from "./BaseLocal";
import Baseurl from "./Baseurl";
import { toast, ToastContainer } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BaseurlAdmin from "./BaseurlAdmin";

export default function KeyMapping() {
    let history = useHistory();
    const [page, setPage] = useState('0');

    const [key_info_idlist, setKey_info_idlist] = useState([])
    const [alertflag, setAlertflag] = useState('1');
    const [alertflagapp, setAlertflagapp] = useState('1')
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleClose = () => {
        setOpen(false);
    };

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
            fetch(BaseurlAdmin + "keyid")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setKey_info_idlist(res)
                    // alert(deptlist.dept_name)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])


    const [keyinfoid, setKeyinfoid] = useState();

    const [open, setOpen] = React.useState(false);

    const [keyinfodetails, setKeyinfodetails] = useState({})

    const deptcode = keyinfodetails.dept_code;

    const handlekeyinfoid = (e) => {

        setAlertflagkeyid(0)
        setPage(0)
        setKeyinfoid(e.target.value);
        setOpen(true);




        // alert(e.target.value)

        fetch(BaseurlAdmin + `keyinfodetails/${e.target.value}`)
            .then((data) => {
                const res = data.json();
                console.log("resss", res)
                return res
            }).then((res) => {
                setKeyinfodetails(res)
                console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })



    }



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



    // const deptname="";

    const [deptname, setDeptname] = useState({})

    const [alertflagkeyid, setAlertflagkeyid] = useState('1')
    const handlePage = () => {
        setOpen(false);
        if (alertflagkeyid == '1') {
            toastAlertWarning('Please select Key Id first!')
        }
        else {
            setPage(1);
            console.log("dept code---->" + deptcode)

            fetch(BaseurlAdmin + `deptname/${deptcode}`)
                .then((data) => {
                    const res = data.json();
                    console.log("resss", res)
                    return res
                }).then((res) => {
                    //    deptname=res
                    setDeptname(res)
                    console.log("resss", res)
                    // console.log("deptartment name---->"+deptname.dept_name)
                }).catch(e => {
                    console.log("error", e)
                })

        }


    }

    const [applist, setapplist] = useState([])
    const [selecteddeptname, setSelecteddeptname] = useState()

    const handleDept = (e) => {

        setSelecteddeptname(e.target.value)

        fetch(BaseurlAdmin + `applist`, {
            method: "POST",
            body: deptcode,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((data) => {
                const res = data.json();
                console.log("resss", res)

                return res
            }).then((res) => {
                setapplist(res)
                console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })
    }




    // useEffect(() => {
    //     const fetchData = () => {
    //             fetch(`http://localhost:8082/dept/deptname/${deptcode}`)
    //     .then((data) => {
    //         const res = data.json();
    //         console.log("resss", res)
    //         return res
    //     }).then((res) => {
    //         setDeptname(res)
    //         console.log("resss", res)
    //     }).catch(e => {
    //         console.log("error", e)
    //     })
    // }
    //     fetchData();
    // }, [])

    // const [postdeptcode,setPostdeptcode]=useState(deptcode);
    // const [postappcode,setPostappcode]=useState(appcode);
    // const [postkeyinfoid,setPostkeyinfoid]=useState(keyinfoid);


    const [otpresp, setOtpres] = useState("");
    const [enterotp, setenterotp] = useState("");


    const [appcode, setAppcode] = useState()

    const handleSelectedAppName = (e) => {

        // if (alertflag == '1') {
        //     toastAlertWarning('Please select Department List first!')

        //     // window.location.reload(false);
        // }
        // else{
        setAlertflag(0)
        setAlertflagapp(0)
        setAppcode(e.target.value)
        // }

    }
    // const handleClick=(e)=>{
    //     alert('hi')
    // }

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
            // setOpen(false);
            // alert(appcode)
            if (alertflag == '1') {
                toastAlertWarning('Please select Department List first!')

                // window.location.reload(false);
            }
            if (alertflagapp == '1') {
                toastAlertWarning('Please select Application List first!')
            } else {


                let demo = JSON.stringify({ appcode, deptcode, keyinfoid })
                console.log(demo)
                console.log(JSON.parse(demo))

                fetch(BaseurlAdmin + `keymappinginsert`,
                    {
                        method: "POST",
                        body: JSON.stringify({ appcode, deptcode, keyinfoid }),
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",

                        },
                    }
                ).then(r => {
                    // setOpen(false);

                    if (r.status == 200) {
                        alert("Key Mapped successfully")


                    }
                    else {
                        alert("Failed")
                    }

                    setOpen(false);

                    // getappdetails()
                    // window.location.reload(false);

                })
                    .catch(r => { alert("unsuccessfull") })
            }
        }
        else {
            alert("Invalid otp")
        }
        setOpen(false);
    }


    if (page == '0') {
        return (
            <>
                <ToastContainer />
                {/* <br /> */}
                <div style={{ paddingBottom: '680px' }}>
                    {/* <Card > */}
                    {/* <CardHeader color="blue" contentPosition="left">
                        <h2 className="text-white text-2xl">Key Mapping</h2>
                    </CardHeader> */}

                    <Grid container spacing={3}>
                        <Grid item lg={6}>
                            <div align="right">

                                <Box sx={{ minWidth: 100 }}>
                                    <FormControl style={{ minWidth: 100 }} size='small'>
                                        <InputLabel id="demo-simple-select-label">Key Id</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={keyinfoid}
                                            label="Key Id"
                                            onChange={handlekeyinfoid}
                                        // style={{ height: '40px' }}

                                        >
                                            {key_info_idlist.map((item, index) => (
                                                <MenuItem key={index} value={item?.key_info_id} >
                                                    {item?.key_info_id}
                                                </MenuItem>
                                            ))
                                            }

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </Grid>

                        <Grid item lg={6}>
                            <div align="left" style={{ position: 'relative', marginTop: '5px' }}>
                                <Button variant='contained' size='small' style={{ marginBottom: '100px' }} onClick={handlePage} >Map</Button>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item lg={12}>

                        </Grid>

                    </Grid>

                </div>

            </>
        );
    }

    else if (page == '1') {
        return (
            <>
                <ToastContainer />

                <div style={{ paddingBottom: '680px' }}>
                    <Card>

                        <Grid container spacing={3}>
                            <Grid item lg={6}>
                                <div align="right">

                                    <Box sx={{ minWidth: 100 }}>
                                        <FormControl style={{ minWidth: 100 }} size='small'>
                                            <InputLabel id="demo-simple-select-label">Key Id</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={keyinfoid}
                                                label="Key Id"
                                                onChange={handlekeyinfoid}
                                            // style={{ height: '43px' }}

                                            >
                                                {key_info_idlist.map((item, index) => (
                                                    <MenuItem key={index} value={item?.key_info_id} >
                                                        {item?.key_info_id}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Grid>

                            <Grid item lg={6}>
                                <div align="left" style={{ position: 'relative', marginTop: '5px' }}>
                                    <Button variant='contained' size='small' onClick={handlePage}>Map</Button>
                                </div>
                            </Grid>

                        </Grid>

                        <Grid container spacing={1}>
                            <Grid item lg={12}>
                                <div align="center" style={{ width: '620px', height: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                                    <TableContainer component={Paper} style={{ backgroundColor: '#80aed736' }}>
                                        <Table sx={{ minWidth: 620, minHeight: 500 }} aria-label="simple table">

                                            <TableBody>
                                                <TableRow

                                                    //   key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                                >

                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }} >
                                                        <b>&nbsp; &nbsp;Key Info ID:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>{keyinfodetails.key_info_id}</TableCell>

                                                </TableRow>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Opr:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>{keyinfodetails.opr_type}</TableCell>

                                                </TableRow>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Algo:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>{keyinfodetails.algo}</TableCell>

                                                </TableRow>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Hash Key ID:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }} >{keyinfodetails.hash_key_id}</TableCell>

                                                </TableRow>


                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Slot:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }} >{keyinfodetails.slot}</TableCell>

                                                </TableRow>


                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Key Label:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>{keyinfodetails.key_label}</TableCell>

                                                </TableRow>

                                                {/* <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>
                                                <b>Key:</b>
                                                </TableCell>
                                                <TableCell >{keyinfodetails.key}</TableCell>

                                            </TableRow> */}

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Key Expiry Date:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>{keyinfodetails.key_expiry_date_display}</TableCell>

                                                </TableRow>


                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Key is Active:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}> {keyinfodetails.key_is_active == true ? " true" : " false"}</TableCell>

                                                </TableRow>



                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Is Default:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}> {keyinfodetails.is_default == true ? " true" : " false"}</TableCell>

                                                </TableRow>


                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Token Type:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}> {keyinfodetails.tkn_type}</TableCell>

                                                </TableRow>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}>
                                                        <b>&nbsp; &nbsp;Dept Code:</b>
                                                    </TableCell>
                                                    <TableCell style={{ padding: '1px 1px 1px 1px' }}> {keyinfodetails.dept_code}</TableCell>

                                                </TableRow>


                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                            <Grid item lg={12}>

                            </Grid>

                        </Grid>


                    </Card>

                    <Card>
                        <div style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Grid container spacing={1}>
                                <Grid item lg={1}></Grid>
                                <Grid item lg={4} style={{}}>
                                    {/* <h1>{deptname.dept_name}</h1> */}
                                    <div align="center">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl style={{ minWidth: 170 }} size='small' >
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    //   value={deptname.dept_name}
                                                    label="Department List"
                                                    onChange={handleDept}
                                                // style={{height:'43px'}}

                                                >
                                                    <MenuItem value={deptname.dept_code}>{deptname.dept_name}</MenuItem>

                                                </Select>

                                            </FormControl>

                                        </Box>
                                    </div>

                                </Grid>

                                <Grid item lg={4} style={{}}>
                                    <div align="center">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    label="Application List"
                                                    onChange={handleSelectedAppName}
                                                // onClick={handleClick}
                                                // style={{height:'43px'}}
                                                >

                                                    {/* {Object.values(applist).map((value, index) => {
                                                return (
                                                    <div>
                                                        <MenuItem key={index}>{value.app_name}</MenuItem>
                                                    </div>
                                                )
                                            })
                                            } */}

                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.appcode} >
                                                            {item?.appname}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>

                                            </FormControl>
                                        </Box>
                                    </div>

                                </Grid>

                                <Grid item lg={2} style={{}}>
                                    <div align="center" style={{ marginTop: "5px", }}>
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

                </div>

            </>
        );
    }
}