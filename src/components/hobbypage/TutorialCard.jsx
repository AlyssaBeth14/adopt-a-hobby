import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import TutorialButton from './TutorialButton.jsx'

const TutorialCard = (props) => {

// const {currentData, setCurrentData} = props

// const freeTutorials = currentData.map((el) => 
// <TutorialButton 
// key={el.hobbyId}
// currentData={currentData}
// setCurrentData={setCurrentData}
// />
// )

// const paidTutorials = currentData.map((el) =>
// <TutorialButton 
// key={el.hobbyId}
// currentData={currentData}
// setCurrentData={setCurrentData}
// />
// )

  return (
    //map get tutorials with matching hobby id where paid is false
    //get name, image, link

    //map get tutorials with matching hobby id where paid is true
    //get name, image, link

    //get 
    <div>
        <h4>Free</h4>
        {/* {freeTutorials} */}

        <h4>Paid</h4>
        {/* {paidTutorials} */}
     </div>
  )
}

export default TutorialCard