import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";

import StickyFooter from './Footer';
class App extends React.Component {
  state = {

  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static" classes={{ root: classes.root }}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Joey's team
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar >
        <StickyFooter></StickyFooter>
      </React.Fragment>
    );
  }

}
const myStyle = {
  root: {
    background: 'linear-gradient(to right top, #6db4e8, #5aa6da, #4698cc, #2e8abe, #047cb0)'
  },
  title: {
    flexGrow: 1,
  },
};

export default withStyles(myStyle)(App);
