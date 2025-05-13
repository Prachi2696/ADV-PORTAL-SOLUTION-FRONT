import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from "react";
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
import { toast, ToastContainer, Slide } from 'react-toastify';
import BaseLocal from '../components/BaseLocal';
import { useTheme } from '@material-ui/core/styles';


const Report = () => {
  const theme = useTheme()
  let history = useHistory();
  var decryptedText = "";
  let [username, setusername] = useState("");


  useEffect(() => {

    if (localStorage.getItem("LsdItped") === null) {
      // Toastwarning("Please login first!")
      window.location.replace(BaseLocal + "Logout");
    }
    else {

    }

    /////////////////////////////get lc
    var CryptoJS = require("crypto-js");

    var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
    var key = CryptoJS.enc.Base64.parse(base64Key);
    var plaintText = "x";
    var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    if (localStorage.getItem("LsdItped")) {
      var decryptedData = CryptoJS.AES.decrypt(
        localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+")
        ,
        key,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    }
    console.log("decryptedText = in billing " + decryptedText);
    setusername(decryptedText)
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

  }, []);


  const handlecuststart = (e) => {
    // alert(e.target.value)
    setCuststart(e.target.value)
  }

  const handlecustlast = (e) => {
    // alert(e.target.value)
    setCustlast(e.target.value)
  }




  const [startDate, setStartDate] = useState(new Date());
  const [LastDate, setLastDate] = useState(new Date());

  const [custstart, setCuststart] = useState();
  const [custlast, setCustlast] = useState();

  let [MonthlyMonth, setMonthlyMonth] = useState();
  let [MonthlyYear, setMonthlyYear] = useState();
  let [quarterlyQuarter, setQuarterlyQuarter] = useState();
  let [quarterlyYear, setQuarterlyYear] = useState();
  let [yearlyYear, setyearlyYear] = useState();
  let [customfdate, setcustomfdate] = useState();
  let [customtdate, setcustomtdate] = useState();

  let [monthlycsvdata, setMonthlycsvdata] = useState([[]]);

  let [monthlypdfdataflag, setmonthlypdfdataflag] = useState(true);
  let [quaterlypdfdataflag, setquaterlypdfdataflag] = useState(true);
  let [yearlycsvdataflag, setYearlycsvdataflag] = useState(true);
  let [customcsvdataflag, setCustomcsvdataflag] = useState(true);

  const monthlyreportsummary = (event) => {

    if (MonthlyMonth == undefined) {
      toastAlertWarning("Please select month first!")
      return false;
    }

    if (MonthlyYear == undefined) {
      toastAlertWarning("Please select year first!")
      return false;
    }
    let monthNo = '';
    if (MonthlyMonth == "01") {
      monthNo = 0;
    }
    else if (MonthlyMonth == "02") {
      monthNo = 1;
    }
    else if (MonthlyMonth == "03") {
      monthNo = 2;
    }
    else if (MonthlyMonth == "04") {
      monthNo = 3;
    }
    else if (MonthlyMonth == "05") {
      monthNo = 4;
    }
    else if (MonthlyMonth == "06") {
      monthNo = 5;
    }
    else if (MonthlyMonth == "07") {
      monthNo = 6;
    }
    else if (MonthlyMonth == "08") {
      monthNo = 7;
    }
    else if (MonthlyMonth == "09") {
      monthNo = 8;
    }
    else if (MonthlyMonth == "10") {
      monthNo = 9;
    }
    else if (MonthlyMonth == "11") {
      monthNo = 10;
    }
    else if (MonthlyMonth == "12") {
      monthNo = 11;
    }


    if (new Date(MonthlyYear, monthNo, 1) > new Date()) {
      toastAlertWarning("Please select proper month and year")
      return false;
    }

    setSpinner(true);
    const datedata = ["month", MonthlyMonth, MonthlyYear, username];
    setmonthlypdfdataflag(false)
    const monthly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
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
          saveAs(file, "summary");
          setmonthlypdfdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setmonthlypdfdataflag(true)
        })
    }
    monthly();
    event.preventDefault();
  }

  const quaterlyreportsummary = (event) => {

    if (quarterlyQuarter == undefined) {
      toastAlertWarning("Please select quarter!")
      return false;
    }
    if (quarterlyYear == undefined) {
      toastAlertWarning("Please select year!")
      return false;
    }
    let quarter;

    if (quarterlyQuarter == "01") {
      quarter = 0;

    } else
      if (quarterlyQuarter == "04") {
        quarter = 1;
      }
      else if (quarterlyQuarter == "07") {
        quarter = 2;
      }
      else if (quarterlyQuarter == "10") {
        quarter = 3;
      }

    var firstDate = new Date(quarterlyYear, quarter * 3, 1);
    var endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
    var todays = new Date();
    if (endDate > todays) {
      toastAlertWarning("Please select proper quarter and year ")
      return false
    }
    setSpinner(true);
    const datedata = ["quarter", quarterlyQuarter, quarterlyYear, username];
    setquaterlypdfdataflag(false);
    const quarterly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
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
          saveAs(file, "summary");
          setquaterlypdfdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setquaterlypdfdataflag(true)
        })
    }
    quarterly();
    event.preventDefault();
  }



  const yealryreportsummary = (event) => {
    if (yearlyYear == undefined) {
      toastAlertWarning("Please select year!")
      return false;
    }
    setSpinner(true);
    setYearlycsvdataflag(false);
    const datedata = ["year", yearlyYear, "", username];
    const yearly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
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
          saveAs(file, "summary");
          setYearlycsvdataflag(true)
        })
        .catch(e => {
          // alert(e.message)
          toastAlertWarning(e.message)

          setYearlycsvdataflag(true)
        })
    }
    yearly();
    event.preventDefault();
  }


  const customreportsummarynew = (event) => {
    if (custlast == undefined) {
      toastAlertWarning("Please select date!")
      return false;
    }
    if (custstart == undefined) {
      toastAlertWarning("Please select date!")

      return false;
    }
    if (new Date(custstart) > new Date(custlast)) {
      toastAlertWarning("please select proper date!")
      return false
    }
    var todays = new Date();

    if (new Date(custlast) > todays) {
      toastAlertWarning("please select proper date!")
      return false
    }
    const datedata = ["custom", custstart, custlast, username];
    setSpinner(true);
    setCustomcsvdataflag(false);
    const custom = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
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
          saveAs(file, "summary");
          setCustomcsvdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setCustomcsvdataflag(true)
          console.log("error", e)
        })
    }
    custom();
    event.preventDefault();
  }



  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }
  const [spinner, setSpinner] = useState(false);

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(3), (val, index) => year - index);
  const [flag, setFlag] = useState("Monthly");
  const handleflag = (e) => {
    setFlag(e.target.value)
  }

  let dateFormateFortMui = formatDate();
  function formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
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

    // toast.warn(message, {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });

  }



  return (
    <div>
      <br></br>

      <ToastContainer />
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 'auto', paddingBottom: '500px' }}>

        <div style={{ fontSize: '30px', fontWeight: 'bold', color: theme.typography.primary.mainheading }}>Reports</div>
        <hr />
        <br />
        {/* ------------------------------------code for choice-------------------------------------------------- */}

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="Monthly"
          >
            <FormControlLabel size="small" value="Monthly" onClick={handleflag} control={<Radio />} label="Month" style={{ color: theme.typography.primary.paragraphbody }} />
            <FormControlLabel value="Quarterly" onClick={handleflag} control={<Radio />} label="Quarter" style={{ color: theme.typography.primary.paragraphbody }} />
            <FormControlLabel value="Yearly" onClick={handleflag} control={<Radio />} label="Year" style={{ color: theme.typography.primary.paragraphbody }} />
            <FormControlLabel value="Custom" onClick={handleflag} control={<Radio />} label="Custom" style={{ color: theme.typography.primary.paragraphbody }} />
          </RadioGroup>
        </FormControl>
        <br />
        <br />

        {flag === "Monthly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} className="flex flex-col lg:flex-row justify-between"  >
              <div>
                <FormControl style={{ minWidth: 190 }} size='small' >
                  <InputLabel id="demo-simple-select-label" style={{ color: theme.typography.primary.app }}>Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Month"
                    // value="01"
                    onChange={e => setMonthlyMonth(e.target.value)}
                    style={{  backgroundColor: theme.dropdownbg.backgroundColor, color: theme.typography.primary.paragraphbody }}
                  >
                    <MenuItem value="01" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>January</MenuItem>
                    <MenuItem value="02" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>February</MenuItem>
                    <MenuItem value="03" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>March</MenuItem>
                    <MenuItem value="04" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>April</MenuItem>
                    <MenuItem value="05" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>May</MenuItem>
                    <MenuItem value="06" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>June</MenuItem>
                    <MenuItem value="07" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>July</MenuItem>
                    <MenuItem value="08" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>August</MenuItem>
                    <MenuItem value="09" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>September</MenuItem>
                    <MenuItem value="10" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>October</MenuItem>
                    <MenuItem value="11" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>November</MenuItem>
                    <MenuItem value="12" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>December</MenuItem>
                  </Select>
                </FormControl>
              </div>




            </Grid>

            <Grid item xs={13} sm={8} md={3}  >
              <div style={{ display: 'inline-block' }}>
                <FormControl style={{ minWidth: 190 }}  size='small' >
                  <InputLabel id="demo-simple-select-label" style={{ color: theme.typography.primary.app }}>Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    // value={years[0]}
                    onChange={e => setMonthlyYear(e.target.value)}
                    style={{  backgroundColor: theme.dropdownbg.backgroundColor, color: theme.typography.primary.paragraphbody }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year} style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>{year}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>

              </div>


            </Grid>

            <Grid item xs={13} sm={8} md={3} >
              <div>
                {monthlypdfdataflag ?
                  <>
                    <Button size="normal" color="info" variant="outlined" onClick={monthlyreportsummary}>Download&nbsp;</Button>
                  </>
                  :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)
                      :
                      (
                        <></>
                      )
                    }
                  </>
                }</div>

            </Grid>
          </Grid>
        </>
        }

        {flag === "Quarterly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }} size='small' >
                  <InputLabel id="demo-simple-select-label" style={{ color: theme.typography.primary.app }}> Quarter</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Quarter"
                    // value="01"
                    onChange={e => setQuarterlyQuarter(e.target.value)}
                    style={{backgroundColor: theme.dropdownbg.backgroundColor, color: theme.typography.primary.paragraphbody }}

                  >
                    <MenuItem value="01" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>January-March</MenuItem>
                    <MenuItem value="04" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>April-June</MenuItem>
                    <MenuItem value="07" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>July-September</MenuItem>
                    <MenuItem value="10" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>October-December</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </Grid>
            <Grid item xs={13} sm={8} md={3}   >
              <div>
                <FormControl style={{ minWidth: 190 }}  size='small' >
                  <InputLabel id="demo-simple-select-label" style={{ color: theme.typography.primary.app }}>Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    // value={years[0]}
                    onChange={e => setQuarterlyYear(e.target.value)}
                    // onChange={handlerole_id}
                    style={{ backgroundColor: theme.dropdownbg.backgroundColor, color: theme.typography.primary.paragraphbody }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year} style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>{year}</MenuItem>

                      })
                    }
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={13} sm={8} md={3} >
              <div>
                {quaterlypdfdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={quaterlyreportsummary}>Download</Button> </> :
                  <>

                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                      )
                    }
                  </>
                }
              </div>

            </Grid>
          </Grid>
        </>}


        {flag === "Yearly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }}  size='small' >
                  <InputLabel
                    id="demo-simple-select-label" style={{ color: theme.typography.primary.app }}
                  >Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    // value={years[0]}
                    onChange={e => setyearlyYear(e.target.value)}
                    style={{backgroundColor: theme.dropdownbg.backgroundColor, color: theme.typography.primary.paragraphbody }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year} style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.dropdownbg.backgroundColor }}>{year}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>
              </div>
            </Grid>



            <Grid item xs={13} sm={8} md={3} >
              <div>
                {yearlycsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={yealryreportsummary}>Download</Button>

                </> :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setYearlycsvdataflag(true)}>Download</Button>
                      )
                    }

                  </>
                }

              </div>

            </Grid>
          </Grid>
        </>}



        {flag === "Custom" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3}   >
              <TextField
                id="date"
                label="From"
                type="date"
                inputFormat="dd-MM-yyyy"
                defaultValue={dateFormateFortMui}
                onChange={handlecuststart}
                size="small"
                sx={{
                  width: 190,
                  "& .MuiInputBase-root": {
                    color: theme.typography.primary.paragraphbody,
                    backgroundColor: theme.dropdownbg.backgroundColor

                  },
                }}
                style={{ height: '33px', }}
                inputProps={{
                  max: dateFormateFortMui,
                  // color:'red'
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
                defaultValue={dateFormateFortMui}
                onChange={handlecustlast}
                size="small"
                sx={{
                  width: 190,
                  "& .MuiInputBase-root": {
                    color: theme.typography.primary.paragraphbody,
                    backgroundColor: theme.dropdownbg.backgroundColor

                  },
                }}
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
                {customcsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={customreportsummarynew}>Download</Button>

                </> :
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
                }

              </div>

            </Grid>
          </Grid>
        </>}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Report
