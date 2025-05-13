import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { saveAs } from 'file-saver';
import {useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ReactLoading from "react-loading";
import { useHistory } from 'react-router-dom';
import Baseurl from "../components/Baseurl";
import BaseLocal from '../components/BaseLocal';
import { Slide, toast, ToastContainer } from 'react-toastify';
import BaseurlAdmin from '../components/BaseurlAdmin';
import { useTheme } from '@material-ui/core/styles';

import Typography from '@mui/material/Typography';
import '../assets/styles/Resources.css'

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {


  const [flag, setFlag] = useState("Monthly");
  const [custstart, setCuststart] = useState();
  const [custlast, setCustlast] = useState();

  const handleflag = (e) => {
    setFlag(e.target.value)
  }

  const handlecuststart = (e) => {
    setCuststart(e.target.value)
  }

  const handlecustlast = (e) => {
    setCustlast(e.target.value)
  }

  let dateFormateFortMui = formatDate();
  function formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate()),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }



  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="Monthly"
        >

          <FormControlLabel value="Custom" onClick={handleflag} control={<Radio />} label="Custom" />
        </RadioGroup>
      </FormControl>

      {flag === "Custom" && <>
        <Grid container spacing={1}>
          <Grid item xs={13} sm={8} md={3}   >
            <TextField
              id="date"
              label="From"
              type="date"
              inputFormat="dd-MM-yyyy"
              // defaultValue={dateFormateFortMui}
              onChange={handlecuststart}
              size="small"
              sx={{ width: 190 }}
              style={{ height: '33px' }}
              inputProps={{
                max: dateFormateFortMui,
                // min: "1993-01-01"
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

          </Grid>
          <Grid item xs={13} sm={8} md={3}   >

            <TextField
              id="date"
              label="To"
              type="date"
              inputFormat="dd-MM-yyyy"
              // defaultValue={dateFormateFortMui}
              onChange={handlecustlast}
              size="small"
              sx={{ width: 190 }}
              inputProps={{
                max: dateFormateFortMui,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />


          </Grid>
          <Grid item xs={13} sm={8} md={3}  >
            <div >
              {/* {customcsvdataflag ? <> */}
              <Button size="normal" color="info" variant="outlined" >Submit</Button>

              {/* </>  */}
              {/* :
                                < >
                                    {spinner ?
                                        (
                                            <ReactLoading type="balls" color="#0000FF"
                                                height={10} width={40} />)

                                        :
                                        (
                                            <></>
                                            // <Button color="success" variant="contained" onClick={(e) => setCustomcsvdataflag(true)}>Download</Button>
                                        )
                                    }
                                </>
                            } */}

            </div>

          </Grid>

        </Grid>
      </>}


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



    </>

  );
}
