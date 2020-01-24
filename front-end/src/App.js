import React, {useState, useEffect, useContext } from 'react';


import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  card: {
    minWidth: 275,
    padding: theme.spacing(3),
  },
  gridItem: {
    padding: theme.spacing(5),
  }
}));



const StatisticCard = (title, number) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subtitle1">
            {title}:
          </Typography>
          <Typography variant="h4">
            {number}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

function OverallStatisticGrid(props) {
  const classes = useStyles();

  const [ titles, setTitle ] = useState(["Confirmed", "Suspected", "Cured", "Fatalities"]);
  const [ numbers, setNumbers ] = useState(["800", "1000", "30", "20"]);

  return (
    <div className={classes.root}>
      <Grid container>
        {
          titles.map((title, index) => (
            <Grid item xs={6} className={classes.gridItem}>
              {StatisticCard(title, numbers[index])}
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

// To create, do:


function x() {
  return "asdf"
}



function MyAppBar(props) {
  const classes = useStyles()
  return (<AppBar position="sticky">
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
      <OverallStatisticGrid/>
      <h3>
        Other Info
      </h3>
      <Number1/>
      <Number2/>
      <Number3/>
      <Number4/>

    </React.Fragment>
    
  );
}

export default App;
