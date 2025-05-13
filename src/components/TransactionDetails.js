import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import Baseurl from '../components/Baseurl';
import { useTheme } from '@material-ui/core/styles';
import { Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { typeApiActionforStatic } from "../store/authslice";
import { useState } from "react";



export default function TransactionDetails() {

    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type', "s")
        dispatch(typeApiActionforStatic());
    }, []);

    const theme = useTheme();
    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);

    function handleChangePage(event, newpage) {
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    const [deptwisetrans, setdeptwisetrans] = React.useState([])
    const [deptName, setDeptName] = useState();
    const [appwisetrans, setappwisetrans] = React.useState([])
    const [count, setCount] = useState('0');
    useEffect(() => {
        fetch(Baseurl + "depttransactions")
            .then((data) => {
                const res = data.json();

                return res
            }).then((res) => {
                //  setDeptList(res)
                // console.log(res.SIDBI.Udyam)
                // for (let entry in res) {
                //     console.log(entry);
                //   }  
                setdeptwisetrans(res)

                // console.log(deptlist)
                // alert(deptlist.dept_name)
                console.log("resss-----------------------------------------------------", res)
            }).catch(e => {
                console.log("error", e)
            })

        //////////////////////////////////////////////////////////




    }, []);

    // const handleClickdept = (e) => {
    //     console.log(deptName+"------------------------------")
    //     fetch(Baseurl + "deptservicewisetransaction",
    //     {
    //         method: "POST",
    //         body: e,
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "http://localhost:3000",

    //         },
    //     }
    // )
    //     .then(res => {
    //         console.log(res+"000000000000000");

    //         return res.json()
    //     })
    //     .then(
    //         res => {
    //             console.log(res+"000000000000000");
    //             setappwisetrans(res)
    //         }

    //     )
    //     .catch(e => {
    //         console.log("error", e)
    //     })

    // }

    function setdeptname(e) {
        setDeptName(e)
        fetch(Baseurl + "deptservicewisetransaction",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,


            {
                method: "POST",
                body: e,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        )
            .then(res => {
                console.log(res + "000000000000000");

                return res.json()
            })
            .then(
                res => {
                    console.log(res + "000000000000000");
                    setappwisetrans(res)
                }

            )
            .catch(e => {
                console.log("error", e)
            })
    }


    return (
        <>
            {/* <h1>{deptName}</h1> */}
            <Typography variant="h5" style={{ textAlign: "center", marginTop: '50px', color: theme.typography.primary.mainheading }}>
                <b> Transaction Details</b>
            </Typography>
            {/* <Paper style={{ width: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}> */}

            <Grid container spacing={0} style={{ paddingBottom: '200px' }}>
                <Grid item lg={3} xs={0} sm={0} md={2}>

                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={8}>
                    <TableContainer style={{ backgroundColor: theme.tablecontainer.backgroundColor }}>
                        <Table
                            aria-label="simple table">
                            <TableHead>
                                {/* <TableRow style={{ backgroundImage: 'linear-gradient(to right,  rgba(194, 87, 155, 0.1),rgba(66, 141, 203, 0.1))', width: '100%' }}> */}
                                <TableRow style={{ backgroundImage: theme.table.backgroundImage, }}>
                                    <TableCell align="center" style={{ fontSize: '19px' }}>
                                        <Typography variant="h6" style={{ color: theme.typography.primary.mainheading }}>
                                            Department Names
                                        </Typography>

                                    </TableCell>
                                    <TableCell align="center" style={{ fontSize: '19px' }} >
                                        <Typography variant="h6" style={{ color: theme.typography.primary.mainheading }}>
                                            Total Transactions
                                        </Typography>
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                            {/* <TableBody>
                            {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                                <TableRow
                                    key={row.name}

                                >

                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.dsa}
                                    </TableCell>
                                    <TableCell align="right">{row.maths}
                                    </TableCell>
                                    <TableCell align="right">{row.dbms}
                                    </TableCell>
                                    <TableCell align="right">{row.networking}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody> */}

                            {count == '0' ?

                                <TableBody>
                                    {Object.entries(deptwisetrans).slice(pg * rpg, pg * rpg + rpg).map(([deptvalue, valuess], index) => {
                                        return (
                                            // onClick={handleClickdept}
                                            <TableRow >
                                                <TableCell key={index} align="center" style={{ fontSize: '16px' }} onClick={(e) => (setDeptName(deptvalue), setCount(1), setdeptname(deptvalue))}>
                                                    <Typography variant="h7" style={{ color: theme.typography.primary.paragraphbody }}  > {deptvalue}</Typography>
                                                </TableCell>
                                                <TableCell key={index} align="center" style={{ fontSize: '16px' }} >
                                                    {/* {Object.keys(deptwisetrans).length} */}
                                                    <Typography variant="h7" style={{ color: theme.typography.primary.paragraphbody }} > {valuess}</Typography>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}

                                </TableBody>

                                :

                                <TableBody>
                                    {Object.entries(appwisetrans).slice(pg * rpg, pg * rpg + rpg).map(([key, value], index) => {
                                        return (
                                            <TableRow>
                                                <TableCell key={index} align="center" style={{ fontSize: '16px' }}>
                                                    <Typography variant="h7" style={{ color: theme.typography.primary.paragraphbody }}> {key}</Typography>
                                                </TableCell>
                                                <TableCell key={index} align="center" style={{ fontSize: '16px' }} >

                                                    <Typography variant="h7" style={{ color: theme.typography.primary.paragraphbody }} > {value}</Typography>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}

                                </TableBody>
                            }
                        </Table>
                    </TableContainer>


                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={Object.keys(deptwisetrans).length}
                        rowsPerPage={rpg}
                        page={pg}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        style={{ backgroundImage: theme.tableinnerbody.backgroundImage, color: theme.typography.primary.paragraphbody }}
                    />
                </Grid>
                <Grid item lg={3} xs={0} sm={0} md={2}>

                </Grid>
            </Grid>

            {/* </Paper> */}

            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br>

            {/* {Object.entries(deptlist).map(([key, value], index) => {
                                    return (
                                        <div key={index}>
                                        <h2>{value.appname}</h2>
                                        <h2>{value.transcount}</h2>
                                        <hr />
                                    );
        ))} */}




            {/* {Object.entries(deptwisetrans).map(([key, value], index) => {
                return (
                    <div key={index}>
                        <h2>{key}</h2>
                        <h2>{value}</h2>
                        <hr />
                    </div>
                );
            })} */}
        </>
    );
}
