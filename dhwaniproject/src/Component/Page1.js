
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles({
  table: {
    minWidth: '550px',
  },
  MuiTypographyAlignRight: {
    textAlign: 'right',
    margin: '2px'
},

  container: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '50px',
    padding: '10px',
    margin: '10px'
  },
  
  title: {
    marginTop: '20px',
    textAlign: 'center',
  },
  
  tr: {
    height: '40px !important',
  },
  
  th: {
    maxWidth: '125px',
    minWidth: '125px',
    padding: '0 !important',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textAlign: 'center !important'
  },
  
  td:{
    height: '40px !important',
    padding: '5px !important',
    textAlign: 'center !important'
  },

});
const Page1 = () =>{
const [userData, setUserData] = useState();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setUserData(response.data))
    
  }, []);
 
//  const handleClickPage2 = (event) => {
  
//     event.preventDefault();
//     if (true) {
//       alert("aaa")
//         return <Redirect to="/page2" />
//       }

// };

let history = useHistory();
const handleClickPage2 = (pageId) => {
  history.push(`/page2/2`)
}

console.log(userData)
const classes = useStyles();
const renderBody = () => {
  return userData && userData.map((item,index) => {
      return (
          <TableRow className={classes.tr} key={index}>
              <TableCell className={classes.td}>{item.name}</TableCell>
              <TableCell className={classes.td}>{item.phone}</TableCell>
              <TableCell className={classes.td}>{item.email}</TableCell>
              <TableCell className={classes.td}>{item.website}</TableCell>
          </TableRow>
      )
  })
}


return (
  

  <div>
  <h1 className={classes.title}>Material UI - Responsive Table</h1>
  <Typography className={classes.MuiTypographyAlignRight}>
    <Button variant="contained" color="primary" onClick={handleClickPage2}>Go to Page2</Button>
  </Typography>
  
  <Paper className={classes.container}>
    <Table>
      <TableHead>
        <TableRow className={classes.tr}>
          <TableCell className={classes.td}>Name</TableCell>
          <TableCell className={classes.td}>Phone</TableCell>
          <TableCell className={classes.td}>Email</TableCell>
          <TableCell className={classes.td}>Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {renderBody()}
      </TableBody>
    </Table>
  </Paper>
</div>

);

}
export default Page1;