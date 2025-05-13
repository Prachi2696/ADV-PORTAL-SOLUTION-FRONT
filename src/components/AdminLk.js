import React from "react";
// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
// import { Form } from 'react-bootstrap';
import { useState } from 'react';
// import DatePicker from 'react-datepicker'
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";
// import { DatePicker } from "@mui/x-date-pickers";
import BaseurlAdmin from "./BaseurlAdmin";
import DatePicker from "react-datepicker";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function AdminLk({ applklist }) {
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

    const [selectLK, setSelectLK] = useState("")
    const [flag, setFlag] = useState('0')

    const [startDate, setStartDate] = useState(new Date());
    const [lkdate, setlkdate] = useState(applklist.map((item) => item.lkexpiry));

    // const [lk, setlk] = useState(applklist.map((item) => item.lk));
    // numbers.map((num) => num * num)

    // localStorage.setItem("LK", lk)



    let gendate = new Date();
    let todaydate = gendate.toISOString().split('T')[0]
    const [lkexpirygen, setLkexpirygen] = useState(todaydate);

    const [lkvalue, setlkvalue] = useState("No Licence Key");

    const appcode = localStorage.getItem("appcode");
   
    const [applkexpiry, setlkexpiry] = useState({ "lkexpiry": applklist.lkexpiry });




    let dateFormateFortMui = formatDate();
    function formatDate() {


        var d = new Date(lkdate),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()),
            year = d.getFullYear();


        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    let dateFormateFortMuigen = formatDategen();
    function formatDategen() {

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

 

    const [applkmulti, setApplkmulti] = useState([])
    function getlkdetails() {
        fetch(BaseurlAdmin + `adminmultipleapplk/${appcode}`)
            .then((data) => {
                const res = data.json();
                console.log("resss----", res)
                return res
            }).then((res) => {
                setApplkmulti(res)
                // setapplk(res)
                applklist.lkexpiry = res.lkexpiry
                console.log("resss----->      ", res)
                // alert(applkexpiry.lkexpiry)
            }).catch(e => {
                console.log("error", e)
            })

        setFlag(0)
    }

    const handleChange = (e) => {

       

        setLkexpirygen(e.target.value)


        applkexpiry.lkexpiry = e.target.value;

        
    };

    const handlelkexpiryUpdate = (savedlk) => {

        setFlag(1)
        let demo = JSON.stringify(applkexpiry)
        console.log(demo)
        console.log(JSON.parse(demo))
        console.log(savedlk + "-------------savedlk")
        localStorage.setItem("savedlk", savedlk);

        var saveLk = localStorage.getItem("savedlk")
        fetch(BaseurlAdmin + `lkexpiryupdate/${saveLk}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            // alert(new Date())
            alert("LK updated successfully")
            setOpen(false);
            // getlkdetails()
            // window.location.reload(false);
        })
            .catch(r => { alert("Updation unsuccessfull") })

        getlkdetails()
    }

    const [app_code, setapp_code] = useState(appcode);
    const deptcode = localStorage.getItem("deptcode");
    const [dept_code, setdept_code] = useState(deptcode);
    const [lkexpiry, setlk_expiry] = useState();

    const handleDateChange = (e) => {

   
        setlk_expiry(e.target.value);

    }

    const handlelkexpiryGenerate = () => {


        setFlag(1)
        let demo = JSON.stringify({ app_code, dept_code, lkexpirygen })
        console.log(demo)
        console.log(JSON.parse(demo))


        fetch(BaseurlAdmin + `generatelk/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Application detail updated successfully")
            getlkdetails()
            setOpen(false);
            // setFlag(1)
            // window.location.reload(false);
        })
            .catch(r => { alert("Updation unsuccessfull") })

    }


    if (flag == '0') {

        return (
            <>


                {
                    applklist.map((item, index) => {
                        if (item.lk != "0") {

                       
                            return (
                                <>
                                    <div style={{ width: '675px', backgroundColor: 'aliceblue' }}>

                                        <Card>

                                            <div style={{ backgroundColor: 'aliceblue' }}>
                                                <CardBody>
                                                    <div className="overflow-x-auto"  >
                                                        <table className="items-center w-full bg-transparent border-collapse">
                                                            <thead style={{ backgroundColor: '#80aed736' }}>
                                                                <tr>
                                                                    <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                                        <b>Licence Key</b>
                                                                    </th>
                                                                    <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                                        <b>Licence Key Expiry Date</b>
                                                                    </th>


                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" defaultValue={"No licence key"}

                                                                    >
                                                                        {item.lk}
                                                                    </th>
                                                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">




                                                                        <Stack component="form" noValidate spacing={3} style={{ height: '43px' }}>
                                                                            <TextField
                                                                                id="date"
                                                                                label="Expiry Date"
                                                                                type="date"
                                                                                inputFormat="dd-MM-yyyy"
                                                                                // defaultValue={dateFormateFortMui}
                                                                                defaultValue={item.lkexpiry}
                                                                                onChange={handleChange}
                                                                                size="small"
                                                                                sx={{
                                                                                    width: 190,
                                                                                    "& .MuiInputBase-root": {
                                                                                    },
                                                                                }}
                                                                                style={{ height: '33px', }}
                                                                                inputProps={{
                                                                                    min: dateFormateFortMui,

                                                                                }}
                                                                                InputLabelProps={{
                                                                                    shrink: true,

                                                                                }}

                                                                            />


                                                                        </Stack>

                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <br></br>
                                                        <Grid container spacing={2}>

                                                            <Grid item xs={12}>

                                                                <Button variant='contained' size='small' width='10px' onClick={handleClickOpen} >Update</Button>
                                                                {/* <Button variant='contained' size='small' width='10px' onClick={handlelkexpiryUpdate} >Update</Button> */}
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
                                                                        <Button  onClick={() => handlelkexpiryUpdate(item.lk)}  autoFocus>
                                                                            Confirm
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>

                                                            </Grid>

                                                        </Grid>
                                                    </div>
                                                </CardBody>

                                            </div>

                                        </Card>

                                    </div>
                                </>
                            )


                                ;
                        } else if (item.lk == "0") {

                            return <div style={{ width: '675px', backgroundColor: 'aliceblue' }}>
                                <Card>


                                    <div style={{ backgroundColor: 'aliceblue' }}>

                                        <CardBody>
                                            <div className="overflow-x-auto"  >
                                                <table className="items-center w-full bg-transparent border-collapse">
                                                    <thead style={{ backgroundColor: '#80aed736' }}>
                                                        <tr>
                                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                                <b>Licence Key</b>
                                                            </th>
                                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                                <b>Licence Key Expiry Date</b>
                                                            </th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" defaultValue={"No licence key"}>
                                                                No licence key
                                                            </th>
                                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">



                                                                <Stack component="form" noValidate spacing={3} style={{ height: '43px' }}>


                                                                    <TextField
                                                                        id="date"
                                                                        label="Expiry Date"
                                                                        type="date"
                                                                        inputFormat="dd-MM-yyyy"
                                                                        // defaultValue={dateFormateFortMuigen}
                                                                        defaultValue={todaydate}
                                                                        onChange={handleChange}
                                                                        size="small"
                                                                        sx={{
                                                                            width: 190,
                                                                            "& .MuiInputBase-root": {
                                                                            },
                                                                        }}
                                                                        style={{ height: '33px', }}
                                                                        inputProps={{
                                                                            min: dateFormateFortMuigen,

                                                                        }}
                                                                        InputLabelProps={{
                                                                            shrink: true,

                                                                        }}

                                                                    />
                                                                </Stack>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <br></br>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Button variant='contained' size='small' width='10px' onClick={handleClickOpen}>Generate</Button>
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
                                                                        <Button  onClick={handlelkexpiryGenerate}  autoFocus>
                                                                            Confirm
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                    </Grid>



                                                </Grid>


                                            </div>
                                        </CardBody>

                                    </div>

                                </Card>
                            </div>
                        }
                        // return null;
                    })
                }


            </>)



    }





    
}