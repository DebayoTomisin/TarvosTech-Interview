import React, { useEffect, useState, useContext } from "react"
import data from "./components/data"

const ItemContext = React.createContext()

function ItemProvider({children}){

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(data)
  }, [data])

  const getItem = (slug) => {
    let tempItem = [...items]
    const item = tempItem.find((item) => item.slug === slug)
    return item
  }

  return(
    <ItemContext.Provider value={{items, getItem}}>{children}</ItemContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(ItemContext)
}

export { ItemProvider }
