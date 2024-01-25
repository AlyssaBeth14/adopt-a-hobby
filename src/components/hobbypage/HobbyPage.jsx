import React from 'react'
import Supplies from './Supplies.jsx'
import TutorialCard from './TutorialCard.jsx'
import Map from './Map.jsx'
import { useLocation } from 'react-router-dom'

const HobbyPage = () => {

const location = useLocation()
const {hobbyImg, hobbyName} = location.state.hobby

  return (
    <div>
        <img src={hobbyImg} style={{width: '60%'}}/>

        <h1>{hobbyName}</h1>
        <Supplies />

        <h2>Tutorials</h2>
        <TutorialCard />

        <h2>Classes Near You</h2>
        <Map />

    </div>
  )

}

export default HobbyPage