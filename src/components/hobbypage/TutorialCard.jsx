import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TutorialButton from './TutorialButton.jsx'
import { useLocation } from 'react-router-dom'

const TutorialCard = () => {

const location = useLocation()
const {hobbyId, Tutorials} = location.state.hobby
console.log(location.state);

const [freeTutorials, setFreeTutorials] = useState([])
const [paidTutorials, setPaidTutorials] = useState([])
const [currentData, setCurrentData] = useState(Tutorials)

useEffect(() => {
    tutorialMap()}, [currentData])

const tutorialMap = () => {
    const freeCopy = []
    const paidCopy = []

    currentData.forEach((el) => {
        if(el.paid === false){
            freeCopy.push(
                <TutorialButton 
                key={el.hobbyId}
                hobbyId={el.hobbyId}
                tutorialId={el.tutorialId}
                tutorialName={el.tutorialName}
                tutorialLink={el.tutorialLink}
                tutorialImg={el.tutorialImg}
                />
            )
        }
        else if(el.paid === true){
            paidCopy.push(
                <TutorialButton
                key={el.hobbyId}
                hobbyId={el.hobbyId}
                tutorialId={el.tutorialId}
                tutorialName={el.tutorialName}
                tutorialLink={el.tutorialLink}
                tutorialImg={el.tutorialImg}
                />  
            )
        }
    })
    setFreeTutorials(freeCopy)
    setPaidTutorials(paidCopy)
}



  return (
    <div>
        <h4>Free</h4>
        {freeTutorials}

        <h4>Paid</h4>
        {paidTutorials}
     </div>
  )
}

export default TutorialCard