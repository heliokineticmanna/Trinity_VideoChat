import React from 'react';
// import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Calling = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className="neonText">Trinity App</div>
      <br></br>
      <div className="helptext"> If Your Webcam is not visible, please refresh the page</div>
      {/* <AppBar className={classes.appBar} position="static" color="yellow">
        <Typography variant="h2" align="center"></Typography>
      </AppBar> */}
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default Calling;
