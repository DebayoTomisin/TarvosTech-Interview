import React, { useState } from "react"
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: "3rem"
  },
  menuButton: {
    marginRight: theme.spacing(-1),
    color: "rgb(0, 0, 0,)",
    fontSize: "1.2rem"
  },
  title: {
    flexGrow: 1,
  },
}));

export default function BackHeader() {
  const classes =  useStyles()

  return(
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <Link to="/">
            <ArrowBackIosIcon/>
            </Link> 
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Checkout
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
