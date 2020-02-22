import React, {useState, useEffect, useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

import OverallGraph from './components/OverallGraph'
import DailyGraph from './components/DailyGraph'
import Last48HoursGraph from './components/Last48HoursGraph'
import WindowDimensions from './components/WindowDimensions'


import axios from 'axios'

import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    flewGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: "#1b1b1b"
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(1),
  },
  gridItem: {
    padding: theme.spacing(3),
  },
  contentGridContainer: {
    padding: theme.spacing(3),
    height: "100%",
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
    color: "#9e9e9e",
  },
  textComponent_1: {
    textAlign: 'left',
    color: "#616161",
    paddingTop: "3px",
  },
  overviewTextStyle: {
    height: "100%",
  },
  titleComponent_0: {
    align: "left",
    color: "#757575",
  },
  titleBarItemNeutral: {
    padding: theme.spacing(3),
  },
  titleBarItemSelected: {
    padding: theme.spacing(3),
    backgroundColor: "#e0e0e0",
  }

}));


function OverviewGraphComponent() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Card className={classes.card} style={{boxShadow: "none"}}>
          <CardContent>
            {OverallGraph()}
          </CardContent>
        </Card>
      </div>

  )
}

function Last48GraphComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} style={{boxShadow: "none"}}>
        <CardContent>
          {Last48HoursGraph()}
        </CardContent>
      </Card>
    </div>
  )
}


function ForecastGraphComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} style={{boxShadow: "none"}}>
        <CardContent>
          {DailyGraph()}
        </CardContent>
      </Card>
    </div>
  )
}

function DailyTrendGraphComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} style={{boxShadow: "none"}}>
        <CardContent>
          {DailyGraph()}
        </CardContent>
      </Card>
    </div>
  )
}




// Prototyping Next Design


// TITLE BAR
const TitleBar = (tab, setTab) => {
  const classes = useStyles()

  if (tab === 0) {
    return (
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2} className={classes.titleBarItemSelected} onClick={(e) => {
            setTab(0)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Overall
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
            setTab(1)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Last 48 Hours
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
            setTab(2)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Daily Trends
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  } else if (tab === 1) {
      return (
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
              setTab(0)
            }}>
              <Typography className={classes.titleComponent_0} variant="h5">
                Overall
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.titleBarItemSelected} onClick={(e) => {
              setTab(1)
            }}>
              <Typography className={classes.titleComponent_0} variant="h5">
                Last 48 Hours
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
              setTab(2)
            }}>
              <Typography className={classes.titleComponent_0} variant="h5">
                Daily Trends
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )
  } else if (tab === 2) {
    return (
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
            setTab(0)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Overall
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
            setTab(1)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Last 48 Hours
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemSelected} onClick={(e) => {
            setTab(2)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Daily Trends
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }


}

// OVERVIEW
// text component
function OverviewTextComponent() {
  const classes = useStyles()
  const [ data, setData ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('http://3.105.29.147:5000/api/overview');
      setData(res.data.data)
    };
    fetchData();


  }, []);


  return (
    <Grid container className={classes.overviewTextStyle} direction="column" justify="space-between" alignItems="flex-start">
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Confirmed
        </Typography>
        <Typography className={classes.textComponent_1} variant="h5">
          {((data || {})[0] || {}).value}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Suspected
        </Typography>
        <Typography className={classes.textComponent_1} variant="h5">
          {((data || {})[1] || {}).value}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Cured
        </Typography>
        <Typography className={classes.textComponent_1} variant="h5">
          {((data || {})[2] || {}).value}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.textComponent_0} variant="h4">
          Fatalities
        </Typography>
        <Typography className={classes.textComponent_1} variant="h5">
          {((data || {})[3] || {}).value}
        </Typography>
      </Grid>
    </Grid>
  )
}


// OVERVIEW:
// content
function OverviewContent() {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={3} className={classes.gridItem}>
          <OverviewTextComponent/>
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          {OverviewGraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

// OVERVIEW:
// container
const OverviewContainer = (tab, setTab) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.contents} height="100%">
      {TitleBar(tab, setTab)}
      <OverviewContent/>
    </Grid>
  )
}


// 24HOURS:
// content
function Last48HourContent() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          {Last48GraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

// 24HOURS:
// container
const Last48HourContainer = (tab, setTab) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.contents}>
      {TitleBar(tab, setTab)}
      <Last48HourContent/>
    </Grid>
  )
}


// FORECAST
// content
function ForecastContent() {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          {ForecastGraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

// FORECAST
// container
const ForecastContainer = (tab, setTab) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contents}>
      <Grid item xs={12}>
        {TitleBar(tab, setTab)}
        <ForecastContent/>
      </Grid>
    </Grid>
  )
}

// FORECAST
// content
function DailyTrendContent() {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          {DailyTrendGraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

// FORECAST
// container
const DailyTrendContainer = (tab, setTab) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contents}>
      <Grid item xs={12}>
        {TitleBar(tab, setTab)}
        <DailyTrendContent/>
      </Grid>
    </Grid>
  )
}


// MAIN CONTENT
// content
function Content() {
  const classes = useStyles();

  const [ tab, setTab ] = useState(0);

  if (tab === 0) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {OverviewContainer(tab, setTab)}
        </CardContent>
      </Card>
    )
  } else if (tab === 1) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {Last48HourContainer(tab, setTab)}
        </CardContent>
      </Card>
    )
  } else if (tab === 2) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {DailyTrendContainer(tab, setTab)}
        </CardContent>
      </Card>
    )
  }
}


// MAIN CONTENT
// container
function ContentGridContainer() {
  const classes = useStyles();
  const {_, height} = WindowDimensions();

  return (
    <Grid container className={classes.contentGridContainer}>
      <Grid item xs={12} className={classes.contentGridItem}>
        <Content/>
      </Grid>
    </Grid>
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
    </React.Fragment>

  );
}

export default App;
