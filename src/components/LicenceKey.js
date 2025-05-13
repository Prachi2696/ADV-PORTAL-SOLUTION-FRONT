// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
// import { Form } from 'react-bootstrap';
import { Label } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Box, TableCell, TableRow, TableBody, Paper, Table, TableContainer, TableHead, Grid } from '@mui/material';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { positions } from '@mui/system';
import { useTheme } from '@material-ui/core';
//  import { MaskedText } from "react-native-mask-text";
// import InputMask from "react-input-mask";


export default function LicenceKey({ applklist }) {

    const theme=useTheme()
    // const history = useHistory();

    // const [appname, setappname] = useState();
    // useEffect(() => {
    //     setappname(localStorage.getItem('app_name'))
    // })


    // const handleBack=()=>{

    //     history.push('/')
    // }

    const lkmask = applklist.lk;



    // const maskify = (lkmasked) => {
    //     return lkmasked.split('').map((letter, idx) => idx < lkmasked.length - 4 ? '#' : letter).join('');
    // }

    return (

        <>
            <Grid container spacing={2} style={{ width: '100%', backgroundColor: theme.viewbgtable.backgroundColor }}> 
             


                    {/* <div style={{ width: '675px', backgroundColor: 'aliceblue' }}> */}
                        {/* <Card > */}

                            {/* <CardHeader color="blue" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Page Visits</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            See More
                        </Button>
                    </div>
                </CardHeader> */}
                            {/* <div style={{ backgroundColor: 'aliceblue' }}> */}
                            <Grid item lg={12} xs={12} align="center"  style={{ backgroundColor: theme.viewbgtable.backgroundColor }}>
                                {/* <CardBody> */}
                                    <div className="overflow-x-auto"  >
                                        <table className="items-center w-full bg-transparent border-collapse">
                                            <thead style={{ backgroundColor: theme.viewbg.backgroundColor }}>
                                                <tr>
                                                    <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center"  style={{ color: theme.typography.primary.mainheading }}>
                                                        <b>Licence Key</b>
                                                    </th>
                                                    <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center"  style={{ color: theme.typography.primary.mainheading }}>
                                                        <b>Licence Key Expiry Date</b>
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" style={{ color: theme.typography.primary.paragraphbody }}>
                                                        {applklist.lk}




                                                    </th>
                                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center" style={{ color: theme.typography.primary.paragraphbody }}>
                                                        {applklist.lkexpiry}
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                {/* </CardBody> */}
                                </Grid>
                            {/* </div> */}


                        {/* </Card> */}

                    {/* </div> */}
                </Grid>
           
        </>

      
    );
}
