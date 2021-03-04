import React, { useState } from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import logo from "../../images/Group 45.svg"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

import "./Header.css"


const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow: 1,
    padding: "0.75rem 2rem",
    color:"#fff",
    display: "flex",
    shadows: ["none"]
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "rgb(0, 0, 0,)",
    fontSize: "1.2rem"
  },
  title: {
    flexGrow: 1,
    paddingRight: theme.spacing(-5)
  },
}));

const Header  = ({icon}) => {
  const classes = useStyles()

  return(
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <Link to="/" color="inherit">
            {icon}
          </Link>
        </IconButton>

        <IconButton className={classes.title}>
          <img src={logo} alt="logo"/>
        </IconButton>

        <div>
          <IconButton className={classes.menuButton} color="inherit">
            <SearchIcon/>
          </IconButton>
          <Link to="/checkout" color="inherit">
            <IconButton className={classes.menuButton}>
              <ShoppingCartIcon/>
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
