import React, { useEffect, useState } from "react";
import Baseurl from "./Baseurl";
import ReactLoading from "react-loading";
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import BaseLocal from "./BaseLocal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useTheme } from '@material-ui/core/styles';
import ReactApexChart from "react-apexcharts";

// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ["getrefnum", "getuid", "activate", "struid", "deactivate"];
const d1 = [];

export function AppWiseoprTransactionBarchart() {

  const theme = useTheme();
  let history = useHistory();
  var decryptedText = "";
  let [username, setusername] = useState("");
  const [no, setNo] = useState([]);
  const [yes, setYes] = useState([]);
  const [txnforTotal, setTotal] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [series1, setSeries1] = useState([]);
  const [appNames, setAppNames] = useState([]);


  var options2 = {

    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      
      
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          // offsetX: -10,
          // offsetY: 0
          align: 'right'
        }
      }
    }],

    dataLabels: {
      
      formatter: (val) => {
      
        // val= val/1000000;
        // return val.toFixed(2) + 'mn'

        // val= val/100000;
        return val.toFixed(2) 
        // return val;

      }
    },


    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '50%',
        // barHeight: '70%',
        stacked:true,
        minHeight:20,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      type: 'text',

      // categories: [ 'NVSP', ' BIHAR-ERMS','NVSP', ' BIHAR-ERMS','ERONET', 'MAHARASHTRATCGC', ' MAHARASHTRA-ERMS	', 'NVSP 2.0', 'EONWT 2.0', 'MHA' ],
      categories:appNames
    },
    yaxis: {
      show: true,
      labels: {
        formatter: (val) => {
        //  return  (Math.round(val * 100) / 10000000).toFixed(2) +'cr'
        // val= val/1000000;
        //   return val.toFixed(2) + 'mn'

        // val= val/100000;
        return val.toFixed(2) 
        // return val;
        }
      },
      // min: 0,
      // max: 100000000,
      // tickAmount: 5,
    },
    // legend: {
    //   position: 'right',
    //   offsetY: 20
    // },

    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      opacity: 1
    }
  };



  var options1 = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Fiction Books Sales'
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  }

  const series = [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 100]
  }]



  const data = {
    labels,
    datasets: [
      {
        label: "Successfull",
        data: yes,
        backgroundColor: '#0DC818',
        // color:'red'
      },
      {
        label: "Un Successfull ",
        data: no,
        backgroundColor: '#E74C3C',

      },
      {
        label: "Total",
        data: txnforTotal,
        backgroundColor: '#F4D03F',
      }
    ],
    borderWidth: 0.1,
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme.typography.primary.paragraphbody
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
  const { appcode } = useParams();
  const appc = appcode;

  useEffect(() => {

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
    //     localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
    //     key,
    //     {
    //       mode: CryptoJS.mode.ECB,
    //       padding: CryptoJS.pad.Pkcs7,
    //     }
    //   );
    //   decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    // }
    // console.log("decryptedText = in billing " + decryptedText);
    // setusername(decryptedText)
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
    //       console.log(actualData)
    //       console.log(actualData.status)
    //       if (actualData.status === 400) {
    //         window.location.replace(BaseLocal + "Logout");

    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       if (err.message == "Failed to fetch") {

    //         history.push("/adv/LoginRequired")
    //       }

    //     });
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

    setSpinner(true)



    const appwisechart = () => {
      const appcodedata = [appc, "Total"]

      fetch(Baseurl + "appWiseBarChart",
        {
          method: "POST",
          body: decryptedText,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
        .then((data) => {
          const res = data.json();
          console.log(res)
          return res
        }).then((res) => {
          // console.log("resss", res)
          setSeries1(res.appWiseChartData)
          setAppNames(res.applicationnames)
          setSpinner(false)


        }).catch(e => {
          console.log("error", e)
        })
    }
    appwisechart();
  }, [])

  return (
    <>
      <div style={{ backgroundColor: theme.tablecontainer.backgroundColor }}>
        {spinner ?
          <>
            <div style={{
              marginTop: '200px',
              position: 'absolute', left: '60%', top: '40%',
              transform: 'translate(-50%, -50%)'
            }}>

              <center className='advloading' >
                <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={120} />
              </center>


            </div>

          </>
          :
          // <Bar options={options1} data={data} />
          <ReactApexChart options={options2} series={series1} type="bar" height={450}  width={900}/>


        }
      </div>
    </>
  );
}

