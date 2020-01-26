import React, {useState, useEffect, useContext } from 'react';

import { ResponsiveLine } from '@nivo/line'


import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue';
import localData from './fodderdata';

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
    padding: theme.spacing(8),
  },
  gridItem: {
    padding: theme.spacing(3),
  },
  contentGridContainer: {
    padding: theme.spacing(3)
  },
  contentGridItem: {
    paddingTop: "30px",
  },

}));

// Title Banner

const TitleBanner = (title) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container paddingB>
        <Typography variant="h3" align="center">
          {title}
        </Typography>
      </Grid>
      
    </div>
  );
}



// Overall Statistics

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
      <Grid container spacing={5}>
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

// Graph component

const MyGraph = () => {
  return (
    <div style={{height: 500}}>
    <ResponsiveLine
      data={localData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
    />
</div>
  )
}

function GraphComponent() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            {MyGraph()}
          </CardContent>
        </Card>
      </div>

  )
}




// Overall Content

function ContentGridContainer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.contentGridContainer}>
      <Grid item xs={12} className={classes.contentGridItem}>
        {TitleBanner("Overall Stats")}
      </Grid>
      <Grid item xs={12} className={classes.contentGridItem}>
        <OverallStatisticGrid/>
      </Grid>
      <Grid item xs={12} className={classes.contentGridItem}>
        {TitleBanner("Graph")}
      </Grid>
      <Grid item xs={12} className={classes.contentGridItem}>
        <GraphComponent/>
      </Grid>
    </Grid>
  )
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


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MyAppBar/>
      <ContentGridContainer/>
    </React.Fragment>

  );
}

export default App;
