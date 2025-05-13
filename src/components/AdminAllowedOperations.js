import Card from '@material-tailwind/react/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useEffect, useRef, useState } from "react";
import { FcCancel, FcCheckmark } from 'react-icons/fc';
import Baseurl from "./Baseurl";
import BaseurlAdmin from './BaseurlAdmin';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AllowedAdminOperations({ AdminOperations }) {

    const appcode = localStorage.getItem("appcode")

    // const demo = AdminOperations.is_Struid;

    const [is_Struid, setis_Struid] = useState({ "is_Struid": AdminOperations.is_Struid })
    const [is_Getrefnum, setis_Getrefnum] = useState({ "is_Getrefnum": AdminOperations.is_Getrefnum })
    const [is_Getuid, setis_Getuid] = useState({ "is_Getuid": AdminOperations.is_Getuid })
    const [is_Activate, setis_Activate] = useState({ "is_Activate": AdminOperations.is_Activate })
    const [is_Deactivate, setis_Deactivate] = useState({ "is_Deactivate": AdminOperations.is_Deactivate })
    const [is_dupcheck, setis_dupcheck] = useState({ "is_dupcheck": AdminOperations.is_dupcheck })
    const [app_is_active, setapp_is_active] = useState({ "app_is_active": AdminOperations.app_is_active });


    const [opr, setopr] = useState({})


    const [flag, setFlag] = useState("0");

    useEffect(() => {

        console.log(AdminOperations.is_Struid + "-----AdminOperations.is_Struid")
       
    }, [])

    function getReloadData() {

        fetch("BaseurlAdmin" + `opr/${appcode}`)
            .then((data) => {
                const res = data.json();
                console.log("resss", res)
                return res
            }).then((res) => {
                // setopr(res)
                AdminOperations.is_Struid = res.is_Struid
                AdminOperations.is_Getrefnum = res.is_Getrefnum
                AdminOperations.is_Getuid = res.is_Getuid
                AdminOperations.is_Activate = res.is_Activate
                AdminOperations.is_Deactivate = res.is_Deactivate
                AdminOperations.app_is_active = res.app_is_active
                // AdminOperations = res;
                console.log("in getreload" + JSON.stringify(AdminOperations))
                setFlag(0)
            }).catch(e => {
                console.log("error", e)
            })

    }

    // const app_is_activeRef=useRef({"app_is_active":AdminOperations.app_is_active });
    const app_is_activeRef = useRef(AdminOperations.app_is_active);
    const handleAppStatusChange = (event, newStatus) => {
        // alert(newStatus)
        setapp_is_active(newStatus);

        app_is_activeRef.current = newStatus;
        // alert( app_is_activeRef.current)
    };



    // const page = localStorage.getItem("page");

    const handleAppActivate = (e) => {

        setFlag(1);
        // setis_Struid("true")
        app_is_active.app_is_active = true;
        // setis_Struid(is_Struid=true)
        let demo = JSON.stringify(app_is_active)
        console.log(demo)
        console.log(JSON.parse(demo))
        console.log("======" + AdminOperations.app_is_active)
        // alert(is_Struid.is_Struid)

        fetch(BaseurlAdmin + `appisactive/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();

        })
            .catch(r => { alert("Updation unsuccessfull") })


    }


    const handleStruidActivate = (e) => {

        setFlag(1);
        // setis_Struid("true")
        is_Struid.is_Struid = true;
        // setis_Struid(is_Struid=true)
        let demo = JSON.stringify(is_Struid)
        console.log(demo)
        console.log(JSON.parse(demo))
        console.log("======" + AdminOperations.is_Struid)
        // alert(is_Struid.is_Struid)

        fetch(BaseurlAdmin + `struid/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();

        })
            .catch(r => { alert("Updation unsuccessfull") })


    }

    const handleAppDeactivate = (e) => {
        setFlag(1);
        app_is_active.app_is_active = false;
        let demo = JSON.stringify(app_is_active)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `appisactive/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();

        })
            .catch(r => { alert("Updation unsuccessfull") })



    }

    const handleStruidDeactivate = (e) => {
        setFlag(1);
        is_Struid.is_Struid = false;
        let demo = JSON.stringify(is_Struid)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `struid/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();

        })
            .catch(r => { alert("Updation unsuccessfull") })



    }







    const handleGetRefActivate = (e) => {

        setFlag(1);
        is_Getrefnum.is_Getrefnum = true;
        let demo = JSON.stringify(is_Getrefnum)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `refnum/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();


        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleGetRefDeactivate = (e) => {

        setFlag(1);
        is_Getrefnum.is_Getrefnum = false;
        let demo = JSON.stringify(is_Getrefnum)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `refnum/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            // window.location.reload(false);
            getReloadData();


        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleGetUidActivate = (e) => {

        setFlag(1);
        is_Getuid.is_Getuid = true;
        let demo = JSON.stringify(is_Getuid)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `uid/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleGetUidDeactivate = (e) => {

        setFlag(1);
        is_Getuid.is_Getuid = false;
        let demo = JSON.stringify(is_Getuid)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `uid/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })
    }

    const handleActActivate = (e) => {

        setFlag(1);
        is_Activate.is_Activate = true;
        let demo = JSON.stringify(is_Activate)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `act/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")

            getReloadData();
        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleActDeactivate = (e) => {

        setFlag(1);
        is_Activate.is_Activate = false;
        let demo = JSON.stringify(is_Activate)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `act/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleDeacActivate = (e) => {

        setFlag(1);
        is_Deactivate.is_Deactivate = true;
        let demo = JSON.stringify(is_Deactivate)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `deact/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleDeacDeactivate = (e) => {
        setFlag(1);
        is_Deactivate.is_Deactivate = false;
        let demo = JSON.stringify(is_Deactivate)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `deact/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }


    const handleDupActivate = () => {
        setFlag(1);
        is_dupcheck.is_dupcheck = true;
        let demo = JSON.stringify(is_dupcheck)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `dupcheck/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    const handleDupDeactivate = () => {
        setFlag(1);
        is_dupcheck.is_dupcheck = false;
        let demo = JSON.stringify(is_dupcheck)
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(BaseurlAdmin + `dupcheck/${appcode}`, {
            method: "POST",
            body: demo,
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            alert("Update Successfully")
            getReloadData();
            // window.location.reload(false);

        })
            .catch(r => { alert("Updation unsuccessfull") })

    }

    if (flag == '0') {
        return (
            <>
                {/* <div align="center" style={{ width: '600px' }}> */}
                {/* <div > */}
                {/* <Card> */}
                {/* <div style={{ width: '600px', backgroundColor: 'aliceblue' }}> */}
                {/* <CardBody> */}
                {/* <div style={{ width: '600px', backgroundColor: 'aliceblue' }}> */}

                <div style={{ width: '600px', backgroundColor: 'aliceblue' }}>
                    <Card>
                        <br></br>
                        <div style={{ backgroundColor: 'aliceblue' }}>
                            <Grid container spacing={2} >

                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>
                                    <div align="left"><b>Application Active</b></div>
                                </Grid>
                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }} >
                                    <div align="center">
                                        {
                                            // AdminOperations.map((appl) => (
                                            app_is_active.app_is_active == true ? <FcCheckmark /> : <FcCancel />
                                            // ))
                                        }
                                    </div>
                                </Grid>


                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleAppActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleAppDeactivate}>
                                        Deactivate
                                    </Button>
                                </Grid>
                                {/* <Grid item xs={3}>
                                    <div align="center">
                                        {
                                            app_is_activeRef.current == true ? <FcCheckmark /> : <FcCancel />
                                        }
                                    </div>
                                </Grid> */}
                                {/* <Grid item xs={3}>
                                    <ToggleButtonGroup
                                        value={app_is_active}
                                        exclusive
                                        onChange={handleAppStatusChange}
                                        // style={{ margin: '16px 8px' }}
                                        size='small'
                                    >
                                        <ToggleButton value="true" color="primary">
                                            Activate
                                        </ToggleButton>
                                        <ToggleButton value="false" color="primary">
                                            Deactivate
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid> */}
                                {/* <Grid item xs={3}>
                                </Grid> */}

                                <Grid item xs={3}>
                                    <div align="left"><b>Store UID</b></div>
                                </Grid>

                                <Grid item xs={3} >
                                    <div align="center">
                                        {
                                            // AdminOperations.map((appl) => (
                                            is_Struid.is_Struid == true ? <FcCheckmark /> : <FcCancel />
                                            // ))
                                        }
                                    </div>
                                </Grid>


                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleStruidActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleStruidDeactivate}>
                                        Deactivate
                                    </Button>
                                </Grid>



                                <Grid item xs={3}>
                                    <div align="left" ><b>Get Reference Number</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Getrefnum.is_Getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }

                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleGetRefActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}

                                        onClick={handleGetRefDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left" ><b>Get UID</b></div>
                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Getuid.is_Getuid == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleGetUidActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleGetUidDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left"><b>Application Activate</b></div>
                                </Grid>
                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Activate.is_Activate == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleActActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleActDeactivate}>
                                        Deactivate
                                    </Button>

                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left" ><b>Application Deactivate</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Deactivate.is_Deactivate == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleDeacActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleDeacDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>


                                <Grid item xs={3}>
                                    <div align="left" ><b>Duplicate Check</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_dupcheck.is_dupcheck == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleDupActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleDupDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>


                            </Grid>
                            <br></br>
                        </div>
                    </Card>
                </div>
                {/* <br></br> */}
                {/* </div> */}
                {/* </CardBody> */}

                {/* </Card> */}
                {/* </div> */}
            </>
        );
    }
    else if (flag == '1') {
        return (
            <>
                {/* <div align="center" style={{ width: '600px' }}> */}
                {/* <div > */}
                {/* <Card> */}
                {/* <div style={{ width: '600px', backgroundColor: 'aliceblue' }}> */}
                {/* <CardBody> */}
                {/* <div style={{ width: '600px', backgroundColor: 'aliceblue' }}> */}

                <div style={{ width: '600px', backgroundColor: 'aliceblue' }}>
                    <Card>
                        <br></br>
                        <div style={{ backgroundColor: 'aliceblue' }}>



                            <Grid container spacing={2} >

                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>
                                    <div align="left"><b>Application Active</b></div>
                                </Grid>
                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }} >
                                    <div align="center">
                                        {
                                            // AdminOperations.map((appl) => (
                                            app_is_active.app_is_active == true ? <FcCheckmark /> : <FcCancel />
                                            // ))
                                        }
                                    </div>
                                </Grid>


                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleAppActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3} style={{ backgroundColor: '#ffcdd2' }}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleAppDeactivate}>
                                        Deactivate
                                    </Button>
                                </Grid>










                                <Grid item xs={3}>
                                    <div align="left" ><b>Store UID</b></div>
                                </Grid>

                                <Grid item xs={3} >
                                    <div align="center">
                                        {
                                            // AdminOperations.map((appl) => (
                                            is_Struid.is_Struid == true ? <FcCheckmark /> : <FcCancel />
                                            // ))
                                        }
                                    </div>
                                </Grid>


                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleStruidActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleStruidDeactivate}>
                                        Deactivate
                                    </Button>
                                </Grid>



                                <Grid item xs={3}>
                                    <div align="left" ><b>Get Reference Number</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Getrefnum.is_Getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }

                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleGetRefActivate}>
                                        Activate
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}

                                        onClick={handleGetRefDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left" ><b>Get UID</b></div>
                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Getuid.is_Getuid == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleGetUidActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleGetUidDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left" ><b>Application Activate</b></div>
                                </Grid>
                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Activate.is_Activate == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleActActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleActDeactivate}>
                                        Deactivate
                                    </Button>

                                </Grid>
                                <Grid item xs={3}>
                                    <div align="left" ><b>Application Deactivate</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_Deactivate.is_Deactivate == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleDeacActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleDeacDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>


                                <Grid item xs={3}>
                                    <div align="left" ><b>Duplicate Check</b></div>

                                </Grid>

                                <Grid item xs={3}>
                                    {
                                        // AdminOperations.map((appl) => (
                                        is_dupcheck.is_dupcheck == true ? <FcCheckmark /> : <FcCancel />
                                        // ))
                                    }
                                </Grid>
                                <Grid item xs={3}>

                                    <Button variant="contained" color="success"
                                        style={{
                                            maxWidth: "80px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: " #0252029e"
                                        }}
                                        onClick={handleDupActivate}>
                                        Activate
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button variant="contained" color="error"
                                        style={{
                                            maxWidth: "90px",
                                            maxHeight: "40px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            fontSize: "12px",
                                            backgroundColor: "#700000a3"
                                        }}
                                        onClick={handleDupDeactivate}>
                                        Deactivate
                                    </Button>


                                </Grid>


                            </Grid>
                            <br></br>
                        </div>
                    </Card>
                </div>
                {/* <br></br> */}
                {/* </div> */}
                {/* </CardBody> */}

                {/* </Card> */}
                {/* </div> */}
            </>
        );
    }
}