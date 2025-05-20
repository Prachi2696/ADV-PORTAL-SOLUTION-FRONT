import React, { useEffect, useState } from 'react';
import { MdGroups } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Baseurl from './Baseurl';
import ReactLoading from "react-loading";
import BaseLocal from './BaseLocal';
import { useTheme } from '@material-ui/core';
const ApplicationDetails = () => {
    const theme = useTheme();
    const [Applications, setApplications] = useState([]);
    let { authStore } = useSelector((state => state))
    const [spinner, setSpinner] = useState(false);
    let history = useHistory();
    var decryptedText = "adv19";

    useEffect(() => {

        // if (localStorage.getItem("LsdItped") === null) {
        //     // Toastwarning("Please login first!")
        //     window.location.replace(BaseLocal + "Logout");
        // }
        // else {

        // }



        // /////////////////////////////get lc
        // var CryptoJS = require("crypto-js");

        // var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
        // var key = CryptoJS.enc.Base64.parse(base64Key);
        // var plaintText = "x";
        // var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7,
        // });
        // if (localStorage.getItem("LsdItped")) {
        //     var decryptedData = CryptoJS.AES.decrypt(
        //         localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
        //         key,
        //         {
        //             mode: CryptoJS.mode.ECB,
        //             padding: CryptoJS.pad.Pkcs7,
        //         }
        //     );
        // }
        // decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        // /////////////////////////////get username

        // // -----------------------------------------code to check wheather user is logout or not----------------------------------------------
        // if (localStorage.getItem("LsdItped") === null) { }
        // else {

        //     fetch(BaseLocal + "isSessNull", {
        //         method: "POST",
        //         body: decryptedText,
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     })
        //         .then((response) => {
        //             return response;
        //         })
        //         .then((response) => {
        //             return response;
        //         })
        //         .then((actualData) => {
        //             console.log(actualData)
        //             console.log(actualData.status)
        //             if (actualData.status === 400) {
        //                 window.location.replace(BaseLocal + "Logout");

        //             }
        //         })
        //         .catch((err) => {
        //             console.log(err.message);
        //             if (err.message == "Failed to fetch") {

        //                 history.push("/deptadmin/LoginRequired")
        //             }

        //         });
        // }


        const token = sessionStorage.getItem("token");
        // if (token) {
        //     const payload = JSON.parse(atob(token.split('.')[1]));
        //     const exp = payload.exp;
        //     if (Date.now() >= exp * 1000) {
        //         sessionStorage.removeItem("token");
        //         history.push('/deptadmin/loginwithjwt');
        //     }
        // }



        const fetchData = () => {
            setSpinner(true)
            fetch(Baseurl + "appcodedetails", {
                method: "post",
                body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            })
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    setApplications(res)
                    setSpinner(false)

                }).catch(e => {
                    console.log("error", e)
                    setSpinner(true)
                })
        }
        fetchData();
    }, [])


    return (
        <>
            <div style={{ paddingBottom: '500px', backgroundColor: theme.tablecontainer.backgroundColor }} >
                {spinner ?
                    <>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',

                        }}>
                            <center >
                                <ReactLoading type="spokes" color='#40c4ff' height={50} width={60}/>
                            </center>
                        </div>
                    </>
                    :
                    <>
                        <div style={{ minHeight: '480px' }}>
                            <div className="flex flex-col mt-1"  >
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50" style={{ backgroundColor: theme.tablecontainer.backgroundColor, color: theme.typography.primary.mainheading }}>
                                                Application Names
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {
                                            Applications.map(e =>

                                                <tr key={e.auaCode}>
                                                    <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.tablecontainer.backgroundColor }}>
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 w-10 h-3">
                                                                <MdGroups size={20} />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-small leading-5 text-gray-900" style={{ color: theme.typography.primary.paragraphbody, backgroundColor: theme.tablecontainer.backgroundColor }}>
                                                                    <NavLink to={`/deptadmin/applicationinfo/${e.auaCode}/${e.appName}`}>{e.appName}</NavLink>
                                                                    {/* <NavLink to={`/adv/applicationinfo/${e.auaCode}`}>{e.appName}</NavLink> */}

                                                                    {/* <NavLink to={`/adv/appcharts/${e.auaCode}`}>{e.appName}</NavLink> */}


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        {/* <br />
                                    <br /> */}

                                    </tbody>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                </table>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default ApplicationDetails
