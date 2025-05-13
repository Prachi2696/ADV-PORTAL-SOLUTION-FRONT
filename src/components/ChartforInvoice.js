
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState, useRef } from 'react';
import BaseurlAdmin from './BaseurlAdmin';
import { kdf } from 'crypto-js';
import { Grid, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';

import Baseurl from './Baseurl';


import * as echarts from 'echarts';

const ChartforInvoice5 = () => {

  const isMobile = window.innerWidth <= 768;
  const [invoicedata, setInvoicedata] = useState([]);

  const [invoiceno, setInvoiceno] = useState([])
  const invoicenoRef = useRef([]);
  const invoicedateRef = useRef([]);
  const receivedamountRef = useRef([]);
  const paymentstatusRef = useRef([]);
  const utrnoRef = useRef([]);


  const [deptlist, setDeptList] = useState([])
  const [deptcode, setDept] = useState("dept0005")
  const [year, setyear] = useState("")
  var dept_code = ""
  var yearselected = ""
  const handleDept = (e) => {
    //    var year1=e.target.value;
    setDept(e.target.value)
    // setyear(year1)
    console.log(e.target.value + "----deptcode")
    dept_code = e.target.value

    // window.location.reload();
  }
  const handleYear = (e) => {
    console.log(dept_code + "-----dept_code")
    setyear(e.target.value)
    yearselected = e.target.value
    console.log(e.target.value + "----year")

    fetch(BaseurlAdmin + `invoicefordept/${deptcode}/${yearselected}`)
      .then(response => response.json())
      .then(data => {
        setInvoicedata(data)
        const invoice_no = data.map(element => element.invoice_no)
        invoicenoRef.current = invoice_no

        const invoice_date = data.map(element => element.invoice_date)
        invoicedateRef.current = invoice_date

        console.log(invoice_date + "---invoice_date")


        const received_amount = data.map(element => element.received_amount)
        receivedamountRef.current = received_amount

        const payment_status = data.map(element => element.payment_status)
        paymentstatusRef.current = payment_status

        const utrnumber = data.map(element => element.utr_no)
        utrnoRef.current = utrnumber
        console.log(utrnoRef.current + "---utrnoRef.current")

        const year = data.map(element => element.year);
        const uniqueyear = Array.from(new Set(year));
        // Update x-axis categories based on the years
        setChartData(prevState => ({
          ...prevState,
          options: {
            ...prevState.options,
            xaxis: {
              categories: uniqueyear,
            },
          },
        }));

        const total_amnt = data.map(element => element.total_amount)
        // console.log(total_amnt + "----total_amnt")

        const q1 = data.map(element => element.Q1);
        const q2 = data.map(element => element.Q2);
        const q3 = data.map(element => element.Q3);
        const q4 = data.map(element => element.Q4);

        if (q1[0] == '01-03') {
          var total_amnt_first_value = JSON.parse(total_amnt[0]);

        }
        else {
          var total_amnt_first_value = null;
        }
        if (q2[1] == '04-06') {

          var total_amnt_second_value = JSON.parse(total_amnt[1]);

        }
        else {
          var total_amnt_second_value = null;
        }
        if (q3[2] == '07-09') {

          var total_amnt_third_value = JSON.parse(total_amnt[2]);

        }
        else {
          var total_amnt_third_value = null;
        }
        if (q4[3] == '10-12') {

          var total_amnt_fourth_value = JSON.parse(total_amnt[3]);
        }
        else {
          var total_amnt_fourth_value = null;
        }



        // const q1 = data.map(element => element.Q1);
        // console.log(q1 + "-----q1")
        if (q1[0] == '01-03' && total_amnt[0] != null) {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q1') {
                return {
                  ...serie,
                  data: [total_amnt_first_value],
                };
              }
              return serie;
            }),
          }));
        } else {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q1') {
                return {
                  ...serie,
                  data: [],
                };
              }
              return serie;
            }),
          }));
          // console.error("Q1 data is not an array:", q1);
        }



        // console.log(q2 + "----q2")
        if (q2[1] == '04-06' && total_amnt[1] != null) {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q2') {
                return {
                  ...serie,
                  data: [total_amnt_second_value],
                };
              }
              return serie;
            }),
          }));
        } else {
          // console.error("Q2 data is not an array:", q1);
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q2') {
                return {
                  ...serie,
                  data: [],
                };
              }
              return serie;
            }),
          }));
        }


        // console.log(q3 + "----q3")
        if (q3[2] == '07-09' && total_amnt[2] != null) {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q3') {
                return {
                  ...serie,
                  data: [total_amnt_third_value],
                };
              }
              return serie;
            }),
          }));
        } else {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q3') {
                return {
                  ...serie,
                  data: [],
                };
              }
              return serie;
            }),
          }));
        }

        // console.log(q4+"----q4" )
        if (q4[3] == '10-12' && total_amnt[3] != null) {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q4') {
                return {
                  ...serie,
                  data: [total_amnt_fourth_value],
                };
              }
              return serie;
            }),
          }));
        } else {
          setChartData(prevState => ({
            ...prevState,
            series: prevState.series.map(serie => {
              if (serie.name === 'Q4') {
                return {
                  ...serie,
                  data: [],
                };
              }
              return serie;
            }),
          }));
        }


        //======================================
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  useEffect(() => {

    fetch(BaseurlAdmin + "invoiceclientlist")
      .then((data) => {
        const res = data.json();
        console.log(res+"---res client")
        return res
      }).then((res) => {
        setDeptList(res)
        // alert(deptlist.dept_name)
        console.log("resss", res)
      }).catch(e => {
        console.log("error", e)
      })


  }, []);





  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Q1',
        data: [10],
      },
      {
        name: 'Q2',
        data: [20],
      },
      {
        name: 'Q3',
        data: [30],
      },
      {
        name: 'Q4',
        data: [40],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        // categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        // categories: this.props.data.map(item => item.year)
      },
      yaxis: {
        title: {
          text: 'Total Amount',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {


        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          // console.log(series + "----series")
          // console.log(seriesIndex + "----seriesIndex")
          // console.log(dataPointIndex + "----dataPointIndex")
          const invoice_no = invoicenoRef.current;
          const inv_Date = invoicedateRef.current;
          const payt_status = paymentstatusRef.current;
          const received_amnt = receivedamountRef.current
          const utr_num = utrnoRef.current;
          // console.log(utr_num + "----utr_num")

          return (


            '<div style="background-color: #f0f0f0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 0px; font-family: \'Arial\', sans-serif;">' +
            '<p style="margin: 0; font-weight: bold; color: #007bff;">Total Amount: ' + series[seriesIndex][dataPointIndex] + '</p>' +
            '<p style="margin: 0; color: #333;">Invoice Number: ' + invoicenoRef.current[seriesIndex] + '</p>' +
            '<p style="margin: 0; color: #333;">Invoice Date : ' + inv_Date[seriesIndex] + '</p>' +
            '<p style="margin: 0; color: #333;">Payment Status : ' + payt_status[seriesIndex] + '</p>' +
            '<p style="margin: 0; color: #333;">Received Amount : ' + received_amnt[seriesIndex] + '</p>' +
            '<p style="margin: 0; color: #333;">UTR Number : ' + utr_num[seriesIndex] + '</p>' +
            '</div>'
          );
        }
      },
    },
  });

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={6} sm={12}>
          <div align="right">
            <Box sx={{ minWidth: 180 }}>
              <FormControl style={{ minWidth: 170 }} size='small'>
                <InputLabel id="demo-simple-select-label">Client List</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={deptcode}
                  label="Client List"
                  // onChange={e => (setDept(e.target.value))}
                  onChange={handleDept}
                >

                  {deptlist.map((item, index) => (
                    <MenuItem key={index} value={item.client_id} >
                      {item.dept_name}
                    </MenuItem>
                  ))

                  }

                </Select>

              </FormControl>

            </Box>
          </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div align="left">
            <Box sx={{ minWidth: 180 }}>
              <FormControl style={{ minWidth: 170 }} size='small'>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Year"
                  // onChange={e => (setyear(e.target.value))}
                  onChange={handleYear}
                >

                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>

                </Select>

              </FormControl>

            </Box>
          </div>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* fontSize: isMobile ? '7px' : 'auto' */}
        <Grid item lg={12} sm={6} align="center">
          <div id="chart" >
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height= {isMobile? '250' :'350' } width={isMobile? '300' :'800'} />
          
          </div>
        </Grid>
      </Grid>


    </>

  );
};

export default ChartforInvoice5;
