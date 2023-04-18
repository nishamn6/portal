import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2';
//import { Plugin } from "chart.js";

 
const BarChart = (props) => {
const {weather}= props;
  //console.log(weather,"chart");
  const Humidity = weather?.main?.humidity;
  const Clouds = weather?.clouds?.all;
  const Winddegree = weather?.wind?.deg;
  const Temperature = weather?.main?.temp;
  //console.log(Temperature,"temp");
  return(
    <div className="chart">
       <Pie
         data={{
          labels:['Humidity','Clouds','Winddegree','Temperature'],
          datasets:[
            {
              label: 'weather Parameter',
              // data:[12,3,5,7],
              data:[Humidity,
                    Clouds,
                    Winddegree,
                   Temperature
                   ],
              backgroundColor:[
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(75,192,192,0.2)',
              ],
              borderColor:[
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
              ],
              borderWidth:1,
            },
          ],
         }}
      options= {{
        plugins: {
          datalabels: {
            display: true,
          },
        },
      }
    }
    
      //  options={{
      //   maintainAspectRatio:false,
      //   scales:{
      //     yAxes:[
      //       {
      //         ticks:{
      //           beginAtZero: true,
      //         },
      //       },
            
      //     ],
      //   },
      //   plugins: {
      //     datalabels: {
      //       display: true,
      //     }, 
      //   }
      //   }
      //  }
/>
    </div>
  )

} 
export default BarChart;