import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState, useEffect } from 'react';
import Baseurl from "./Baseurl";
import H1 from "@material-tailwind/react/Heading1";
import BaseurlAdmin from "./BaseurlAdmin";
import { saveAs } from 'file-saver';
import ReactLoading from "react-loading";
import { Slide, toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { useTheme } from '@material-ui/core/styles';

export default function DeptwiseInvoice() {
    const theme = useTheme()
    const [alertflag, setAlertflag] = useState('1');
    const [alertflagapp, setAlertflagapp] = useState('1');
    const [applist, setapplist] = useState([]);
    const [dept, setDept] = useState("");
    const [deptlist, setDeptList] = useState([]);
    let [invoiceDataflag, setinvoiceDataflag] = useState(true);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            fetch(Baseurl + "deptlist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setDeptList(res)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, []);
    const InvoiceDownload = () => {
        fetch(BaseurlAdmin + `igniteinvoiceR/${dept}`,
            // fetch(BaseurlAdmin + "igniteinvoiceR/OMC002",
            {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                },
            }
        )
            .then(res => {


                if (res.status == "204") {
                    throw new Error('Data not found for Request.');
                }


                if (res.status == "500") {
                    throw new Error('Something went wrong.');
                }


                return res.blob();
            })
            .then((blob) => {

                const file = new Blob([blob], { type: 'application/pdf' })
                saveAs(file, "Invoice");
                setinvoiceDataflag(true);
                setSpinner(true);


            })
            .catch(e => {
                toastAlertWarning(e.message)
                console.log("error", e)
                setinvoiceDataflag(true);
                setSpinner(true);
            })
    }


    const handleDept = (e) => {
        //e.preventDefault();
        setAlertflag('0')
        setDept(e.target.value);


    }

    const toastAlertWarning = (message) => {
        toast.warn(message, {
            position: "top-center",
            autoClose: 5000,
            transition: Slide,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    // const year = (new Date()).getFullYear();
    // const years = Array.from(new Array(3), (val, index) => year - index);
    let [MonthlyYear, setMonthlyYear] = useState();

    const startYear = 2021;
    const numberOfRanges = 5; // Adjust this to control how many ranges you want
    const years = Array.from(new Array(numberOfRanges), (val, index) => {
        const yearStart = startYear + index;
        return `${yearStart}-${yearStart + 1}`;
    });

    const handleYear =(e)=>{
        setMonthlyYear(e.target.value)
    }

const handleYearlyInvoice =(e)=>{
    // setMonthlyYear(e.target.value)

    fetch(BaseurlAdmin + `igniteinvoiceyear/${MonthlyYear}`,
        // fetch(BaseurlAdmin + "igniteinvoiceR/OMC002",
        {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
        }
    )
        .then(res => {


            if (res.status == "204") {
                throw new Error('Data not found for Request.');
            }


            if (res.status == "500") {
                throw new Error('Something went wrong.');
            }


            return res.blob();
        })
        .then((blob) => {

            const file = new Blob([blob], { type: 'application/pdf' })
            saveAs(file, "Invoice");
            setinvoiceDataflag(true);
            setSpinner(true);


        })
        .catch(e => {
            toastAlertWarning(e.message)
            console.log("error", e)
            setinvoiceDataflag(true);
            setSpinner(true);
        })
}









    return (
        <>

            <div>
                <br></br>

                <ToastContainer />
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 'auto', paddingBottom: '500px' }}>

                    <div style={{ fontSize: '30px', fontWeight: 'bold', color: theme.typography.primary.mainheading }}>Invoice Reports</div>
                    <hr />
                    <br />

                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                            <Box >
                                <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Department List"
                                        onChange={handleDept}

                                    >

                                        {deptlist.map((item, index) => (
                                            <MenuItem key={index} value={item.username} >
                                                {item.dept_name}
                                            </MenuItem>
                                        ))

                                        }

                                    </Select>

                                </FormControl>
                            </Box >
                        </Grid>



                        <Grid item xs={2} lg={2}>
                            {invoiceDataflag ? <>
                                <Button size="medium" color="info" variant="outlined" onClick={InvoiceDownload}>PDF</Button> </> : <ReactLoading type="balls" color="#0000FF"
                                    height={10} width={40} />
                            }
                        </Grid>

                        <Grid item xs={2} lg={12}>

                        </Grid>

                        <Grid item xs={12} lg={3}>
                            <Box >
                                {/* <div style={{ display: 'inline-block' }}> */}
                                <FormControl style={{ minWidth: 190 }} >
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Year"
                                        // onChange={e => setMonthlyYear(e.target.value)}
                                        onChange={handleYear}
                                        style={{ height: '43px' }}
                                    >
                                        {/* {
                                            years.map((year, index) => {
                                                return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                                            })
                                        } */}
                                        {years.map((yearRange, index) => (
                                            <MenuItem key={`yearRange${index}`} value={yearRange}>
                                                {yearRange}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* </div> */}
                            </Box >
                        </Grid>



                        <Grid item xs={2} lg={2}>
                            {invoiceDataflag ? <>
                                <Button size="medium" color="info" variant="outlined" onClick={handleYearlyInvoice}>PDF</Button> </> : <ReactLoading type="balls" color="#0000FF"
                                    height={10} width={40} />
                            }
                        </Grid>
                    </Grid>

                </div>
            </div>






        </>
    )
}