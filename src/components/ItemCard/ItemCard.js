import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    overflow: "hidden",
    bakgroundColor: theme.palette.background.paper
  },
  gridList : {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent:"center",
  },
  image : {
    display: "block",
    margin: "auto",
    width: "50%",
    height: "auto",
  },
  title: {
    color: "rgba(0,0,0)",
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  titleBar: {
    background: 'transparent',
  },
}))


const Card = ({ item }) => {
  const {id, images, price, name, desc, backgroundColor} = item
  const classes =  useStyles()
  return(
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight="auto">
        <GridListTile
        key={id}
        cols={2}
        style = {{height:"40vh", backgroundColor: backgroundColor}}
        >
          <img src={images[0]} alt= {id} className={classes.image}/>
          <GridListTileBar
          title ={name} 
          subtitle=
          {
            <>
              <span style ={{ color: "#000" , fontWeight: 600, fontSize: "0.8rem" }}> N{price} </span>
              <span style ={{ color: "#000", fontWeight: 600 }}>{desc}</span>
            </>
          } 
          classes = {{root: classes.titleBar, title: classes.title}}
          actionIcon={
            <IconButton color="inherit">
              <FavoriteBorderIcon/>
            </IconButton>
          }
          />
        </GridListTile>
      </GridList>
    </div>
  )
}

export default Card
