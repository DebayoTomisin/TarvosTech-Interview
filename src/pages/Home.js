import React, { useState } from "react"
import MenuIcon from '@material-ui/icons/Menu';

import Header from "../components/Header/Header"
import Card from "../components/ItemCard/ItemCard"

import BackHeader from "../components/BackHeader/BackHeader"
import data from "../components/data"

const Home = () => {
  return(
    <>
      <Header icon={<MenuIcon/>}/>
      {
        data.map((item) => {
          return(
            <Card key={item.id} item={item}/>
          )
        })
      }    
    </>
  )
}

export default Home
