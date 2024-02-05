import React from 'react'
import './hobbypg.css'

const TutorialButton = ({ tutorialLink, tutorialImg, tutorialName }) => {

  return (
    <div>

        <a href={tutorialLink} target='_blank'>
            <button className='tutor-button'>
                <img src={tutorialImg} style={{ width: '100%' }}/>
                <br/>
                {tutorialName}
            </button>
        </a>

    </div>
  )
}

export default TutorialButton