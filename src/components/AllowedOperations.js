import Card from '@material-tailwind/react/Card';
import { useTheme } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import React from "react";
import { FcCancel, FcCheckmark } from 'react-icons/fc';

export default function AllowedOperations({ Operations }) {
    const theme=useTheme()
    return (
        <>
         <Grid container spacing={2}>
            {/* <div style={{ width: '675px', backgroundColor: 'aliceblue' }}> */}
                {/* <Card> */}
                    
                    {/* <div style={{backgroundColor: 'aliceblue' }}> */}

                    {/* <Grid container spacing={1} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}> */}
                    <Grid container spacing={1}  style={{backgroundColor: theme.viewbg.backgroundColor }}>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody,border:'4px dotted skyblue '}}>Store UID
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Struid == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody ,border:'4px dotted skyblue '}}>Get Reference Number
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody ,border:'4px dotted skyblue '}}>Get UID
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Getuid == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody ,border:'4px dotted skyblue '}}>Activate
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Activate == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody,border:'4px dotted skyblue '}}>Deactivate
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Deactivate == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'',color: theme.typography.primary.paragraphbody ,border:'4px dotted skyblue '}}>Duplicate Check
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_dupcheck == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <br></br>
                       
                    </Grid>
                    {/* </div> */}
                {/* </Card> */}
            {/* </div> */}
            </Grid>
        </>

    );
}