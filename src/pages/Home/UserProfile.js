import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {TextField, Button} from '@material-ui/core';
import {Paper,Grid,CssBaseline} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase'
import Checkbox from '@material-ui/core/Checkbox';

const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    phone:"",
    city: "",
    employed:"false",
  });

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const UserProfile = () => {

  const [formData, updateFormData] = useState(initialFormData);
  const [account, setAccount] = useState('')
  const [isEmployed, setisEmployed] = useState(false)
  const classes = useStyles();

  const handleCheck = (e) => {
    setisEmployed(!isEmployed);
    updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value,
      });
  }

  const handleChange = (e) => {
    setAccount(e.target.value);

    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
  };

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  return (
    <div style={{ padding: 16, margin: 'auto'}}>
      <CssBaseline />
          <form>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                    <TextField name="firstName" onChange={handleChange} label="First Name" />
                </Grid>
                <Grid item xs={4}>
                    <TextField  name="lastName" onChange={handleChange} label="Last Name" />
                </Grid>
                <Grid item xs={4}>
                    <TextField  name="email" onChange={handleChange} label="Email" />
                </Grid>
                <Grid item xs={4}>
                    <TextField  name="address1" onChange={handleChange} label="Address 1" />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="number" name="phone" onChange={handleChange} label="Phone" />
                </Grid>
                <Grid item xs={4}>
                    <TextField  name="city" onChange={handleChange} label="City" />
                </Grid>
                <Grid item xs={4}>
                    <FormControl className={classes.margin}>
                        <InputLabel id="demo-customized-select-label">Accounts</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            name="account"
                            value={account}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                        <MenuItem value="None">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={isEmployed}
                        value={isEmployed}
                        onChange={handleCheck}
                        name="employed"
                        color="primary"
                    />
                    }
                    label="Employed"
                />
                </Grid>
                
                <Grid item xs={12}>
                    <Button style={{margin: 'auto', display: 'block'}} variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </div>
  );
}

export default UserProfile
