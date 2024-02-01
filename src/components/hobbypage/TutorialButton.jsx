import React from 'react'

const TutorialButton = ({ tutorialLink, tutorialImg, tutorialName }) => {

  return (
    <div>

        <a href={tutorialLink} target='_blank'>
            <button style={{backgroundColor: '#998100'}}>
                <img src={tutorialImg} style={{ width: '18rem' }}/>
                <br/>
                {tutorialName}
            </button>
        </a>

    </div>
  )
}

export default TutorialButton