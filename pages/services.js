import React from 'react';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../src/ui/ButonArrow';

const customSoftwareIcon = '/assets/customSoftware.svg';
const mobileAppsIcon = '/assets/mobileIcon.svg';
const websitesIcon = '/assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  subtitle1: {
    marginBottom: '1em',
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? 'center' : 'inherit'}
        >
          Services
        </Typography>
      </Grid>
      {/* iOS/Android Block */}
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : 'inherit',
              width: matchesSM ? 'inherit' : '35em',
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt="mobile phone icon"
              src={mobileAppsIcon}
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of iOS/Android Block */}
      {/* Custon Software Block*/}
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'inherit'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : 'inherit',
              marginLeft: matchesSM ? 0 : '5em',
            }}
          >
            <Typography variant="h4">Custon Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from invertigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Custon Software Block */}
      {/* Website Block */}
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : 'inherit',
              width: matchesSM ? 'inherit' : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimize for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt="website icon"
              src={websitesIcon}
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Website Block */}
    </Grid>
  );
}
