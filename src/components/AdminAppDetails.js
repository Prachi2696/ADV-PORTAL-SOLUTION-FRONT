import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';

import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { AiOutlineFolderView } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md';
import { useHistory } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import AdminAllowedOperations from './AdminAllowedOperations';
import AdminView from './AdminView';

import AdminLk from './AdminLk';
import Baseurl from './Baseurl';

import BaseurlAdmin from './BaseurlAdmin';
import { toast, ToastContainer } from 'react-toastify';




export default function AdminAppDetails() {

    const [alertflag, setAlertflag] = useState('1');
    const [alertflagapp, setAlertflagapp] = useState('1');


    const [page, setPage] = useState('0');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const history = useHistory();
    const toastAlertWarning = (message) => {

        toast.warn(message, {
            position: 'top-right',
            style: {
                top: '130px',
            },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }



    const [applk, setapplk] = useState([]);


    const handleManageLK = (e) => {

        if (alertflag == '1') {
            toastAlertWarning('Please select Department List first!')

        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        } else {
            setPage(2)



            fetch(BaseurlAdmin + `adminmultipleapplk/${appname}`)
                .then((data) => {
                    const res = data.json();
                    // console.log("resss", res)
                    return res
                }).then((res) => {
                    setapplk(res)
                    // console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })

        }




    }

    const [opr, setopr] = useState({})
    const oprref = React.useRef([]);

    const handleOpr = (e) => {
        if (alertflag == '1') {
            toastAlertWarning('Please select Department List first!')

        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        } else {

            setPage(3);

            fetch(BaseurlAdmin + `opr/${appname}`)
                .then((data) => {
                    const res = data.json();
                    // console.log("resss of opr----", res)
                    return res
                }).then((res) => {
                    setopr(res)
                    oprref.current = res
                    // console.log(oprref.current+"-----oprref.current")
                    // console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }


    }



    const handleView = (e) => {

        if (alertflag == '1') {
            toastAlertWarning('Please select Department List first!')

        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        } else {



            setPage(1);

        }
    }

    const [email, setemail] = useState("");
    const [desc, setdesc] = useState("");
    const [appn, setappn] = useState("");

    let demo = "pqr"



    const [appdetail, setappdetail] = useState({});
    const [appname, setappname] = React.useState();

    const handleChange = e => {
        if (page == '1' || page =='2' || page =='3') {

            window.location.reload();
        }

        setAlertflagapp('0')

        setappname(e.target.value)

        fetch(BaseurlAdmin + `appdetail/${e.target.value}`)
            .then((data) => {
                const res = data.json();
                // console.log("resss", res)
                return res
            }).then((res) => {
                setappdetail(res)
                // console.log("resss", res)
            }).catch(e => {
                console.log("error", e)
            })


        e.preventDefault();

        setPage(0);


    };

    // for dept dropdown

    const [deptlist, setDeptList] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = () => {
            fetch(Baseurl + "deptlist")
                .then((data) => {
                    const res = data.json();

                    return res
                }).then((res) => {
                    setDeptList(res)

                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

        const token = sessionStorage.getItem("token");
        // if (token) {
        //     const payload = JSON.parse(atob(token.split('.')[1]));
        //     const exp = payload.exp;
        //     if (Date.now() >= exp * 1000) {
        //         sessionStorage.removeItem("token");
        //         history.push('/deptadmin/loginwithjwt');
        //     }
        // }

    }, [])


    const [dept, setDept] = useState("");

    localStorage.setItem("deptcode", dept);

    const handleDept = (e) => {
        //e.preventDefault();
        setAlertflag('0')
        setDept(e.target.value);


        let demo = JSON.stringify(e.target.value)

        fetch(Baseurl + "applist",

            {
                method: "POST",
                body: e.target.value,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        )
            .then(res => {
                return res.json()
            })
            .then(
                res => {
                    setapplist(res)

                }

            )
            .catch(e => {
                console.log("error", e)
            })



    }



    const [applist, setapplist] = useState([]);

    localStorage.setItem("appcode", appname)










    if (page == '0') {
        return (
            <>
                <ToastContainer />
                <div style={{ paddingBottom: '600px' }}>
                    <Card>

                        <CardBody>

                            <Grid container spacing={5} column={2}>
                                <Grid item lg={3}></Grid>
                                <Grid item lg={3} >
                                    <div align="right">
                                        <Box >
                                            <FormControl fullWidth  style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Department List"
                                                    onChange={handleDept}

                                                >

                                                    {deptlist.map((item, index) => (
                                                        <MenuItem key={index} value={item.dept_code} >
                                                            {item.dept_name}
                                                        </MenuItem>
                                                    ))

                                                    }

                                                </Select>

                                            </FormControl>

                                        </Box>
                                    </div>

                                </Grid>
                                {/* <Grid item lg={5}></Grid> */}
                                <Grid item lg={3} >

                                    <div align="left">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl  fullWidth  style={{ minWidth: 170 }} size='small' >
                                                <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Application List"
                                                    onChange={handleChange}
                                                >



                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item.appcode} >
                                                            {item.appname}
                                                        </MenuItem>
                                                    ))
                                                    }






                                                </Select>

                                            </FormControl>
                                        </Box>
                                    </div>
                                    <br></br><br></br>
                                </Grid>
                                <Grid item lg={3}></Grid>
                            </Grid>


                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} column={5}>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                    </div>
                                </Grid>
                                <Grid item lg={1}></Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
    else if (page == '1') {
        return (
            <>
                <ToastContainer />
                <div style={{ paddingBottom: '600px' }}>
                    <Card>

                        <CardBody>

                            <Grid container spacing={3} column={2}>
                            <Grid item lg={3}></Grid>
                                <Grid item lg={3}>

                                    <div align="right">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Department List"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        deptlist.map((item, index) => (
                                                            <MenuItem key={index} value={item.dept_code} >
                                                                {item.dept_name}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>

                                </Grid>
                                <Grid item lg={3}>

                                    <div align="left">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small' >
                                                <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Application List"
                                                    onChange={handleChange}
                                                >



                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item.appcode} >
                                                            {item.appname}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <br></br><br></br>
                                </Grid>
                                <Grid item lg={3}></Grid>
                            </Grid>


                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} column={5}>
                                <Grid item lg={2}></Grid>

                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                    </div>
                                </Grid>
                                <Grid item lg={1}></Grid>
                            </Grid>
                            <br></br>




                            <Grid >

                                <div align="center">
                                    <AdminView adminappdetails={appdetail} />
                                </div>
                                <br></br>
                            </Grid>
                        </CardBody>

                    </Card>
                </div>
            </>
        );
    }
    else if (page == '2') {
        return (
            <>
                <ToastContainer />
                <div style={{ paddingBottom: '600px' }}>
                    <Card>

                        <CardBody>


                            <Grid container spacing={3} column={2}>
                            <Grid item lg={3}></Grid>
                                <Grid item lg={3}>


                                    <div align="right">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Department List"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        deptlist.map((item, index) => (
                                                            <MenuItem key={index} value={item.dept_code} >
                                                                {item.dept_name}
                                                            </MenuItem>
                                                        ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>

                                </Grid>
                                <Grid item lg={3}>


                                    <div align="left">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Application List"
                                                    onChange={handleChange}
                                                >


                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item.appcode} >
                                                            {item.appname}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <br></br><br></br>
                                </Grid>
                                <Grid item lg={3}></Grid>


                            </Grid>

                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} column={5}>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                    </div>
                                </Grid>
                                <Grid item lg={1}></Grid>
                            </Grid>
                            <br></br>




                            <Grid>
                                <Grid item xs={12}>
                                    <div align="center">
                                        <AdminLk applklist={applk} />




                                    </div>

                                </Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }

    else if (page == '3') {
        return (
            <>
                <ToastContainer />
                <div style={{ paddingBottom: '600px' }}>
                    <Card>

                        <CardBody>


                            <Grid container spacing={3} column={2}>
                            <Grid item lg={3}></Grid>
                                <Grid item lg={3}>

                                    <div align="right">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Department List"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        deptlist.map((item, index) => (
                                                            <MenuItem key={index} value={item.dept_code} >
                                                                {item.dept_name}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>

                                </Grid>
                                <Grid item lg={3}>


                                    <div align="left">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl fullWidth style={{ minWidth: 170 }} size='small'>
                                                <InputLabel id="demo-simple-select-label" >Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Application List"
                                                    onChange={handleChange}
                                                >
                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item.appcode} >
                                                            {item.appname}
                                                        </MenuItem>
                                                    ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <br></br><br></br>
                                </Grid>
                                <Grid item lg={3}></Grid>
                            </Grid>

                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} column={5}>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}> Application View </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                    </div>
                                </Grid>
                                <Grid item lg={1}></Grid>
                            </Grid>
                            <br></br>



                            <Grid >
                                <Grid item xs={12}>
                                    <div align="center">
                                        <AdminAllowedOperations AdminOperations={opr} />
                                    </div>

                                </Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

