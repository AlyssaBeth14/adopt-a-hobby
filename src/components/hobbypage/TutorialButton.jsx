import React from 'react'
import { useLocation } from 'react-router-dom'

const TutorialButton = () => {

    const location = useLocation()
    const {tutorialImg, tutorialLink, tutorialName} = location.state.hobby

  return (
    <div>
        <a href={tutorialLink} target='_blank'>
            <button>
                <img src={tutorialImg}/>
                <br/>
                {tutorialName}
            </button>
        </a>
    </div>
  )
}

export default TutorialButton