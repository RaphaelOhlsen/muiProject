import React from 'react';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

const backArrow = '/assets/backArrow.svg';
const forwardArrow = '/assets/forwardArrow.svg';
const analytics = '/assets/analytics.svg';
const ecommerce = '/assets/ecommerce.svg';
const outreach = '/assets/outreach.svg';
const seo = '/assets/seo.svg';

import CallToAction from '../src/ui/CallToAction';

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
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

export default function Websites({ setSelectedIndex, setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justify={matchesMD ? 'center' : undefined}
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
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Back to iOS/Android Development Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Having a website is a necessity in today&apos;s business world.
              They give you one central, public location to let people know who
              you are, what you do, and why you&apos;re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yurself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
              href="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: '-2.75em' }}>
              <img
                src={analytics}
                alt="graph with magnifyng glass revealing 1' and 0'"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          align={matchesSM ? 'center' : 'right'}
        >
          <Typography variant="body1" paragraph>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ margin: '15em 0' }}
        alignItems="center"
        justify="flex-end"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="world outline made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          align={matchesSM ? 'center' : 'right'}
        >
          <Typography variant="body1" paragraph>
            It&apos; no secret that people like to shop online.
          </Typography>
          <Typography variant="body1" paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it&apos;
            time for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: '-2.75em' }}>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          align={matchesSM ? 'center' : 'right'}
        >
          <Typography variant="body1" paragraph>
            Draw people in width a dazzling website. Showing off your products
            online is a great way to help customers decide what&apos;s for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ margin: '15em 0' }}
        alignItems="center"
        justify="flex-end"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          align={matchesSM ? 'center' : 'right'}
        >
          <Typography variant="body1" paragraph>
            How often have you ever been to the page of Google results?
          </Typography>
          <Typography variant="body1" paragraph>
            If you&apos;sre like us, probably never.
          </Typography>
          <Typography variant="body1" paragraph>
            Customers don&apos;t care go there either, so we make sure your
            website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
