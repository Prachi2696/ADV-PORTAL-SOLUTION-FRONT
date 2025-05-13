import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { loginApiAction, setDeptidAction } from '../store/authslice';

const SingIn = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    console.log(id);//12345

    let history = useHistory();
    var CryptoJS = require("crypto-js");

    let dispatch = useDispatch();
    var decryptedData = ""
    useEffect(() => {
        // localStorage.setItem("LsdItped", id)

        // dispatch(loginApiAction());
        // localStorage.setItem('LsdItped', id);
        // dispatch(setDeptidAction(id));

        // var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
        // var key = CryptoJS.enc.Base64.parse(base64Key);
        // var plaintText = id;
        // var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7
        // });
        // console.log("encryptedData = " + encryptedData);
        // // this is the decrypted data as a sequence of bytes
        // var decryptedData = CryptoJS.AES.decrypt(localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"), key, {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7
        // });


        var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        history.push("/deptadmin")

    }, []);
    return (
        <div>SingIn</div>
    )
}

export default SingIn