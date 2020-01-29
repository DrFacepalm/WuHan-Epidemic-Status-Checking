import React, {useState, useEffect, useContext } from 'react';

import { ResponsiveLine } from '@nivo/line'


import red from '@material-ui/core/colors/red';
import localData from './fodderdata';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

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
              Last 24 Hours
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
            setTab(2)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Forecast
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
                Last 24 Hours
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.titleBarItemNeutral} onClick={(e) => {
              setTab(2)
            }}>
              <Typography className={classes.titleComponent_0} variant="h5">
                Forecast
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
              Last 24 Hours
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.titleBarItemSelected} onClick={(e) => {
            setTab(2)
          }}>
            <Typography className={classes.titleComponent_0} variant="h5">
              Forecast
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


  return (
    <Grid container className={classes.overviewTextStyle} direction="column" justify="space-between" alignItems="flex-start">
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


// OVERVIEW:
// content
function InfoBox() {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={3} className={classes.gridItem}>
          <OverviewTextComponent/>
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          {GraphComponent()}
        </Grid>
      </Grid>
    </Grid>
  )
}

// OVERVIEW:
// container
const OverviewContent = (tab, setTab) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.contents}>
      {TitleBar(tab, setTab)}
      <InfoBox/>
    </Grid>
  )
}


// 24HOURS:
// content
function Last24HourContent() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          {GraphComponent()}
          24 HOUR TAB
        </Grid>
      </Grid>
    </Grid>
  )
}

// 24HOURS:
// container
const Last24HourContainer = (tab, setTab) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.contents}>
      {TitleBar(tab, setTab)}
      <Last24HourContent/>
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
          {GraphComponent()}
          FORECAST TAB
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


// MAIN CONTENT
// content
function Content() {
  const classes = useStyles();

  const [ tab, setTab ] = useState(0);

  if (tab === 0) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {OverviewContent(tab, setTab)}
        </CardContent>
      </Card>
    )
  } else if (tab === 1) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {Last24HourContainer(tab, setTab)}
          24Hour Tab
        </CardContent>
      </Card>
    )
  } else if (tab === 2) {
    return (
      <Card className={classes.card}>
        <CardContent>
          {ForecastContainer(tab, setTab)}
          Forecast Tab
        </CardContent>
      </Card>
    )
  }
}


// MAIN CONTENT
// container
function ContentGridContainer() {
  const classes = useStyles();

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
