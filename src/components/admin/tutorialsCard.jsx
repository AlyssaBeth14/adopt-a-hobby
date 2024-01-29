import React from 'react'

const tutorialsCard = (props) => {
  return (
    <>
      <div>
        {props.tutorialName}
        {props.paid ? ": payment required" : ""}
        {props.isEditing && <button>Delete</button>}
        {/* <button class="ADCbutton" onClick={() => deleteDoctor()}>Delete</button> */}
      </div>
    </>
  )
}

export default tutorialsCard