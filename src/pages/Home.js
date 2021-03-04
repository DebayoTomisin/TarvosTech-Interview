import React, { useState } from "react"
import Header from "../components/Header/Header"
import Card from "../components/ItemCard/ItemCard"

import data from "../components/data"

const Home = () => {
  return(
    <>
      <Header/>
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
