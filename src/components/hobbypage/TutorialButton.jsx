import React from 'react'

const TutorialButton = (props) => {
const {tutorialImg, tutorialLink, tutorialName} = props

  return (
    <div>
        {/* <a href={tutorialLink} target='_blank'>
            <button>
                <img src={tutorialImg}/>
                <br/>
                {tutorialName}
            </button>
        </a> */}
    </div>
  )
}

export default TutorialButton