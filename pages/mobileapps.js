import React from 'react';
import Lottie from 'react-lottie';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

const backArrow= '/assets/backArrow.svg';
const forwardArrow= '/assets/forwardArrow.svg';
const swiss ='/assets/swissKnife.svg';
const access= '/assets/extendAccess.svg';
const engagement= '/assets/increaseEngagement.svg';

import integrationAnimation from '../src/animations/integrationAnimation/data.json';

import CalltoAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '41em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    padding: '0 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.5em',
    },
  },
}));

export default function MobileApps({ setSelectedIndex, setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href="/customsoftware"
              onClick={() => setSelectedIndex(1)}
            >
              <img
                src={backArrow}
                alt="Back to Custo, Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to take tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Wether you want an app for your customers, employees, or yourself,
              we can build cross-plataform native solutions for any part of your
              business process. This opéns you up to a whole new world of
              possibilities by taking advantage of phone features like the
              camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Convenience, Connnection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            container
            className={classes.arrowContainer}
            alignItems="flex-start"
            justify="flex-end"
            style={{ flex: 1, marginRight: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href="/websites"
              onClick={() => setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ margin: '15em 0' }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Our technology enables as innate interconnection bettween web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platafform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              Our cutting-edge development proccess allows us to create apps for
              iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              This significant reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '15em' }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={swiss}
              alt="swiss army knife"
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ margin: matchesMD ? '10em 0' : 0 }}
          md
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={engagement}
              alt="app with notification"
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CalltoAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
