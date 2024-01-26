import WTBCard from "./WTBCard.jsx";
import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const WTBPage = () => {

const location = useLocation()
const {hobbyId, Buys} = location.state

const [wtbCards, setWtbCards] = useState([])
const [currentData, setCurrentData] = useState(Buys)

useEffect(() => {
    wtbMap()}, [currentData])

const wtbMap = () => {
    const wtbCopy = []

    currentData.forEach((el) => {
        wtbCopy.push(
            <WTBCard 
            key={el.hobbyId}
            hobbyId={el.hobbyId}
            buyId={el.buyId}
            buyName={el.buyName}
            buyLink={el.buyLink}
            buyImg={el.buyImg}
            />
        )
    })
    setWtbCards(wtbCopy)
}

  return (
    <div>
    <h3>Where to Buy:</h3>
    <hr />
    {wtbCards}
    </div>
  )
}

export default WTBPage