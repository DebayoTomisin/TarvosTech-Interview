import React, { useState } from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import logo from "../../images/Group 45.svg"
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

import "./Header.css"
import { Icon } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow: 1,
    padding: "0.75rem 2rem",
    color:"#fff",
    display: "flex",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    flexGrow: 1,
    paddingRight: theme.spacing(12)
  },
}));

const Header  = () => {
  const classes = useStyles()

  return(
    <AppBar position="static" color="#fff">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon/>
        </IconButton>

        <IconButton className={classes.title}>
          <img src={logo} alt="logo"/>
        </IconButton>

        <IconButton></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
