import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Card, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Baseurl from './Baseurl';
import BaseurlAdmin from './BaseurlAdmin';
import ReactLoadingforpdf from "react-loading";
import { use } from 'i18next';



const InvoiceForm = () => {

    const [spinnerforfetchingamnt, setSpinnerforfetchingamnt] = useState(false);
    const [payment_status, setPaymentStatus] = useState();
    const handlePaymentStatusChange = (event, newStatus) => {
        setPaymentStatus(newStatus);
    };

    const handleSubmit = (event) => {
        // alert(invoice_date)
        // event.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted!');
        // console.log(deptcode+","+totalamount+","+quarter+","+year+","+invoiceno+","+receivedamount+","+utrno)
        console.log(payment_status);
        //-----------------------------------------------------------
        const quarter = year + "-" + onlyquarter
        let demo = JSON.stringify({ client_id, total_amount, quarter, invoice_no, invoice_date, received_amount, payment_received_date,payment_status, utr_no })
        console.log(demo)
        console.log(JSON.parse(demo))
        // alert(JSON.stringify(demo))
        if (client_id != "" && total_amount != "" && quarter != "" && invoice_no != "" && received_amount != "" && payment_status != "" && utr_no != "") {

            fetch(BaseurlAdmin + `invoiceform`,

                {
                    method: "POST",
                    body: JSON.stringify({ client_id, total_amount, quarter, invoice_no, invoice_date, received_amount,payment_received_date, payment_status, utr_no }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },
                }
            ).then(r => {
                // alert(r.status)
                if (r.status == 200) {
                    alert(" added successfully")
                }
                else {
                    alert("Error in  addition")
                }
                // setOpen(false)
                // window.location.reload(false);
            }).catch(e => {
                console.log("error in registration", e)
                alert(" unsuccessfull")
            })
        }
        else {
            alert("fill all fields carefully")
        }



    };

    const [deptlist, setDeptList] = useState([])
    const [client_id, setclient_id] = useState("")
    const [total_amount, settotal_amount] = useState("")
    const [onlyquarter, setQuarter] = useState("")
    const [year, setYear] = useState("")
    const [invoice_no, setinvoice_no] = useState("")
    const [received_amount, setreceivedamount] = useState("")
    const [utr_no, setutrno] = useState("")
    const [invoice_date, setinvoicedate] = useState("")
    const [payment_received_date,setpayment_received_date]=useState("")

    useEffect(() => {

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


    }, []);


    const handleYear = (e) => {
        setSpinnerforfetchingamnt(true)
        setYear(e.target.value)
        const datedata = ["bill", onlyquarter, e.target.value, client_id];
        console.log(datedata + "-------datedata")
        fetch(Baseurl + `billDeptCategamnt`,

            {
                method: "POST",
                // body: JSON.stringify({ client_id, total_amount, quarter, invoice_no, invoice_date, received_amount, payment_status, utr_no }),
                body: JSON.stringify(datedata),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },
            }
        )
            .then((data) => {
                const res = data.json();
                console.log("resss", res)
                return res
            }).then((res) => {
                settotal_amount(res)
                setSpinnerforfetchingamnt(false)
                // setappdetail(res)
                console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })
        // .then(r => {
        //     // alert(r.status)
        //     if (r.status == 200) {
        //         alert(JSON.stringify(r) + "----response")
        //     }
        //     else {
        //         alert("Error in  addition")
        //     }
        //     // setOpen(false)
        //     // window.location.reload(false);
        // }).catch(e => {
        //     console.log("error in registration", e)
        //     alert(" unsuccessfull")
        // })

        // setSpinnerforfetchingamnt(false)
    }


    return (
        <>
            {/* <div  > */}
            {/* <Grid container spacing={2}> */}


            {/* <Card> */}
            <Typography variant="h5" align="center" >Invoice Registration</Typography>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
                {/* <FormControl style={{ margin: '8px', width: '100%' }} size='small'>
                            <InputLabel>Department Name</InputLabel>
                            <Select>
                                {departments.map((department, index) => (
                                    <MenuItem key={index} value={department}>
                                        {department}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                <Box sx={{ minWidth: 180 }}>
                    <FormControl style={{ margin: '8px', width: '100%' }} size='small'>
                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={client_id}
                            label="Department List"
                            onChange={e => (setclient_id(e.target.value))}
                        // onChange={handleDept}
                        >

                            {deptlist.map((item, index) => (
                                <MenuItem key={index} value={item.username} >
                                    {item.dept_name}
                                </MenuItem>
                            ))

                            }

                        </Select>

                    </FormControl>

                </Box>




                <FormControl style={{ margin: '8px', width: '100%' }} size='small'>
                    <InputLabel id="demo-simple-select-label">Quarter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Quarter"
                        onChange={e => (setQuarter(e.target.value))}
                    >

                        <MenuItem value="01">January-March</MenuItem>
                        <MenuItem value="04">April-June</MenuItem>
                        <MenuItem value="07">July-September</MenuItem>
                        <MenuItem value="10">October-December</MenuItem>


                    </Select>
                </FormControl>
                <FormControl style={{ margin: '8px', width: '100%' }} size='small'>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Year"
                        // onChange={e => (setYear(e.target.value))}
                        onChange={handleYear}
                    >

                        <MenuItem value="2022">2022</MenuItem>
                        <MenuItem value="2023">2023</MenuItem>
                        <MenuItem value="2024">2024</MenuItem>


                    </Select>
                </FormControl>

                {spinnerforfetchingamnt ?
                    <>
                        <ReactLoadingforpdf type="balls" color="#0000FF"
                            height={10} width={40} align='center' />
                    </>
                    :
                    <>
                        {/* <Button size="medium" color="info" variant="contained" onClick={(e) => { Downloadpdf() }} >PDF</Button> */}
                        <TextField
                            style={{ margin: '8px', width: '100%' }}
                            label="Total Amount"
                            // type="number"
                            size='small'

                            value={total_amount}
                        // defaultValue={total_amount}
                        // onChange={e => (settotal_amount(e.target.value))}
                        />
                    </>
                }
                {/* <h1>{total_amount}---tamnt</h1> */}
                {/* <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="Total Amount"
                    // type="number"
                    size='small'

                    value={total_amount}
                // defaultValue={total_amount}
                // onChange={e => (settotal_amount(e.target.value))}
                /> */}

                <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="Invoice Number"
                    size='small'
                    onChange={e => (setinvoice_no(e.target.value))}
                />

                <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="Invoice Date"
                    type="date"
                    size='small'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => (setinvoicedate(e.target.value))}
                />

                <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="Received Amount"
                    // type="number"
                    size='small'
                    onChange={e => (setreceivedamount(e.target.value))}
                />

                <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="Payment Recieved Date"
                    type="date"
                    size='small'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => (setpayment_received_date(e.target.value))}
                />

                <ToggleButtonGroup
                    value={payment_status}
                    exclusive
                    onChange={handlePaymentStatusChange}
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

                <TextField
                    style={{ margin: '8px', width: '100%' }}
                    label="UTR Number"
                    size='small'
                    onChange={e => (setutrno(e.target.value))}
                />



                <Button
                    style={{ margin: '16px 8px' }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    maxWidth='400px'
                >
                    Submit
                </Button>
            </form>

            {/* </Card> */}
            <br></br>
            <br></br>
            {/* </Grid> */}
            {/* </div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
};

export default InvoiceForm;
