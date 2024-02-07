import React from 'react'
import './hobbypg.css'

const TutorialButton = ({ tutorialLink, tutorialImg, tutorialName }) => {

  return (
    <div>

        <a href={tutorialLink} target='_blank'>
            <button className='tutor-button'>
                <img src={tutorialImg} style={{ width: '175px', height: '175px', objectFit: 'cover', borderRadius: '5px'}}/>
                <br/>
                {tutorialName}
            </button>
        </a>

    </div>
  )
}

export default TutorialButton