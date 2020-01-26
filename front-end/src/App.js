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
    backgroundColor: "#1b1b1b"
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
    padding: theme.spacing(1),
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
  contents: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  textComponent_0: {
    textAlign: 'left',
    color: "#757575",
    variant: "h3",
  },
  testStyle: {
    height: "100%",
  },
  overviewTextStyle: {
    height: "100%",
  },
  titleComponent_0: {
    textAlign: "left",
    color: "#757575",
    variant: "h5"
  }

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
      <Grid item xs={12} className={classes.contentGridItem}>
        <Content/>
      </Grid>
    </Grid>
  )
}




// Prototyping Next Design


const TitleBar = (titles) => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        {
          titles.map((title, index) => (
            <Grid item xs={2} className={classes.gridItem}>
              <Typography className={classes.titleComponent_0} variant="h5">
                {title}
              </Typography>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
  

}

const OverviewTextComponent = () => {
  const classes = useStyles()


  return (
    <Grid container className={classes.overviewTextStyle} direction="column" justify="center" alignItems="baseline">
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Confirmed:
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Suspected:
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Cured:
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Fatalities:
        </Typography>
      </Grid>
    </Grid>
  )
}

const InfoBox = (type) => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={3} className={classes.gridItem}>
          {OverviewTextComponent()}
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          {GraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

function Content() {
  const classes = useStyles();

  const [ titles, setTitles ] = useState(["Overview", "Past 24 Hours", "Forecast"]);

  return (

      <Card className={classes.card}>
        <CardContent>
          <Grid container className={classes.contents}>
            {TitleBar(titles)}
            {InfoBox()}
          </Grid>
        </CardContent>
      </Card>

    
  )
}





function MenuBar(props) {
  const classes = useStyles()
  return (<AppBar position="sticky">
            <Toolbar className={classes.title}>
              <Typography variant="h6" className={classes.title}>
                WuHan Epidemic Tracking
              </Typography>

            </Toolbar>
          </AppBar>
          )
}


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuBar/>
      <ContentGridContainer/>
      <Grid container spacing={0} direction="column" alignItems="center" justify="space-evenly" style={{ minHeight: '100vh'}} >
        <Grid item xs={3}>
          text
        </Grid>
        <Grid item xs={3}>
          text2
        </Grid>
        <Grid item xs={3}>
          text3
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
