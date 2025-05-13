import { useEffect, useState } from 'react';
import '../../src/assets/styles/Piechart1.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut, Pie ,Line, Bar } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

 


const data = {
    datasets: [{
        data: [10, 20, 30],
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
function Piechart1() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          '#95A5A6',
          '#E74C3C',
          '#73C6E8',
          '#F4D03F',
          '#0DC818'
        ],
       
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
  text: '83%'

});

  useEffect(()=> {
    const fetchData = () =>  {
      // fetch("http://localhost:8082/homepagetranstable")
      fetch("http://localhost:8082/dept/homepagetranstable")

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
    <div className="Piechart1" style={{width:'85%', height:'65%', marginLeft:'70px'}}>
      <Doughnut data={data}
          //  width={250}
          //   height={250}
            options={{
              legend: {
                display: false
              },
              maintainAspectRatio: false,
              responsive: true,
              cutoutPercentage: 80
            }} />
    </div>
  );
}

export default Piechart1;
