import { CanvasJSChart } from 'canvasjs-react-charts'
import React, { useEffect, useState } from 'react'

const Piechart = () => {
    const [operations,setoperations]=useState([]);

    useEffect(() => {
        // fetch("http://localhost:8082/dept/printing")
        fetch("http://localhost:8082/homepagetranstable")
          .then((response) => response.json())
          .then((actualData) => setoperations(actualData))
            // .then((actualData) => console.log(actualData))
        
          .catch((err) => {
            console.log(err.message);
          });        
      },[]);
      
      const txncounts = new Map();   
      console.log(operations.map(e=>txncounts.set(e.label,e.y)))   
    const options = {
        // exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            // dataPoints:data,
            dataPoints: [
                { y: txncounts.get("getrefnum"), label:"getrefnum" },
                { y: txncounts.get("getuid"), label:"getuid" },
                { y: txncounts.get("activate"), label:"activate" },
                { y: txncounts.get("struid"), label:"struid" },
                { y: txncounts.get("deactivate"), label:"deactivate" },
               
            ]
        }]
    }
    return (
        <div>

            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>

        </div>
    )
}

export default Piechart
