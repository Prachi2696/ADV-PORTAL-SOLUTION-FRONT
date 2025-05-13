import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import BaseLocal from './BaseLocal';
import ReactLoading from "react-loading";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApiAction } from "../store/authslice";



function LoginRequired() {
  let history = useHistory();
  let { authStore } = useSelector((state) => state);
  let dispatch = useDispatch();




  // useEffect(() => {


  //   //   try {
  //   //     var bytes = CryptoJS.AES.decrypt(authStore.deptId, 'adv');
  //   //     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //   // } catch (error) {
  //   //   alert(error)
  //   // }
  //   // console.log(decryptedData + "_____username")


  //   /////////////////////////////get lc
  //   // var CryptoJS = require("crypto-js");
  //   // // alert(localStorage.getItem("hidden") +"-hidden")
  //   // var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
  //   // var key = CryptoJS.enc.Base64.parse(base64Key);
  //   // var plaintText = "x";
  //   // var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
  //   //   mode: CryptoJS.mode.ECB,
  //   //   padding: CryptoJS.pad.Pkcs7
  //   // });
  //   // var decryptedData = CryptoJS.AES.decrypt(localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"), key, {
  //   //   mode: CryptoJS.mode.ECB,
  //   //   padding: CryptoJS.pad.Pkcs7
  //   // });
  //   // var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
  //   // console.log("decryptedText = " + decryptedText);
  //   // /////////////////////////////get username

  //   // localStorage.clear()
  //   // window.location.replace(BaseLocal + "Logout/"+decryptedText );


  // //   fetch(BaseLocal + "userLogout",
  // //     {
  // //       method: "POST",
  // //       body: decryptedText,
  // //       headers: {
  // //         "Content-Type": "application/json",
  // //       }
  // //     }
  // //   )
  // //     .then((response) => {
  // //       alert(response.status)
  // //       if (response.status == 200) {
  // //         dispatch(logoutApiAction());
  // //         localStorage.clear();
  // //         window.location.replace(BaseLocal + "Logout");
  // //       }
  // //       if (response.status == 400) {
  // //         console.log("bad request ")
  // //       }
  // //     }).then((actualData) => {
  // //       localStorage.clear();
  // //     }
  // //     )
  // //     .catch((err) => {
  // //       console.log(err.message);
  // //       localStorage.clear();
  // //       window.location.replace(BaseLocal + "Logout");

  // //     });

  // }, []);


  // window.location.replace(BaseLocal + "userLogout");
  // const [spinner, setSpinner] = useState(false);

  return (


<>
</>
    // <div style={{ minHeight: '510px' }} >
    //   Logging Out ....
    // </div>
  );
}

export default LoginRequired;
