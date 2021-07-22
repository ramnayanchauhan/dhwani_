import React from 'react';
import { useParams, } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import PieChart from './PieChart';

const useStyles = makeStyles({

    title: {
        marginTop: '20px',
        textAlign: 'center',
      },

    MuiTypographyAlignRight: {
      textAlign: 'right',
      margin: '2px'
  },
  
  });

const Page2 = () =>{
    let {pageId} = useParams();
    console.log("customerId", pageId);
    let history = useHistory();
    const handleClickPage1 = () => {
     history.push(`/`)
    }
const classes = useStyles();
return (
     <div>
      <h2 className={classes.title}>Welcome to PieChart Data </h2>
      <Typography className={classes.MuiTypographyAlignRight}>
       <Button variant="contained" color="primary" onClick={handleClickPage1}>Go to Page1</Button>
      </Typography>
      <PieChart />
     </div>
     
    )

}
export default Page2;