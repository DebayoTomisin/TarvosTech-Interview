import React, { useState } from "react"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { makeStyles } from "@material-ui/core"

import {useGlobalContext} from "../context"
import Header from "../components/Header/Header"
import Card from "../components/ItemCard/ItemCard"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    overflow: "hidden",
    bakgroundColor: theme.palette.background.paper
  },
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  image : {
    display: "block",
    margin: "auto",
    width: "50%",
    height: "50%",
    left:"unset",
    top:"45%",
    transform: "translateY(50%)",
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

const Mask = (props) => {
  
  const { items, getItem } = useGlobalContext()
  const [slug, setSlug] = useState(props.match.params.slug)
  const item = getItem(slug)
  console.log(item)

  return(
    <>
      <Header icon={<ArrowBackIosIcon/>}/>
      <div>
        <Card item={item}/>
      </div>
      
    </>
  )
}

export default Mask
