import React from 'react';

import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue';



import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flewGrow: 1,
    paddingTop: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textAlign: 'center',
    height: 80,
    backgroundColor: blue[600]
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  statisticText: {
    textAlign: 'center',
  },
  confirmed: {
    backgroundColor: purple[100],
  },
  suspected: {
    backgroundColor: blue[600],
  },
  cured: {
    backgroundColor: deepPurple[100],
  },
  fatal: {
    backgroundColor: pink[100],
  }
}));



function StatisticsGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.confirmed}>
          <h4 className={classes.statisticText}>Confirmed</h4>
        </Grid>
        <Grid item xs={6} className={classes.suspected}>
          <h4 className={classes.statisticText}>Suspected</h4>
        </Grid>
        <Grid item xs={6} className={classes.cured}>
          <h4 className={classes.statisticText}>Cured</h4>
        </Grid>
        <Grid item xs={6} className={classes.fatal}>
          <h4 className={classes.statisticText}>Fatal</h4>
        </Grid>
      </Grid>
    </div>
  )
}


function MyAppBar(props) {
  const classes = useStyles()
  return (<AppBar position="static">
            <Toolbar className={classes.title}>
              <Typography variant="h2" className={classes.title}>
                WuHan Epidemic Tracking
              </Typography>
              
            </Toolbar>
          </AppBar>
          )
}

function TitleBar(props) {
  return <h1 className="App-header">Some Title</h1>
}

function Number1(props) {
  return <h1>Confirmed Cases:</h1>;
}

function Number2(props) {
  return <h1>Suspected Cases:</h1>;
}

function Number3(props) {
  return <h1>Cured Cases:</h1>;
}

function Number4(props) {
  return <h1>Fatal Cases:</h1>;
}


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MyAppBar/>
      <h3>
        Overall Statistics
      </h3>
      <StatisticsGrid/>
      <h3>
        Other Info
      </h3>
      <Number1/>
      <Number2/>
      <Number3/>
      <Number4/>
    </React.Fragment>
    
    // <div className="App">
    //   <TitleBar/>
    //   <Number1/>
    //   <Number2/>
    //   <Number3/>
    //   <Number4/>
    // </div>
  );
}

export default App;
