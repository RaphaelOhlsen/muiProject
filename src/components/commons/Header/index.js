import React from 'react';
import Image from 'next/image';
import Link from '../Link';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '& .MuiTypography-body1': {
      textTransform: 'uppercase',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  icon: {
    color: theme.palette.common.gray,
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.common.hover,
    },
  },
}));

export default function ButtonAppBar() {
  const theme = useTheme();
  const classes = useStyles();

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} classes={{ button: classes.listItem }}>
            <ListItemIcon
              classes={{
                root: classes.icon,
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon
              classes={{
                root: classes.icon,
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      <AppBar elevation={0} position="relative" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginRight: theme.spacing(2) }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box display="flex" flexGrow="1" justifyContent="center">
            <Link href="/">
              <Hidden xsDown>
                <Image src="/assets/darkBrand.svg" width={190} height={32} />
              </Hidden>
              <Hidden smUp>
                <Image src="/assets/darkBrand.svg" width={152} height={26} />
              </Hidden>
            </Link>
          </Box>

          <Button color="inherit" style={{ marginLeft: theme.spacing(2) }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
}
