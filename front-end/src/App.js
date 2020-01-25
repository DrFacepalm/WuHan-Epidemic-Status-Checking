import React, {useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import OverallGraph from './components/OverallGraph'
import DailyGraph from './components/DailyGraph'


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
    backgroundColor: '#1b1b1b'
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
  Contents: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  Item: {
    paddingTop: 20,
  }
}));

// App bar.
function MyAppBar(props) {
  const classes = useStyles()
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.title}>
        <Typography variant="h6" className={classes.title}>
          WuHan Epidemic Tracking
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

// Title banner for each card.
const TitleBanner = (title) => {
  const classes = useStyles()
  return (
      <Typography variant="h3" align="left" className={classes.root}>
        {title}
      </Typography>
  );
}


function OverallStatisticGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {TitleBanner("Overview")}
          {DailyGraph()}
        </CardContent>
      </Card>
    </div>
  );
}


function GraphComponent() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            {OverallGraph()}
          </CardContent>
        </Card>
      </div>
  )
}


// Overall Content
function Contents() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
        <Grid container className={classes.Contents} backgroundColor="red">
          <Grid item xs={12} className={classes.Item}>
            <OverallStatisticGrid/>
          </Grid>
          <Grid item xs={12} className={classes.Item}>
            <GraphComponent/>
          </Grid>
        </Grid>
    </div>
)
}



function TitleBar(props) {
  return <h1 className="App-header">Some Title</h1>
}

// App's Main Interface.
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MyAppBar/>
      <Contents/>
    </React.Fragment>
  );
}

export default App;
