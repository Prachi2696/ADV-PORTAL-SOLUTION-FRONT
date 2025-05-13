import * as React from 'react';
// import { Card } from '@mui/material';
// import Card from '@material-tailwind/react/Card';
// import CardRow from '@material-tailwind/react/CardRow';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardStatus from '@material-tailwind/react/CardStatus';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import { Grid } from '@mui/material';
import { Typography, useTheme } from '@material-ui/core';
import TextField from '@mui/material/TextField';


export default function View({ appdetails }) {

    const theme = useTheme()
    const styles = theme => ({
        multilineColor: {
            color: 'red'
        }
    });

    return (
        <>

            <Grid container spacing={2} style={{ width: '100%', backgroundColor: theme.viewbgtable.backgroundColor }}>



                {/* <div > */}


                    <Grid item lg={12} style={{ backgroundColor: theme.viewbgtable.backgroundColor ,width: '100%'}}>
                        {/* <div style={{ backgroundColor: 'aliceblue' }}> */}

                        {/* <CardBody> */}
                            <div className="overflow-x-auto"  >
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead style={{ backgroundColor: theme.viewbg.backgroundColor }}>
                                        <tr>
                                            <th className="px-2 text-blue-1000 align-middle border-b border-solid border-white-0 py-3 text-lg whitespace-nowrap font-light text-center" style={{ color: theme.typography.primary.mainheading }}>
                                                {/* <Typography variant='h7'> <b>Email</b></Typography> */}
                                                <b>Email</b>
                                            </th>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-lg whitespace-nowrap font-light text-center" style={{ color: theme.typography.primary.mainheading }}>
                                                <b>Description</b>
                                            </th>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-lg whitespace-nowrap font-light text-center" style={{ color: theme.typography.primary.mainheading }}>
                                                <b>Application Name</b>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" style={{ color: theme.typography.primary.paragraphbody }}>
                                                {appdetails.email}
                                            </td>
                                            {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {appdetails.desc}
                                            </td> */}
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                <TextField
                                                    //  InputProps={{
                                                    //     classes: {
                                                    //         input: classes.multilineColor
                                                    //     }
                                                    // }}
                                                    // sx={{ input: { color: 'red' } }}
                                                    // color='success'
                                                    // style={{color:'red'}}
                                                    // sx={{
                                                    //     "& input": {
                                                    //         color: 'green',
                                                    //     }
                                                    // }}
                                                    id="standard-multiline-static"
                                                    // label="Multiline"
                                                    multiline
                                                    rows={4}
                                                    defaultValue={appdetails.desc}
                                                    variant="standard"
                                                    // InputProps={{
                                                    //     readOnly: true,
                                                    //   }}
                                                    sx={{
                                                        "& .MuiInputBase-root": {
                                                            color: theme.typography.primary.paragraphbody,
                                                            fontSize:'14px'
                                                        },
                                                       
                                                    }}
                                                // style={{color:theme.typography.primary.paragraphbody}}
                                                />
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" style={{ color: theme.typography.primary.paragraphbody }}>
                                                {appdetails.appname}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        {/* </CardBody> */}


                    </Grid>


                {/* </div> */}

            </Grid>






        </>
    );
}