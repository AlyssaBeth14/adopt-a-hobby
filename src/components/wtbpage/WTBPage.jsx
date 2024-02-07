import WTBCard from "./WTBCard.jsx";
import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import './wtb.css'

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
    <div id='wtb-body' className="wtb">
        <div className="heading">
            <h1 style={{marginTop: '40px'}}>Where to Buy</h1>
            <hr />
        </div>
        <div className="container">
            <div className="button-container">
                {wtbCards}
            </div>
        </div>
    </div>
  )
}

export default WTBPage