import { useEffect, useState } from 'react';
// import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardHeader from '@material-tailwind/react/CardHeader';
// import { Chart, PieController, ArcElement, Legend, Tooltip, Title ,CategoryScale ,LinearScale,} from 'chart.js';
// Chart.register(PieController, ArcElement, Title, Legend, Tooltip,CategoryScale,LinearScale,);

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

export default function ChartBar() {
    const[Months,setmonths]=useState([]);
    const[Counts,setCounts]=useState([]);
    // const[Counts,setCounts]=useState([0,0,0,0,0,0,0,0,0,0,10,0]);
    useEffect(() => {
        
        fetch("http://localhost:8082/txnmonths")
          .then((response) => setmonths(response.data))
        //   .then((actualData) => setmonths(actualData))
          .then((response) => console.log(response))
          .catch((err) => {
            console.log(err.message);
          });
    
          fetch("http://localhost:8082/txncounts")
          .then((response) => response.json())
        //   .then((actualData) => console.log(actualData))
          .then((actualData) => setCounts(JSON.stringify(actualData)))
         
          .catch((err) => {
            console.log(err.message);
          });
          
      },[]);

  console.log("Months_______"+Months);
  console.log("Counts_______"+Counts);
var cnt=Counts;

//   var cnt=[27, 680, 86, 74, 10, 4, 807,900,111,111,10,10];
// var cnt=[];
//       Counts.forEach(element => {
//         cnt.push(element)
//       });
//       console.log("cnt______"+cnt)


    //   var iterator =  Counts.values()
    //   console.log(iterator.next().value);
    //     console.log(iterator.next().value);
    //     console.log(iterator.next().value);
    //     console.log(iterator.next().value);
    //     console.log(iterator.next().value);
    //     console.log(iterator.next().value);
    //     console.log(iterator.next().value);


    var label = 
        [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octomber',
        'November',
        'December',
    ];
    
    useEffect(() => {
        let config = {
            type: 'bar',
            data: {
                labels: label
                // [
                //     'January',
                //     'February',
                //     'March',
                //     'April',
                //     'May',
                //     'June',
                //     'July',
                // ]
                ,
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() ,
                        fill: false,
                        backgroundColor: '#f44336',
                        borderColor: '#f44336',
                        data: [27, 680, 86, 74, 10, 4, 807,900,111,111],
                        // data: cnt.map(e=>e),                                            
                        barThickness: 15,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, []);

    return (
        <Card>
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl"> Monthly Transaction Details</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
