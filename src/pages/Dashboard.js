import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import { useEffect, useState } from "react";
import { BiGroup, BiPoll } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { loginApiAction, setDeptidAction, typeActionDynamic, typeApiActionforDynamic } from "../store/authslice";
import Grid from "@mui/material/Grid";
import Baseurl from "../components/Baseurl";
import BaseLocal from "../components/BaseLocal";
import "../assets/styles/animation.css";
// import PortalData from "../..PortalData.json"

import { ChartForWeeklyTransaction } from "../components/ChartForWeeklyTransaction";
import Donutchart from "../components/Donutchart";
import { useTheme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import toastAlertWarning from "../components/Toastwarning";
import Toastwarning from "../components/Toastwarning";

export default function Dashboard() {
  const theme = useTheme();
  const [succesfullcount, setsuccesfullcount] = useState(7000000);
  const [unsuccesfullcount, setunsuccesfullcount] = useState(20000);
  const [totalac, setTotalac] = useState(1);
  let history = useHistory();
  // const[Baseurl,setBaseurl] = useState(process.env.REACT_APP_URL)
  // const[BaseLocal,setBaseLocal] = useState(process.env.REACT_APP_LOCAL)

  const [spinner, setSpinner] = useState(false);
  let dispatch = useDispatch();
  let { authStore } = useSelector((state) => state);
  var decryptedText = "adv19";


  useEffect(() => {
    window.scrollTo(0,0)
    const token = sessionStorage.getItem("token");
    
    // if (localStorage.getItem("LsdItped") === null) {
    //   // Toastwarning("Please login first!")
    //   window.location.replace(BaseLocal + "Logout");
    // }
    // else {

    // }

    /////////////////////////////get lc
    // var CryptoJS = require("crypto-js");

    // var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
    // var key = CryptoJS.enc.Base64.parse(base64Key);
    // var plaintText = "x";
    // var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
    //   mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.Pkcs7,
    // });

    // if (localStorage.getItem("LsdItped")) {
    //   var decryptedData = CryptoJS.AES.decrypt(
    //     localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
    //     key,
    //     {
    //       mode: CryptoJS.mode.ECB,
    //       padding: CryptoJS.pad.Pkcs7,
    //     }
    //   );
    //   decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    // }

    /////////////////////////////get username


    // -----------------------------------------code to check wheather user is logout or not----------------------------------------------

    // if (localStorage.getItem("LsdItped") === null) { }
    // else {

    //   fetch(BaseLocal + "isSessNull", {
    //     method: "POST",
    //     body: decryptedText,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       return response;
    //     })
    //     .then((response) => {
    //       return response;
    //     })
    //     .then((actualData) => {
    //       // console.log(actualData)
    //       // console.log(actualData.status)
    //       if (actualData.status === 400) {
    //         window.location.replace(BaseLocal + "Logout");

    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       if (err.message == "Failed to fetch") {

    //         history.push("/admin/LoginRequired")
    //       }

    //     });
    // }

    // -----------------------------------------code for dashboard Successful counts----------------------------------------------

    fetch(Baseurl + "homepagesuccesscount",
      {
        method: "POST",
        body: decryptedText,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((actualData) => {
        setsuccesfullcount(actualData)
      }
      )
      .catch((err) => {
        // alert("reponse from homepagesuccescount got error "+err.message)

        console.log(err.message);
      });

    // -----------------------------------------code for dashboard Unsuccessful counts----------------------------------------------

    fetch(Baseurl + "totalerrorcount",
      {
        method: "POST",
        body: decryptedText,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((actualData) => setunsuccesfullcount(actualData))
      .catch((err) => {
        console.log(err.message);
      });

    // -----------------------------------------code for dashboard Total Application counts counts----------------------------------------------

    fetch(Baseurl + "totalaccountdeptwise",
      {
        method: "POST",
        body: decryptedText,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((actualData) => {
        setTotalac(actualData)
      }
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  var total = succesfullcount + unsuccesfullcount;

  return (
    <>
      <div
        className="px-2"
        style={{
          // backgroundColor: "#f8f9fa ",
          opacity: "1",
          minHeight: "510px",
          marginBottom: "150px",
          backgroundColor:theme.tablecontainer.backgroundColor,
          // marginTop:'200px'
          
          
        }}
      >
        <br></br>

        <Grid container spacing={1}  style={{backgroundColor:theme.tablecontainer.backgroundColor}}>
          <Grid xs={12} sm={3} md={3} item>
            <Card className="hvr-sweep-to-right" >
              <div style={{ backgroundColor: theme.grid.backgroundColor }}>
                <CardRow >
                  <BiPoll size={"40px"} style={{ color: theme.typography.primary.light }} />
                  <br></br>
                  <div style={{ textAlign: "center", paddingLeft: "40px", color: theme.typography.primary.success }}>
                    Successful
                    <br></br>
                    <div style={{ color: theme.typography.secondary.light }}>{succesfullcount.toLocaleString()}</div>

                  </div>

                </CardRow>
              </div>
            </Card>
          </Grid>
          <Grid xs={12} sm={3} md={3} item>
            <Card className="hvr-sweep-to-right">
              <div style={{ backgroundColor: theme.grid.backgroundColor }}>
                <CardRow>
                  <BiPoll size={"40px"} style={{ color: theme.typography.primary.dark }} />
                  <div style={{ textAlign: "center", paddingLeft: "40px", color: theme.typography.primary.dark }}>
                    Unsuccessful
                    <br></br>
                    <div style={{ color: theme.typography.secondary.light }}> {unsuccesfullcount.toLocaleString()}</div>

                  </div>
                </CardRow>
              </div>
            </Card>
          </Grid>
          <Grid xs={12} sm={3} md={3} item>
            <Card className="hvr-sweep-to-right">
              <div style={{ backgroundColor: theme.grid.backgroundColor }}>
                <CardRow>
                  <BiPoll size={"40px"} style={{ color: theme.typography.primary.lightest }} />
                  <div style={{ textAlign: "center", paddingLeft: "40px", color: theme.typography.primary.lightest }}>
                    Total
                    <br></br>
                    <div style={{ color: theme.typography.secondary.light }}> {total.toLocaleString()}</div>

                  </div>
                </CardRow>
              </div>
            </Card>
          </Grid>
          <Grid xs={12} sm={3} md={3} item>
            <NavLink to="/deptadmin/applicationDetails">
              <Card>
                <div style={{ backgroundColor: theme.grid.backgroundColor }}>
                  <CardRow>
                    <BiGroup size={"40px"} />
                    <div style={{ textAlign: "center", paddingLeft: "40px", color: theme.typography.primary.app }}>
                      Applications
                      <br></br>
                      <div style={{ color: theme.typography.secondary.light }}>   {totalac.toLocaleString()}</div>
                   
                    </div>
                  </CardRow>
                </div>
              </Card>
            </NavLink>
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={1}  style={{backgroundColor:theme.tablecontainer.backgroundColor}}>
          <Grid xs={12} sm={6} item  style={{backgroundColor:theme.tablecontainer.backgroundColor}}>
            {/* <Card  style={{backgroundColor:theme.tablecontainer.backgroundColor}}> */}
            <Typography variant="h6" style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.tablecontainer.backgroundColor}}>Operation-Wise Transaction</Typography>

              {/* <h3  style={{backgroundColor:theme.tablecontainer.backgroundColor}}>Operation-Wise Transaction</h3> */}
              <hr  style={{backgroundColor:theme.tablecontainer.backgroundColor}} />

              <Donutchart />
            {/* </Card> */}
          </Grid>
          <Grid xs={12} sm={6} item >
            {/* <Card > */}
              <Typography variant="h6" style={{color:theme.typography.primary.paragraphbody,backgroundColor:theme.tablecontainer.backgroundColor}}>Weekly Transaction</Typography>
              {/* <h3>Weekly Transaction</h3> */}
              <hr />

              <ChartForWeeklyTransaction />
            {/* </Card> */}
          </Grid>
        </Grid>

        <br />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
