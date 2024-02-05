import React from 'react'
import Supplies from './Supplies.jsx'
import TutorialCard from './TutorialCard.jsx'
import Map from './Map.jsx'
import { useLocation } from 'react-router-dom'
import './hobbypg.css'

const HobbyPage = () => {


const location = useLocation()
const {hobbyId, hobbyImg, hobbyName, cost} = location.state.hobby

  return (
    <div style={{marginTop: '20px'}}>
        <img src={hobbyImg} className='hobby-image'/>
        <br />
        <h1 style={{margin: '10px'}}>{hobbyName}</h1>
        <h4>Cost: {cost}</h4>
        <hr />
        
        <Supplies />
        <br />
        <h2>Tutorials</h2>
        <hr />
        <TutorialCard />
        <br />
        <br />
       
        <h2>Classes Near You</h2>
        <hr />
        <Map />

    </div>
  )
}

export default HobbyPage