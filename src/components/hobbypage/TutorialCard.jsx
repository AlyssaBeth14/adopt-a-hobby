import React from 'react'
import { useEffect, useState } from 'react'
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
        <div className='two-columns'>
            <div>
            </div>
            <div>
                <h4>FREE</h4>
                {freeTutorials}
            </div>
            <div>
                <h4>PAID</h4>
                {paidTutorials}
            </div>
            <div>
            </div>
         </div>
  )

}

export default TutorialCard