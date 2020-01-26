import React from 'react';
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
import Last48HoursGraph from './components/Last48HoursGraph'


const useStyles = makeStyles(theme => ({
  root: {
    flewGrow: 1,
  },
  footer: {
    color: "#bdbdbd"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: '#1b1b1b'
  },
  statisticText: {
    textAlign: 'center',
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(1),
  },
  Contents: {
  },
  Item: {
    padding: 20,
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
function TitleBanner (title) {
  const classes = useStyles()
  return (
    <Typography variant="h3" align="left" className={classes.root}>
      {title}
    </Typography>
  );
}

// Displaying Overview Card.
function OverviewCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {TitleBanner("Overview")}
          {OverallGraph()}
        </CardContent>
      </Card>
    </div>
  );
}

// Displaying Daily Card.
function DailyCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {TitleBanner("Daily Trends")}
          {DailyGraph()}
        </CardContent>
      </Card>
    </div>
  )
}

// Displaying Daily Card.
function Last48HoursCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {TitleBanner("Last 48 Hours")}
          {Last48HoursGraph()}
        </CardContent>
      </Card>
    </div>
  )
}

// Contents of the app.
function Contents() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid container className={classes.Contents} backgroundColor="red">
        <Grid item xs={12} sm={6} className={classes.Item}>
          <OverviewCard/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.Item}>
          <DailyCard/>
        </Grid>
        <Grid item xs={12} className={classes.Item}>
          <Last48HoursCard/>
        </Grid>
        <Grid item xs={12} className={classes.Item}>
        <Typography variant="body2" align="center" className={classes.footer}>
          Created by @DrFacepalm and @Zachaccino on Github.
        </Typography>
        <Typography variant="body2" align="center" className={classes.footer}>
          Source: 3g.dxy.cn/newh5/view/pneumonia
        </Typography>
        <Typography variant="body2" align="center" className={classes.footer}>
          Project: github.com/DrFacepalm/WuHan-Epidemic-Status-Checking
        </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

// App's Structure.
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
