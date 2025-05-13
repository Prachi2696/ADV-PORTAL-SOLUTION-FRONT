import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';

import * as React from 'react';
// import Form from 'react-bootstrap/Form';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { AiOutlineFolderView } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md';
import { useHistory } from "react-router-dom";
// import Popup from './Popup';
// import DropdownRender from './Example';
// import Example from './Example';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import View from './View';

import { useEffect } from 'react';
import AllowedOperations from './AllowedOperations';
import LicenceKey from './LicenceKey';
//import * as React from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
// import {Menu,MenuHandler,MenuList,MenuItem} from "@material-tailwind/react/Menu";

//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

// import { Radio } from "@material-tailwind/react";
//import { useNavigate } from "react-router-dom";
import Baseurl from './Baseurl';
import { toast, ToastContainer } from 'react-toastify';
import BaseLocal from './BaseLocal';
import { useTheme } from '@material-ui/core/styles';



export default function AppDetails() {
    window.scrollTo(0,0)
    const theme = useTheme();

    const [page, setPage] = useState('0');

    const [alertflag, setAlertflag] = useState('1');
    const [alertflagapp, setAlertflagapp] = useState('1');
    var decryptedText = "";
    let [username, setusername] = useState("");

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const history = useHistory();

    // const nav=useNavigate();
    // const [flag, setflag] = useState('0');

    // const navigate=useNavigate();

    const [applk, setapplk] = useState({});
    let { authStore } = useSelector((state) => state);
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


    const handleManageLK = (e) => {

        if (alertflag == '1') {
            toastAlertWarning('Please select Department List first!')

            // window.location.reload(false);
        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        } else {
            // history.push('/lk')
            setPage(2)

            // fetch(Baseurl + `applk/${appname}`)
            //     .then((data) => {
            //         const res = data.json();
            //         console.log("resss", res)
            //         return res
            //     }).then((res) => {
            //         setapplk(res)
            //         console.log("resss", res)
            //     }).catch(e => {
            //         console.log("error", e)
            //     })


            //  setPage(0);


            fetch(Baseurl + "applk",
                // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

                {
                    method: "POST",
                    body: appname,
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
                        console.log(res);
                        setapplk(res)
                    }

                )
                .catch(e => {
                    console.log("error", e)
                })


        }
    }

    // localStorage.setItem("appcode",appname)
    const [opr, setopr] = useState({})

    const handleOpr = (e) => {

        if (alertflag == '1') {
            toastAlertWarning("Please select Department List first!")

            // window.location.reload(false);
        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        }
        else {
            setPage(3);

            // fetch(Baseurl + `opr/${appname}`)
            //     .then((data) => {
            //         const res = data.json();
            //         console.log("resss", res)
            //         return res
            //     }).then((res) => {
            //         setopr(res)
            //         console.log("resss", res)
            //     }).catch(e => {
            //         console.log("error", e)
            //     })



            fetch(Baseurl + "opr",
                // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

                {
                    method: "POST",
                    body: appname,
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
                        console.log(res);
                        setopr(res)
                    }

                )
                .catch(e => {
                    console.log("error", e)
                })
        }

        // setPage(0);
    }



    const handleView = (e) => {

        // alert("hello")

        // <Redirect to='/appdetails'  />

        // history.push('/appdetails')
        if (alertflag == '1') {
            toastAlertWarning('Please select Department List first!')

            // window.location.reload(false);
        }
        if (alertflagapp == '1') {
            toastAlertWarning('Please select Application List first!')
        }
        else {
            setPage(1);
        }
        // history.push('/view')
    }

    const [email, setemail] = useState("");
    const [desc, setdesc] = useState("");
    const [appn, setappn] = useState("");

    let demo = "pqr"

    // const handleUpdate = (e) => {

    //     console.log("update");
    //     console.log(email)
    //     console.log(desc)
    //     console.log(appn)

    //     // fetch('http://localhost:8082/appupdate/${appname}', {
    //     //     method: "POST",  
    //     //     // headers: {
    //     //     //   "Content-Type": "application/json",
    //     //     //   "Access-Control-Allow-Origin": "http://localhost:3000",
    //     //     // },
    //     //     body: JSON.stringify(data),


    //     //   }).then((res)=> res.json()).then((res)=>{
    //     //     setRoles(res);
    //     //   }).then(()=>{console.log("success")})
    //     //flag=1;


    //     fetch(`http://localhost:8082/appupdate/${appname}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           email: {email},
    //            desc: {desc},
    //            appname: {demo}
    //         }),
    //     })
    //     .then(response => console.log('Submitted successfully'))
    //     .catch(error => console.log('Form submit error', error))
    //         // .then((res) => {
    //         //     if (res.data) {
    //         //         alert("updated")
    //         //         console.log(res.data)
    //         //     } else {
    //         //         console.log(res)
    //         //     }
    //         // })
    //     // .then((response) => response.json())
    //     // //Then with the data from the response in JSON...
    //     // .then((data) => {
    //     //     console.log('Success:', data);
    //     //     alert("update successfully")
    //     // })
    //     // //Then with the error genereted...
    //     // .catch((error) => {

    //     //     console.error('Error:', error);
    //     // });


    // }

    // let handleUpdate = async (e) => {
    //     e.preventDefault();
    //     try {
    //       let res = await fetch(`http://localhost:8082/appupdate/${appname}`, {
    //         method: "POST",
    //         body: JSON.stringify({

    //           email: email,
    //           desc: desc,
    //           appname: appn,

    //         }),
    //       });
    //       let resJson = await res.json();
    //       if (res.status === 200) {
    //         setemail("");
    //         setdesc("");
    //         setappn("");
    //         alert("updated")
    //         //setMessage("User created successfully");
    //       } else {

    //         //setMessage("Some error occured");
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    // const handleUpdate = event => {
    //     event.preventDefault();

    //     const url = `http://localhost:8082/dept/appupdate/${appname}`
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, desc, appn })
    //     };
    //     fetch(url, requestOptions)
    //         .then(response => console.log('Submitted successfully' + response))
    //         .catch(error => console.log('Form submit error', error))
    // };





    const [appdetail, setappdetail] = useState({});
    const [appname, setappname] = React.useState();

    const handleChange = e => {
        // alert(e.target.value)
        //alert(e.target.value)
        // setPage('1')
        setAlertflagapp('0')
        setappname(e.target.value)
        //  localStorage.setItem("appcode",appname);
        // localStorage.setItem("appdetail",appdetail);


        // localStorage.setItem('appdetail', JSON.stringify(appdetail));

        //  history.push('/view')

        // fetch(Baseurl + `appdetail/${e.target.value}`)
        //     .then((data) => {
        //         const res = data.json();
        //         console.log("resss", res)
        //         return res
        //     }).then((res) => {
        //         setappdetail(res)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })



        fetch(Baseurl + "appdetail",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

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
                    console.log(res);
                    setappdetail(res)
                }

            )
            .catch(e => {
                console.log("error", e)
            })






        e.preventDefault();

        setPage(0);

        // <View appdetails={appdetail}/>

        //  window.location.reload(false);

        // localStorage.setItem("email",)

        //  history.push('/view')
    };



    // for dept dropdown



    const [deptlist, setDeptList] = useState([]);
    const [department, setDepartment] = useState({});

    // useEffect(() => {
    //     const fetchData = () => {
    //         fetch(Baseurl+"getDeptcodeandName/" + username)
    //             .then((data) => {
    //                 const res = data.json();

    //                 return res
    //             }).then((res) => {
    //                 //  setDeptList(res)
    //                 setDepartment(res)
    //                 // alert(deptlist.dept_name)
    //                 // console.log("resss-----------------------------------------------------", res)
    //             }).catch(e => {
    //                 console.log("error", e)
    //             })
    //     }
    //     fetchData();
    // }, [])

    // e.preventDefault()

    //     let demo = JSON.stringify({ email, desc, appname })
    //     console.log(demo)
    //     console.log(JSON.parse(demo))

    //     if (email != "" && desc != "" && appname != "") {
    //     fetch(Baseurl+ `appupdate/${appcode}`,
    //         // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

    //             {
    //                 method: "POST",
    //                 body: JSON.stringify({ email, desc, appname }),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Access-Control-Allow-Origin": "http://localhost:3000",

    //                 },

    //             }
    //         ).then(r => {
    //             alert("Application detail updated successfully")
    //             getappdetails()
    //             // window.location.reload(false);

    //         })

    //             .catch(r => { alert("Updation unsuccessfull") })


    //     }


    useEffect(() => {
       
        window.scrollTo(0,0)
        /////////////////////////////get lc
        var CryptoJS = require("crypto-js");

        var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
        var key = CryptoJS.enc.Base64.parse(base64Key);
        var plaintText = "x";
        var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        var decryptedData = CryptoJS.AES.decrypt(
            localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
            key,
            {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            }
        );
        decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        console.log("decryptedText = in billing " + decryptedText);
        setusername(decryptedText)
        console.log(username + "---username")
        /////////////////////////////get username

        // -----------------------------------------code to check wheather user is logout or not----------------------------------------------
        if (localStorage.getItem("LsdItped") === null) { }
        else {

            fetch(BaseLocal + "isSessNull", {
                method: "POST",
                body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    return response;
                })
                .then((response) => {
                    return response;
                })
                .then((actualData) => {
                    console.log(actualData)
                    console.log(actualData.status)
                    if (actualData.status === 400) {
                        window.location.replace(BaseLocal + "Logout");

                    }
                })
                .catch((err) => {
                    console.log(err.message);
                    if (err.message == "Failed to fetch") {

                        history.push("/adv/LoginRequired")
                    }

                });
        }




        fetch(Baseurl + "getDeptcodeandName",

            {
                method: "POST",
                body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        ).then(r => {
            return r.json();

        }).then(resp => {
            console.log(resp);
            setDepartment(resp);

        })
    }, [])



    const [dept, setDept] = useState("");

    const handleDept = (e) => {
        //e.preventDefault();
        setAlertflag('0')
        // setAlertflagapp('0')
        setDept(e.target.value);
        console.log(dept)
        // alert(e.target.value)

        // fetch("http://localhost:8082/deptlist")
        //     .then((data) => {
        //         const res = data.json();

        //         return res
        //     }).then((res) => {
        //         setDeptList(res)
        //         // alert(deptlist.dept_name)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })


        // fetch(Baseurl + `applist/${e.target.value}`)
        //     .then((data) => {
        //         const res = data.json();
        //         console.log("resss", res)

        //         return res
        //     }).then((res) => {
        //         setapplist(res)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })


        let demo = JSON.stringify(e.target.value)
        console.log(demo)
        console.log(JSON.parse(demo))
        fetch(Baseurl + "applist",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

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
                    console.log(res);
                    setapplist(res)
                }

            )
            .catch(e => {
                console.log("error", e)
            })
    }



    // const [deptcode, setdeptcode] = useState();
    //for application

    const [applist, setapplist] = useState([]);



    const handleappdetailchange = () => {

    }

    // const ApplistCall = () => {


    //   //  setDept(e.target.value);
    //     //  fetch("http://localhost:8082/getDeptDetails?deptName="+{}+"deptCode=+{dept}")
    //     fetch(`http://localhost:8082/applist/${dept}`)
    //         .then((data) => {
    //             const res = data.json();
    //             console.log("resss", res)

    //             return res
    //         }).then((res) => {
    //             setapplist(res)
    //             console.log("resss", res)
    //         }).catch(e => {
    //             console.log("error", e)
    //         })
    // }


    // useEffect(() => {

    //     ApplistCall();
    // }, [])





    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(appname);
    //   };
    if (page == '0') {
        return (
            <>
                <ToastContainer />

           {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
                <div style={{ paddingBottom: '400px', backgroundColor:theme.tablecontainer.backgroundColor }}>
                <br></br>
                
                    <div                                                                                                                                                                             >
                   
                        <CardBody >
                          
                            <Grid container spacing={3} column={2} >
                             
                                <Grid item lg={6} >
                                   
                                    <div align="right"style={{ position: 'relative'}}>
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl style={{ minWidth: 180 }}  size='small' >
                                                <InputLabel id="demo-simple-select-label" style={{color:theme.typography.primary.app}}>Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    value={department.dept_code} 
                                                    label="Department List"
                                                    onChange={handleDept}
                                                    style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody, }}
                                                >

                                                    <MenuItem value={department.dept_code}  style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}}> {department.dept_name} </MenuItem>
                                               
                                                </Select>

                                            </FormControl>

                                        </Box>
                                       
                                    </div>

                                </Grid>
                                <Grid item lg={6} style={{}}>

                                    <div align="left">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl style={{ minWidth: 180 }}  size='small' >
                                                <InputLabel id="demo-simple-select-label" style={{color:theme.typography.primary.app}}>Application List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={appname}
                                                    label="Application List"
                                                    onChange={handleChange}
                                                    style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody }}
                                                >


                                                    {applist.map((item, index) => (
                                                        <MenuItem key={index} value={item?.appcode}  style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}}>
                                                            {item?.appname}
                                                        </MenuItem>
                                                    ))
                                                    }






                                                </Select>

                                            </FormControl>
                                        </Box>
                                    </div>

                                </Grid>
                 
                            </Grid>
                       

                            <br></br>
                            <br></br>
                            <Grid container spacing={2} column={5}>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={3} >
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application Detail </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3}>
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>View Licence Key </Button>
                                    </div>
                                </Grid>
                                <Grid item lg={3} >
                                    <div align="center">
                                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                    </div>
                                </Grid>

                                <Grid item lg={2} ></Grid>
                            </Grid>
                            <br></br>

                        </CardBody>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    {/* </div> */}
                </div>
            </>
        );
    }
    else if (page == '1') {
        return (
            <> 
             <div style={{ paddingBottom: '400px' }}>
                  <br></br>
                <ToastContainer />

                <div style={{ paddingBottom: '400px',backgroundColor:theme.tablecontainer.backgroundColor }}>
                    {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}

                    <CardBody>

                        <Grid container spacing={3} column={2}>
                            <Grid item lg={6}>

                                <div align="right">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170,}} size='small' >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={department.dept_code}
                                                label="Department List"
                                                onChange={handleChange}
                                                style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody}}
                                            >
                                                <MenuItem value={department.dept_code} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}} > {department.dept_name} </MenuItem>

                                                {/* {
                                                deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item.dept_code} >
                                                        {item.dept_name}
                                                    </MenuItem>
                                                ))
                                            } */}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                            <Grid item lg={6}>

                                <div align="left">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170 }} size='small' >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Application List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={appname}
                                                label="Application List"
                                                onChange={handleChange}
                                                style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody}}
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
                                                    <MenuItem key={index} value={item.appcode} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}} >
                                                        {item.appname}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                        </Grid>
                        <br></br>

                        <Grid container spacing={2} column={5}>
                            <Grid item lg={2}></Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application Detail </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3}>
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>View Licence Key </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                </div>
                            </Grid>

                            <Grid item lg={2} ></Grid>
                        </Grid>

                        <br></br>
                        <br></br>
                        <br></br>



                        <Grid >
                           
                            <Grid container spacing={2}  >
                                <Grid item lg={12} xs={12} align="center" >
                                    <View appdetails={appdetail} />
                                </Grid>
                            </Grid>
                        


                           




                        </Grid>
                    </CardBody>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div></>
        );
    }
    else if (page == '2') {
        return (
            <> 
             <div style={{ paddingBottom: '400px' }}>
                <br></br>
                <ToastContainer />
                <div style={{ paddingBottom: '400px',backgroundColor:theme.tablecontainer.backgroundColor }}>
                {/* <Card> */}
                    {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}
                    <CardBody>


                        <Grid container spacing={3} column={2}>
                            <Grid item lg={6}>
                          
                                <div align="right">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170 }}  size='small' >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={department.dept_code}
                                                label="Department List"
                                                onChange={handleChange}
                                                style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody }}
                                            >
                                                <MenuItem value={department.dept_code} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}} > {department.dept_name} </MenuItem>
                                             

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                            <Grid item lg={6}>
                              

                                <div align="left">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170 }} >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Application List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={appname}
                                                label="Application List"
                                                onChange={handleChange}
                                                style={{ height: '43px',backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody  }}
                                            >
                                             


                                                {applist.map((item, index) => (
                                                    <MenuItem key={index} value={item.appcode} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}}>
                                                        {item.appname}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                        </Grid>
                        <br></br>

                        <Grid container spacing={2} column={5}>
                            <Grid item lg={2}></Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application Detail </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3}>
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>View Licence Key </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                </div>
                            </Grid>

                            <Grid item lg={2} ></Grid>
                        </Grid>

                        <br></br>
                        <br></br>
                        <br></br>






                     
                        <Grid>
                            <Grid item lg={12} align='center'>
                                {/* <div align="center"> */}
                                <LicenceKey applklist={applk} />

                          

                            </Grid>
                        </Grid>
                    </CardBody>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            </>
        );
    }

    else if (page == '3') {
        return (
            <> 
             <div style={{ paddingBottom: '400px' }}>
                <ToastContainer />
                <br></br>

                <div>
                 
                    <CardBody>


                        <Grid container spacing={3} column={2}>
                            <Grid item lg={6}>
                             

                                <div align="right">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170 }} size='small' >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Department List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={department.dept_code}
                                                label="Department List"
                                                onChange={handleChange}
                                                style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody  }}
                                            >
                                                <MenuItem value={department.dept_code} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}} > {department.dept_name} </MenuItem>
                                               

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                            <Grid item lg={6}>
                               
                                <div align="left">
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl style={{ minWidth: 170 }} size='small' >
                                            <InputLabel id="demo-simple-select-label"  style={{color:theme.typography.primary.app}}>Application List</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                value={appname}
                                                label="Application List"
                                                onChange={handleChange}
                                                style={{ backgroundColor:theme.dropdownbg.backgroundColor,color:theme.typography.primary.paragraphbody }}
                                            >
                                              


                                                {applist.map((item, index) => (
                                                    <MenuItem key={index} value={item.appcode} style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.dropdownbg.backgroundColor}}>
                                                        {item.appname}
                                                    </MenuItem>
                                                ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                            </Grid>
                        </Grid>
                        <br></br>

                        <Grid container spacing={2} column={5}>
                            <Grid item lg={2}></Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application Detail </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3}>
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>View Licence Key </Button>
                                </div>
                            </Grid>
                            <Grid item lg={3} >
                                <div align="center">
                                    <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                                </div>
                            </Grid>

                            <Grid item lg={2} ></Grid>
                        </Grid>

                        <br></br>
                        <br></br>
                        <br></br>






                        <Grid>
                            <Grid item lg={12} align='center'>
                                {/* <div align="center"> */}
                                <AllowedOperations Operations={opr} />

                               
                            </Grid>
                        </Grid>
                    </CardBody>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            </>

        );
    }
}

