import React, {useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import UserList from './UserList'
import UserProfile from './UserProfile'

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: '100%'
//   }
// });
const useStyles = makeStyles({
  root: {
    backgroundColor: 'blue',
    width: '100%'
  }
});

const FullWidthTabs = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0)
  // state = {
  //   value: 0
  // };

 const handleChange = (event, value) => {
    // this.setState({ value });
    setValue(value)
  };

  const handleChangeIndex = index => {
    // this.setState({ value: index });
    setValue(index)
  };

  // render() {
  //   const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="User List" component={Link} to="/one" />
              <Tab label="User Profile" component={Link} to="/two" />
            </Tabs>
          </AppBar>

          <Switch>
            <Route path="/one" component={ItemOne} />
            <Route path="/two" component={ItemTwo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
// }

function ItemOne(theme) {
  return (
    <Paper>
      <div>
          <UserList />
      </div>
    </Paper>
  );
}

function ItemTwo(theme) {
  return (
    <Paper>
      <UserProfile />
    </Paper>
  );
}


export default withStyles(useStyles, { withTheme: true })(FullWidthTabs);
