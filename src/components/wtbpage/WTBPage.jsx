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
            owned={el.owned}
            />
        )
    })
    setWtbCards(wtbCopy.sort(() => Math.random() - 0.5))
}

  return (
    <div className="container">
        <div className="heading">
            <h1 style={{marginTop: '40px'}}>WHERE TO BUY</h1>
            <hr />
        </div>
        <div className="column">
            <div className="dream">
                {wtbCards}
            </div>
        </div>
    </div>
  )
}

export default WTBPage