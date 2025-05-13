import { ArcElement, Chart as ChartJs, Legend, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import '../../src/assets/styles/ChartBar1.css';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);
const data = {
    datasets: [{
        data: [10, 20, 30],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        backgroundColor:[
          'red',
          'blue',
          'yellow',
          'pink',
          'orange'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
};
function ChartbarFortotal() {
  const {appcode} = useParams();
  
  const [data, setData] = useState({
    datasets: [{
        
        data: [10, 20, 30],
        barThickness: 40,
        title:"demo",
        backgroundColor:[
          '#95A5A6',
          '#E74C3C',
          '#73C6E8',
          '#F4D03F',
          '#0DC818'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
  legend: {
    display: false,
        },     

});

  useEffect(()=> {
    const fetchData = () =>  {
      fetch("http://localhost:8082/applicationwisedata/"+appcode)
      .then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.label);
            data.push(i.y)
        }
        setData(
          {
            datasets: [{
                data:data,
                responsive: true,
                // backgroundColor:[
                //   'red',
                //   'blue',
                //   'yellow'
                // ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])

  return (
    <div className="ChartbarFortotal" 
    // style={{width:'85%', height:'85%', marginLeft:'70px'}}
    >
      <Bar data={data}/>
    </div>
  );
}

export default ChartbarFortotal;
