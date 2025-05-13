import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Box } from '@mui/material';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import Baseurl from './Baseurl';
import { useRef } from 'react';
import { color } from '@mui/system';
import { useEffect } from 'react';
import BaseurlAdmin from './BaseurlAdmin';
import { TextField } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function InvoiceDetail() {
    const [page, setPage] = useState("0");
    const [year, setYear] = useState("2022");
    const [invoicedata, setInvoicedata] = useState([]);
    const totalamountRef = useRef([])
    const invoicenoRef = useRef([]);
    const invoicedateRef = useRef([]);
    const receivedamountRef = useRef([]);
    const paymentstatusRef = useRef([]);
    const utrnoRef = useRef([]);
    const [deptlist, setDeptList] = useState([])
    const [deptcode, setDept] = useState("adv19")
    var dept_code = ""
    var decryptedText = ""

    useEffect(() => {

        fetch(BaseurlAdmin + "invoiceclientlist")
            .then((data) => {
                const res = data.json();
                console.log(res + "---res client")
                return res
            }).then((res) => {
                setDeptList(res)
                // alert(deptlist.dept_name)
                console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })


    }, []);

    const handleDept = (e) => {
        //    var year1=e.target.value;
        setDept(e.target.value)
        // setyear(year1)
        console.log(deptcode + "----deptcode")
        dept_code = e.target.value

        // window.location.reload();
    }

    const handleYear = (e) => {

        setYear(e.target.value)
        // alert(year)
        setPage(1)


        //-------------------------

        fetch(BaseurlAdmin + `invoicefordept/${deptcode}/${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data + "-----data")
                setInvoicedata(data)

                const total_amnt = data.map(element => element.total_amount)
                totalamountRef.current = total_amnt

                const invoice_no = data.map(element => element.invoice_no)
                invoicenoRef.current = invoice_no

                const invoice_date = data.map(element => element.invoice_date)
                invoicedateRef.current = invoice_date

                console.log(invoice_date + "---invoice_date")


                const received_amount = data.map(element => element.received_amount)
                receivedamountRef.current = received_amount

                const payment_status = data.map(element => element.payment_status)
                paymentstatusRef.current = payment_status

                console.log(paymentstatusRef.current[0] + "----  paymentstatusRef.current ")

                const utrnumber = data.map(element => element.utr_no)
                utrnoRef.current = utrnumber
                console.log(utrnoRef.current + "---utrnoRef.current")



            })
            .catch(error => {
                console.log("error", error);
            });
    }




    const [paymentstatusedited, setpaymentstatusedited] = useState('pending')

    const handleeditPaymentStatusChangeQ1 = (e) => {
        console.log(deptcode + "----client id")
        console.log(year + "====year")
        let quarter = year + '-01-03'
        console.log(quarter + "-----quarter")
        setpaymentstatusedited(e.target.value)
        console.log(paymentstatusedited + "----paymentstatusedited")

        fetch(BaseurlAdmin + `invoicestatus/${deptcode}/${quarter}/${paymentstatusedited}`,

            {
                method: "POST",
                body: JSON.stringify({ deptcode, quarter, paymentstatusedited }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },
            }
        ).then(r => {
            // alert(r.status)
            if (r.status == 200) {
                alert(" updated successfully")
            }
            else {
                alert("Error in  updation")
            }
            // setOpen(false)
            // window.location.reload(false);
        }).catch(e => {
            console.log("error in updation", e)
            alert(" unsuccessfull")
        })
    }

    const handleeditPaymentStatusChangeQ2 = (e) => {
        console.log(deptcode + "----client id")
        console.log(year + "====year")
        let quarter = year + '-04-06'
        console.log(quarter + "-----quarter")
        setpaymentstatusedited(e.target.value)
        console.log(paymentstatusedited + "----paymentstatusedited")

        fetch(BaseurlAdmin + `invoicestatus/${deptcode}/${quarter}/${paymentstatusedited}`,

            {
                method: "POST",
                body: JSON.stringify({ deptcode, quarter, paymentstatusedited }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },
            }
        ).then(r => {
            // alert(r.status)
            if (r.status == 200) {
                alert(" updated successfully")
            }
            else {
                alert("Error in  updation")
            }
            // setOpen(false)
            // window.location.reload(false);
        }).catch(e => {
            console.log("error in updation", e)
            alert(" unsuccessfull")
        })
    }

    const handleeditPaymentStatusChangeQ3 = (e) => {
        console.log(deptcode + "----client id")
        console.log(year + "====year")
        let quarter = year + '-07-09'
        console.log(quarter + "-----quarter")
        setpaymentstatusedited(e.target.value)
        console.log(paymentstatusedited + "----paymentstatusedited")

        fetch(BaseurlAdmin + `invoicestatus/${deptcode}/${quarter}/${paymentstatusedited}`,

            {
                method: "POST",
                body: JSON.stringify({ deptcode, quarter, paymentstatusedited }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },
            }
        ).then(r => {
            // alert(r.status)
            if (r.status == 200) {
                alert(" updated successfully")
            }
            else {
                alert("Error in  updation")
            }
            // setOpen(false)
            // window.location.reload(false);
        }).catch(e => {
            console.log("error in updation", e)
            alert(" unsuccessfull")
        })
    }
    const handleeditPaymentStatusChangeQ4 = (e) => {
        console.log(deptcode + "----client id")
        console.log(year + "====year")
        let quarter = year + '-10-12'
        console.log(quarter + "-----quarter")
        setpaymentstatusedited(e.target.value)
        console.log(paymentstatusedited + "----paymentstatusedited")

        fetch(BaseurlAdmin + `invoicestatus/${deptcode}/${quarter}/${paymentstatusedited}`,

            {
                method: "POST",
                body: JSON.stringify({ deptcode, quarter, paymentstatusedited }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },
            }
        ).then(r => {
            // alert(r.status)
            if (r.status == 200) {
                alert(" updated successfully")
            }
            else {
                alert("Error in  updation")
            }
            // setOpen(false)
            // window.location.reload(false);
        }).catch(e => {
            console.log("error in updation", e)
            alert(" unsuccessfull")
        })
    }


    const handleEdit = (e) => {
        setPage("2")
    }












    if (page == '0') {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={12}>
                        <div align="right">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Client List</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={deptcode}
                                        label="Client List"
                                        // onChange={e => (setDept(e.target.value))}
                                        onChange={handleDept}
                                    >

                                        {deptlist.map((item, index) => (
                                            <MenuItem key={index} value={item.client_id} >
                                                {item.dept_name}
                                            </MenuItem>
                                        ))

                                        }

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <div align="left">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        label="Year"
                                        // onChange={e => (setyear(e.target.value))}
                                        onChange={handleYear}
                                    >

                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2023}>2023</MenuItem>
                                        <MenuItem value={2024}>2024</MenuItem>

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                    <Grid item lg={6}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: '#cfd8dc' }}>
                                        <TableCell></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>January - March (Q1)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>April - June (Q2)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>July - September (Q3)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>October - December (Q4)</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Total Amount</b></TableCell>
                                        {totalamountRef.current[0] != null ? <TableCell align="center">{totalamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[1] != null ? <TableCell align="center">{totalamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[2] != null ? <TableCell align="center">{totalamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[3] != null ? <TableCell align="center">{totalamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Number</b></TableCell>
                                        {invoicenoRef.current[0] != null ? <TableCell align="center">{invoicenoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[1] != null ? <TableCell align="center">{invoicenoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[2] != null ? <TableCell align="center">{invoicenoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[3] != null ? <TableCell align="center">{invoicenoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Date</b></TableCell>
                                        {invoicedateRef.current[0] != null ? <TableCell align="center">{invoicedateRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[1] != null ? <TableCell align="center">{invoicedateRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[2] != null ? <TableCell align="center">{invoicedateRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[3] != null ? <TableCell align="center">{invoicedateRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Paid Amount</b></TableCell>
                                        {receivedamountRef.current[0] != null ? <TableCell align="center">{receivedamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[1] != null ? <TableCell align="center">{receivedamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[2] != null ? <TableCell align="center">{receivedamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[3] != null ? <TableCell align="center">{receivedamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Payment Status </b></TableCell>
                                        {paymentstatusRef.current[0] != null ? <TableCell align="center" >{paymentstatusRef.current[0]}</TableCell> : <TableCell align="center" >-</TableCell>}
                                        {paymentstatusRef.current[1] != null ? <TableCell align="center" >{paymentstatusRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {paymentstatusRef.current[2] != null ? <TableCell align="center">{paymentstatusRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {paymentstatusRef.current[3] != null ? <TableCell align="center">{paymentstatusRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>UTR Number</b></TableCell>
                                        {utrnoRef.current[0] != null ? <TableCell align="center">{utrnoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[1] != null ? <TableCell align="center">{utrnoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[2] != null ? <TableCell align="center">{utrnoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[3] != null ? <TableCell align="center">{utrnoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item lg={3}>
                    </Grid>

                </Grid>

            </>
        );
    }
    else if (page == '1') {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={12}>
                        <div align="right">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Client List</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={deptcode}
                                        label="Client List"
                                        // onChange={e => (setDept(e.target.value))}
                                        onChange={handleDept}
                                    >

                                        {deptlist.map((item, index) => (
                                            <MenuItem key={index} value={item.client_id} >
                                                {item.dept_name}
                                            </MenuItem>
                                        ))

                                        }

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <div align="left">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        label="Year"
                                        // onChange={e => (setyear(e.target.value))}
                                        onChange={handleYear}
                                    >

                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2023}>2023</MenuItem>
                                        <MenuItem value={2024}>2024</MenuItem>

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                    <Grid item lg={6}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: '#cfd8dc' }}>
                                        <TableCell></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>January - March (Q1)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>April - June (Q2)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>July - September (Q3)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>October - December (Q4)</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{ backgroundColor: 'whitesmoke' }}>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Total Amount</b></TableCell>
                                        {totalamountRef.current[0] != null ? <TableCell align="center">{totalamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[1] != null ? <TableCell align="center">{totalamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[2] != null ? <TableCell align="center">{totalamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[3] != null ? <TableCell align="center">{totalamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Total Amount including GST (18%)</b></TableCell>
                                        {totalamountRef.current[0] != null ? <TableCell align="center">{totalamountRef.current[0] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[1] != null ? <TableCell align="center">{totalamountRef.current[1] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[2] != null ? <TableCell align="center">{totalamountRef.current[2] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[3] != null ? <TableCell align="center">{totalamountRef.current[3] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Number</b></TableCell>
                                        {invoicenoRef.current[0] != null ? <TableCell align="center">{invoicenoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[1] != null ? <TableCell align="center">{invoicenoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[2] != null ? <TableCell align="center">{invoicenoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[3] != null ? <TableCell align="center">{invoicenoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Date</b></TableCell>
                                        {invoicedateRef.current[0] != null ? <TableCell align="center">{invoicedateRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[1] != null ? <TableCell align="center">{invoicedateRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[2] != null ? <TableCell align="center">{invoicedateRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[3] != null ? <TableCell align="center">{invoicedateRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Paid Amount</b></TableCell>
                                        {receivedamountRef.current[0] != null ? <TableCell align="center">{receivedamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[1] != null ? <TableCell align="center">{receivedamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[2] != null ? <TableCell align="center">{receivedamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[3] != null ? <TableCell align="center">{receivedamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Payment Status <Button variant="contained" size="small" onClick={handleEdit}>Edit</Button></b></TableCell>


                                        {paymentstatusRef.current[0] != null ? <TableCell align="center" style={paymentstatusRef.current[0] == 'pending' ? { color: 'red' } : { color: 'green' }}  >{paymentstatusRef.current[0]} </TableCell> : <TableCell align="center">-</TableCell>}
                                        {paymentstatusRef.current[1] != null ? <TableCell align="center" style={paymentstatusRef.current[1] == 'pending' ? { color: 'red' } : { color: 'green' }} >  {paymentstatusRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {paymentstatusRef.current[2] != null ? <TableCell align="center" style={paymentstatusRef.current[2] == 'pending' ? { color: 'red' } : { color: 'green' }} >{paymentstatusRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {paymentstatusRef.current[3] != null ? <TableCell align="center" style={paymentstatusRef.current[3] == 'pending' ? { color: 'red' } : { color: 'green' }} >{paymentstatusRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>UTR Number</b></TableCell>
                                        {utrnoRef.current[0] != null ? <TableCell align="center">{utrnoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[1] != null ? <TableCell align="center">{utrnoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[2] != null ? <TableCell align="center">{utrnoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[3] != null ? <TableCell align="center">{utrnoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>


                                </TableBody>
                            </Table>
                           
                        </TableContainer>
                        
                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                    <Grid item lg={12}>
                    </Grid>
                    <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                </Grid>

            </>
        );
    }
    else if (page == '2') {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={12}>
                        <div align="right">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Client List</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={deptcode}
                                        label="Client List"
                                        // onChange={e => (setDept(e.target.value))}
                                        onChange={handleDept}
                                    >

                                        {deptlist.map((item, index) => (
                                            <MenuItem key={index} value={item.client_id} >
                                                {item.dept_name}
                                            </MenuItem>
                                        ))

                                        }

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <div align="left">
                            <Box sx={{ minWidth: 180 }}>
                                <FormControl style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        label="Year"
                                        // onChange={e => (setyear(e.target.value))}
                                        onChange={handleYear}
                                    >

                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2023}>2023</MenuItem>
                                        <MenuItem value={2024}>2024</MenuItem>

                                    </Select>

                                </FormControl>

                            </Box>
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                    <Grid item lg={6}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: '#cfd8dc' }}>
                                        <TableCell></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>January - March (Q1)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>April - June (Q2)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>July - September (Q3)</b></TableCell>
                                        <TableCell align="center" style={{ color: '#1565c0' }}><b>October - December (Q4)</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{ backgroundColor: 'whitesmoke' }}>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Total Amount</b></TableCell>
                                        {totalamountRef.current[0] != null ? <TableCell align="center">{totalamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[1] != null ? <TableCell align="center">{totalamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[2] != null ? <TableCell align="center">{totalamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[3] != null ? <TableCell align="center">{totalamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Total Amount including GST (18%)</b></TableCell>
                                        {totalamountRef.current[0] != null ? <TableCell align="center">{totalamountRef.current[0] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[1] != null ? <TableCell align="center">{totalamountRef.current[1] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[2] != null ? <TableCell align="center">{totalamountRef.current[2] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {totalamountRef.current[3] != null ? <TableCell align="center">{totalamountRef.current[3] * 1.18}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Number</b></TableCell>
                                        {invoicenoRef.current[0] != null ? <TableCell align="center">{invoicenoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[1] != null ? <TableCell align="center">{invoicenoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[2] != null ? <TableCell align="center">{invoicenoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicenoRef.current[3] != null ? <TableCell align="center">{invoicenoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}

                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Invoice Date</b></TableCell>
                                        {invoicedateRef.current[0] != null ? <TableCell align="center">{invoicedateRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[1] != null ? <TableCell align="center">{invoicedateRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[2] != null ? <TableCell align="center">{invoicedateRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {invoicedateRef.current[3] != null ? <TableCell align="center">{invoicedateRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Paid Amount</b></TableCell>
                                        {receivedamountRef.current[0] != null ? <TableCell align="center">{receivedamountRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[1] != null ? <TableCell align="center">{receivedamountRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[2] != null ? <TableCell align="center">{receivedamountRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {receivedamountRef.current[3] != null ? <TableCell align="center">{receivedamountRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>Payment Status </b></TableCell>

                                        {paymentstatusRef.current[0] != null ?
                                            <>
                                                <TableCell align="center" style={paymentstatusRef.current[0] == 'pending' ? { color: 'red' } : { color: 'green' }}  >
                                                    <ToggleButtonGroup
                                                        color="primary"
                                                        aria-label="Platform"
                                                        value={paymentstatusRef.current[0]}
                                                        exclusive
                                                        onChange={handleeditPaymentStatusChangeQ1}
                                                        style={{ margin: '16px 8px' }}
                                                        size='small'
                                                    >
                                                        <ToggleButton value="pending" color="primary">
                                                            Pending
                                                        </ToggleButton>
                                                        <ToggleButton value="paid" color="primary">
                                                            Paid
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </>
                                            :
                                            <TableCell align="center">-</TableCell>}


                                        {paymentstatusRef.current[1] != null ?
                                            <>
                                                <TableCell align="center" style={paymentstatusRef.current[1] == 'pending' ? { color: 'red' } : { color: 'green' }}  >
                                                    <ToggleButtonGroup
                                                        color="primary"
                                                        aria-label="Platform"
                                                        value={paymentstatusRef.current[1]}
                                                        exclusive
                                                        onChange={handleeditPaymentStatusChangeQ2}
                                                        style={{ margin: '16px 8px' }}
                                                        size='small'
                                                    >
                                                        <ToggleButton value="pending" color="primary">
                                                            Pending
                                                        </ToggleButton>
                                                        <ToggleButton value="paid" color="primary">
                                                            Paid
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </>
                                            :
                                            <TableCell align="center">-</TableCell>}



                                        {paymentstatusRef.current[2] != null ?
                                            <>
                                                <TableCell align="center" style={paymentstatusRef.current[2] == 'pending' ? { color: 'red' } : { color: 'green' }}  >
                                                    <ToggleButtonGroup
                                                        color="primary"
                                                        aria-label="Platform"
                                                        value={paymentstatusRef.current[2]}
                                                        exclusive
                                                        onChange={handleeditPaymentStatusChangeQ3}
                                                        style={{ margin: '16px 8px' }}
                                                        size='small'
                                                    >
                                                        <ToggleButton value="pending" color="primary">
                                                            Pending
                                                        </ToggleButton>
                                                        <ToggleButton value="paid" color="primary">
                                                            Paid
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </>
                                            :
                                            <TableCell align="center">-</TableCell>}


                                        {paymentstatusRef.current[3] != null ?
                                            <>
                                                <TableCell align="center" style={paymentstatusRef.current[3] == 'pending' ? { color: 'red' } : { color: 'green' }}  >
                                                    <ToggleButtonGroup
                                                        color="primary"
                                                        aria-label="Platform"
                                                        value={paymentstatusRef.current[3]}
                                                        exclusive
                                                        onChange={handleeditPaymentStatusChangeQ4}
                                                        style={{ margin: '16px 8px' }}
                                                        size='small'
                                                    >
                                                        <ToggleButton value="pending" color="primary">
                                                            Pending
                                                        </ToggleButton>
                                                        <ToggleButton value="paid" color="primary">
                                                            Paid
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </>
                                            :
                                            <TableCell align="center">-</TableCell>}


                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row" style={{ backgroundColor: '#cfd8dc' }}><b>UTR Number</b></TableCell>
                                        {utrnoRef.current[0] != null ? <TableCell align="center">{utrnoRef.current[0]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[1] != null ? <TableCell align="center">{utrnoRef.current[1]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[2] != null ? <TableCell align="center">{utrnoRef.current[2]}</TableCell> : <TableCell align="center">-</TableCell>}
                                        {utrnoRef.current[3] != null ? <TableCell align="center">{utrnoRef.current[3]}</TableCell> : <TableCell align="center">-</TableCell>}
                                    </TableRow>


                                </TableBody>
                            </Table>
                            <br></br>
                            <br></br>
                            <br></br>
                        </TableContainer>
                        <br></br>
                            <br></br>
                            <br></br>
                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                    <Grid item lg={12}>
                    </Grid>
                </Grid>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
            </>
        )
    }
}