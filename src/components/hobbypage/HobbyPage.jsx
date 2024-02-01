import React from 'react'
import Supplies from './Supplies.jsx'
import TutorialCard from './TutorialCard.jsx'
import Map from './Map.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const HobbyPage = () => {


const location = useLocation()
const {hobbyId, hobbyImg, hobbyName, cost, Buys} = location.state.hobby

const navigate = useNavigate()
const handleClick = () => {
  navigate(`/hobby/${hobbyId}/where-to-buy`, {state: {Buys, hobbyId}})
}


  return (
    <div style={{marginTop: '20px'}}>
        <img src={hobbyImg} style={{width: '50%', maxHeight: '250px', objectFit: 'cover'}}/>

        <h1>{hobbyName}</h1>
        <h5>Cost: {cost}</h5>
        <hr />
        
        <Supplies />
        <button className='btn btn-link' onClick={handleClick}>Where to Buy</button>

        <h2>Tutorials</h2>
        <hr />
        <TutorialCard />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Classes Near You</h2>
        <hr />
        <Map />

    </div>
  )
}

export default HobbyPage