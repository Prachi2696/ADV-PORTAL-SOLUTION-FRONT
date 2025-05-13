import React from "react";
import { Card } from '@material-tailwind/react'
import { Box, Select, InputLabel, FormControl, MenuItem, Grid, Button, TextField } from '@mui/material';
import { useState, useEffect } from "react";
import Baseurl from "./Baseurl";
import BaseLocal from "./BaseLocal";

export default function KeyInfoUpdate() {

    const [key_info_idlist, setKey_info_idlist] = useState([])
    const [keyinfoid, setKeyinfoid] = useState();
    const [open, setOpen] = React.useState(false);
    const [keyinfodetails, setKeyinfodetails] = useState({})


    useEffect(() => {


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
                //   history.push("/LoginRequired")
            });
        const fetchData = () => {
            fetch(Baseurl + "keyid")
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



    const handlekeyinfoid = (e) => {

        setKeyinfoid(e.target.value);
        setOpen(true);




        // alert(e.target.value)

        fetch(Baseurl + `keyinfodetails/${e.target.value}`)
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
    return (
        <>
            <div style={{width:'500px',marginLeft:'auto',marginRight:'auto'}}>
                <Card>
                    <Grid container xs={1}>
                        <Grid item xs={6}>
                            <div align="center">

                                <Box sx={{ minWidth: 100 }}>
                                    <FormControl style={{ minWidth: 100 }} >
                                        <InputLabel id="demo-simple-select-label">Key Id</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={keyinfoid}
                                            label="Key Id"
                                            onChange={handlekeyinfoid}
                                            style={{ height: '40px' }}
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

                    </Grid>
                </Card>
            </div>
        </>
    )
}