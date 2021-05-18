import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediQuery from '@material-ui/core/useMediaQuery';

const history = '/assets/history.svg';
const profile = '/assets/founder.jpg';
const yearbook = '/assets/yearbook.svg';
const puppy = '/assets/puppy.svg';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    padding: '0 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.5em',
    },
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
    [theme.breakpoints.down('sm')]: {
      height: '13em',
      width: '13em',
    },
  },
}));

export default function About({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography align={matchesMD ? 'center' : 'left'} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : 'flex-start'}
        style={{ margin: '10em 0' }}
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            container
            item
            direction="column"
            style={{ maxWidth: '35em' }}
            align={matchesMD ? 'center' : 'left'}
            lg
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We&apos;re the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography>
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
              <Typography variant="body1" paragraph></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" item lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesXS ? '10em' : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item align="center">
          <Typography variant="body1" paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item align="center">
          <Avatar src={profile} alt="Founder" className={classes.avatar} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Grid
            item
            container
            direction="column"
            align={matchesMD ? 'center' : 'left'}
            lg
            style={{
              order: matchesMD ? 2 : 1,
              margin: matchesMD ? '3em 0 5em' : undefined,
            }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook page about founder"
                style={{ maxWidth: matchesXS ? '15em' : '22em' }}
              />
            </Grid>

            <Typography variant="caption">
              a page from my Sophomore yearbook
            </Typography>
          </Grid>
          <Grid
            item
            lg
            style={{
              maxWidth: '45em',
              padding: '1.25em',
              order: matchesMD ? 1 : 2,
            }}
          >
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? 'center' : 'flex-end'}
            style={{ order: 3 }}
            lg
          >
            <Grid item>
              <img
                src={puppy}
                alt="grey stopped puppy"
                style={{ maxWidth: matchesXS ? '14em' : '22em' }}
              />
            </Grid>
            <Typography variant="caption" align="center">
              my miniature dapple dachshund, Sterling
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
