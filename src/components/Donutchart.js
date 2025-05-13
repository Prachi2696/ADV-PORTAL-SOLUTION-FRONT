import { useTheme } from '@material-ui/core/styles';

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import Baseurl from "./Baseurl";
import './donutchart.css'


function Donutchart() {
    const theme = useTheme();
    const [contryname, setCountryname] = useState(['getuid', 'storeuid', 'activate', "deactivate"]);
    const [medal, setMedal] = useState([11888884, 22555, 3003, 44]);
    var decryptedText = "adv19";

    useEffect(() => {


        /////////////////////////////get lc
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

        //     decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
        // }
        // console.log("decryptedText = in dashboard " + decryptedText);
        /////////////////////////////get username


        const getdata = async () => {
            const countryname = [];
            const getmedal = [];
            const reqData = await fetch(Baseurl + "DonutChart", {
                method: "post",
                body: decryptedText,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            })
            const resData = await reqData.json();
            for (let i = 0; i < resData.length; i++) {
                countryname.push(resData[i].name);
                getmedal.push(parseInt(resData[i].y));
            }
            setCountryname(countryname);
            setMedal(getmedal);


        }
        getdata();
    }, []);

    return (
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3' style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
                <Chart
                    type="donut"
                    // width={350}
                    height={215}
                    series={medal}

                    options={{
                        labels: contryname,


                        title: {
                            // text:"Medal Country Name",
                            // align:"center",
                        },

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        value:{
                                            color:theme.typography.primary.paragraphbody,
                                        },

                                        total: {
                                            show: true,
                                            showAlways: true,
                                            fontSize: 20,
                                            color: '#f90000',
                                        },
                                        // style: {
                                        //     fontSize: '14px',
                                        //     fontFamily: 'Roboto, sans-serif',
                                        //     fontWeight: 400,
                                        //     colors: ['#fff', '#fff', '#fff', '#fff'], // set the color of text to white
                                        //   },


                                    }
                                }
                            }
                        },
                        legend: {
                            show: true,
                            fontSize: '14px',
                            labels: {
                                colors: theme.typography.primary.paragraphbody,
                            }
                        },
                        dataLabels: {
                            enabled: true,
                        },

                    }}
                // apply CSS class to label text
                //   className="donut-chart"
                />

            </div>
        </React.Fragment>
    );
}
export default Donutchart;


// options={{
//     labels: contryname,
//     title: {
//       // text:"Medal Country Name",
//       // align:"center",
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           labels: {
//             show: true,
//             total: {
//               show: true,
//               showAlways: true,
//               fontSize: 20,
//               color: '#f90000',
//             },
//             style: {
//               colors: ['#000', '#111', '#222', '#333'], // set the color of country names
//             },
//           },
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//     }
//   }}
