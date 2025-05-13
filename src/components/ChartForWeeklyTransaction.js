import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Baseurl from "./Baseurl";
import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useTheme } from "@material-ui/core";
// import faker from "faker";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export function ChartForWeeklyTransaction() {
    const theme = useTheme();
    const [labels, setlabels] = useState([new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString()]);
    const [txnforTotal, setTotal] = useState(["10", "20", "30", "40", "50", "60", "70"]);
    const [spinner, setSpinner] = useState(false);
    var decryptedText = "adv19";
    const data = {
        labels,
        datasets: [
            {
                barThickness: 16,
                barPercentage: 0.5,
                label: "Last Week ",
                data: txnforTotal,
                backgroundColor: '#F4D03F',


            }
        ],
        borderWidth: 0.6,

    };
    const { appcode } = useParams();
     const options = {
        plugins: {
            legend: {
              labels: {
                color:  theme.typography.primary.paragraphbody
              }
            }
          },
        scales: {
            x: {
                ticks: {
                    color: theme.typography.primary.paragraphbody
                }
            },
            y: {
                ticks: {
                    color: theme.typography.primary.paragraphbody
                }
            }
        },
        responsive: true,
    
    };

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


        setSpinner(true)

        const txnforTotal = () => {
            fetch(Baseurl + "chartfordays", {
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
                    var label = [];
                    var data = [];
                    label = res.labels;
                    data = res.data;
                    //   for(var i of res) {
                    //       label.push(i.label);
                    //       data.push(i.y)
                    //   }
                    setTotal(data);
                    setlabels(label);
                    setSpinner(false)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        txnforTotal();
    }, [])
    return (
        <div style={{ backgroundColor: theme.tablecontainer.backgroundColor }}>
            {spinner ?
                <>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',

                    }}>
                        <center >
                            <ReactLoading type="spokes" color="#40c4ff" height={50} width={60} />
                        </center>
                    </div>
                </>
                :
                <Bar options={options} data={data} style={{ color: 'blue' }} />
            }
        </div>
    );
}
 