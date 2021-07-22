import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Pie} from 'react-chartjs-2'
const useStyles = makeStyles({

    title: {
        marginTop: '20px',
        textAlign: 'center',
      },
      pie: {
       alignItems: 'center'
      },
      pieSize: {
        width: '400px',
        height: '400px',
        textAlign: 'center',
        marginLeft: '276px',

        },

    MuiTypographyAlignRight: {
      textAlign: 'right',
      margin: '2px'
  },
  
  });

const PieChart = () => {
       const [chartData, setChartData]  = useState({});    
       const classes = useStyles();

   const Chart = () => {
    let empSal = [];
    let empAge = [];
    
// consume API 
    axios.get("https://dummy.restapiexample.com/api/v1/employees")
    .then(res => {
        console.log(res);
        for(const dataObj of res.data.data){

            if(dataObj.employee_age <= 21){
            empSal.push(parseInt(dataObj.employee_salary));
            empAge.push(parseInt(dataObj.employee_age ));
            }

        }

       setChartData({
       labels: empAge,
       datasets: [
                    {
                         label: '# of Votes',
                         data: empSal,
                         backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                         ],
                  
                         borderWidth: 1
                     }
                 ]
              });
            })
            .catch(err =>{
                console.log(err);
            })
  }
     useEffect(() => {
        Chart();
      }, []);

return(
          <div>
              <h1 className={classes.title}>Pie Chart</h1>
              <div className={classes.pieSize}>
                  <Pie
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                  />
              </div>
          </div>
      )
 }
export default PieChart;