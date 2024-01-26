import React from 'react'

const TutorialButton = ({tutorialLink, tutorialImg, tutorialName}) => {

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