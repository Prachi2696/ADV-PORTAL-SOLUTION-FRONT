import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import BaseurlAdmin from '../components/BaseurlAdmin';

import '../assets/styles/Resources.css';




export default function CheckNoofServices() {


    const [flag, setFlag] = useState('0');
    const [custstart, setCuststart] = useState();
    const [custlast, setCustlast] = useState();
    const [noofservicescust, setnoofservicescust] = useState(0)
    const [noofdeptcust, setnoofdeptcust] = useState(0)
    const [deptservname, setdeptservname] = useState()


    const handleflag = (e) => {
        setFlag(e.target.value)
    }

    const handlecuststart = (e) => {
        setCuststart(e.target.value)
    }

    const handlecustlast = (e) => {
        setCustlast(e.target.value)
    }

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

    const handleSubmit = (e) => {
        setFlag('1')
        // alert( custstart+"----custstart")
        // alert (custlast +"----custlast")


        const fetchData = () => {

            fetch(BaseurlAdmin + `countnoofservicecustom/${custstart}/${custlast}`, {
                method: "post",
                // body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            })
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    // setApplications(res)
                    setnoofservicescust(res)
                    // console.log(res + "----res")

                }).catch(e => {
                    console.log("error", e)
                })


            fetch(BaseurlAdmin + `countnoofdeptcustom/${custstart}/${custlast}`, {
                method: "post",
                // body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            })
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    // setApplications(res)
                    setnoofdeptcust(res)
                    // console.log(res + "----res")

                }).catch(e => {
                    console.log("error", e)
                })



            fetch(BaseurlAdmin + `deptservicenamecustom/${custstart}/${custlast}`, {
                method: "post",
                // body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            })
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    // setApplications(res)
                    // setnoofdeptcust(res)
                    setdeptservname(res || {})
                    // console.log(JSON.stringify(res) + "----resmap")

                }).catch(e => {
                    console.log("error", e)
                })







        }
        fetchData();





    }

    if (flag === '0') {
        return (
            <>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 'auto', minHeight: '510px' }}>

                    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Department Updates </div>
                    <hr />
                    <br />

                    <>
                        <Grid container spacing={1}>
                            {/* <Grid item xs={13} sm={8} md={1}   >
    
                            </Grid> */}
                            <Grid item xs={13} sm={8} md={3}   >
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    inputFormat="dd-MM-yyyy"
                                    // defaultValue={dateFormateFortMui}
                                    onChange={handlecuststart}
                                    size="small"
                                    sx={{ width: 190 }}
                                    style={{ height: '33px' }}
                                    inputProps={{
                                        max: dateFormateFortMui,
                                        // min: "1993-01-01"
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={13} sm={8} md={3}   >

                                <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    inputFormat="dd-MM-yyyy"
                                    // defaultValue={dateFormateFortMui}
                                    onChange={handlecustlast}
                                    size="small"
                                    sx={{ width: 190 }}
                                    inputProps={{
                                        max: dateFormateFortMui,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />


                            </Grid>
                            <Grid item xs={13} sm={8} md={4}  >
                                <div >
                                    {/* {customcsvdataflag ? <> */}
                                    <Button size="normal" color="info" variant="outlined" onClick={handleSubmit}>Submit</Button>



                                </div>

                            </Grid>
                            <Grid item xs={13} sm={8} md={1}   >

                            </Grid>
                        </Grid>
                    </>
                    {/* } */}




                </div>

            </>

        );
    }
    else if (flag == '1') {
        return (
            <>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 'auto', minHeight: '510px' }}>

                    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Department Updates </div>
                    <hr />
                    <br />

                    <>
                        <Grid container spacing={1}>
                            {/* <Grid item xs={13} sm={8} md={1}   >
    
                            </Grid> */}
                            <Grid item xs={13} sm={8} md={3}   >
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    inputFormat="dd-MM-yyyy"
                                    // defaultValue={dateFormateFortMui}
                                    onChange={handlecuststart}
                                    size="small"
                                    sx={{ width: 190 }}
                                    style={{ height: '33px' }}
                                    inputProps={{
                                        max: dateFormateFortMui,
                                        // min: "1993-01-01"
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={13} sm={8} md={3}   >

                                <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    inputFormat="dd-MM-yyyy"
                                    // defaultValue={dateFormateFortMui}
                                    onChange={handlecustlast}
                                    size="small"
                                    sx={{ width: 190 }}
                                    inputProps={{
                                        max: dateFormateFortMui,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />


                            </Grid>
                            <Grid item xs={13} sm={8} md={4}  >
                                <div >
                                    {/* {customcsvdataflag ? <> */}
                                    <Button size="normal" color="info" variant="outlined" onClick={handleSubmit}>Submit</Button>



                                </div>

                            </Grid>
                            <Grid item xs={13} sm={8} md={1}   >

                            </Grid>
                        </Grid>
                    </>
                    {/* } */}
                    <br></br>
                    <br></br>
                    <Grid container spacing={1}>
                        {/* <Grid item xs={13} sm={8} md={1}   >
                        </Grid> */}
                        <Grid item xs={13} sm={8} md={6}   >
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Number of Departments</TableCell>
                                            <TableCell align='center'>Number of Services</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align='center'>{noofdeptcust}</TableCell>
                                            <TableCell align='center'>{noofservicescust}</TableCell>

                                        </TableRow>
                                        {/* ))} */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={13} sm={8} md={6}   >
                            <TableContainer component={Paper} sx={{ maxHeight: 200 }}>
                                <Table aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Name of Departments</TableCell>
                                            <TableCell align='center'>Name of Services</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {(deptservname && typeof deptservname === 'object')
                                            ?
                                            <>
                                                {deptservname && Object.entries(deptservname).length > 0 ? (
                                                    Object.entries(deptservname).map(([service, department], index) => (
                                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                            <TableCell align="center">{department}</TableCell>
                                                            <TableCell align="center">{service}</TableCell>
                                                        </TableRow>
                                                    ))
                                                ) : (
                                                    <TableRow>
                                                        <TableCell colSpan={2} align="center">No data available</TableCell>
                                                    </TableRow>
                                                )}</>
                                            :
                                            <>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="center">0</TableCell>
                                                    {/* If you want to display the service name as well, uncomment the next line */}
                                                    <TableCell align="center">0</TableCell>
                                                </TableRow>
                                            </>
                                        }


                                    </TableBody>

                                </Table>
                            </TableContainer>
                        </Grid>

                    </Grid>



                </div>

            </>

        );
    }


}
