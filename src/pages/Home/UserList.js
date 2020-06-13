import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../styles.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {

  const [userData, setUserData] = useState({}) 
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
  });
  const [flag, setFlag] = useState(false)
  const [open, setOpen] = useState(false)
  const classes = useStyles();

  const fetchData = async () =>{
      const res = await fetch('https://reqres.in/api/users?page=2')
      const users = await res.json();
      setUserData(users.data)
      setFlag(true)
  }

  useEffect(() =>{
      fetchData();
  }, [])


  const handleClickOpen = (id, lname, fname, email, image) => {
    setOpen(true);
    console.log(id, lname, fname, email, image)
    setPerson({
        firstName: fname,
        lastName: lname,
        email: email,
        image: image,
    })
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile Image</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {flag ? (
                userData.map((val, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            <img src = {val.avatar} />
                        </TableCell>
                        <TableCell align="left">{val.email}</TableCell>
                        <TableCell align="left">{val.first_name}</TableCell>
                        <TableCell align="left">{val.last_name}</TableCell>
                        <TableCell align="left">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={()=>handleClickOpen(val.id, val.last_name, val.first_name, val.email, val.avatar)} >
                                    View Details
                            </Button>
                        </TableCell>
                    </TableRow>
                ))) : 
                (
                <p>No data</p>
                )
            }
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img style={{margin:'auto',display:'block'}} src={person.image} alt="imgUrl"/>
            <Grid container>
            <Grid item xs={6}>
                <p><b>First Name</b></p>
                <p><b>Last Name</b></p>
                <p><b>Email</b></p>
            </Grid>
            <Grid item xs={6}>
                <p>{person.firstName}</p>
                <p>{person.lastName}</p>
                <p>{person.email}</p>
            </Grid>
            </Grid>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
