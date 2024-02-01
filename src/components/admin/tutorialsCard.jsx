import { React, useState, useEffect } from 'react'
import axios from 'axios'

const TutorialsCard = (props) => {
  
  // Delete supply function
  const deleteSupply = () => {
    const confirmDelete = window.confirm('Sure want to delete supply?')
    if (confirmDelete) {
      axios.delete(`/api/tutorial/${props.tutroialId}?hobbyId=${props.hobbyId}`)
        .then((res) => {
          props.setTutorials(res.data)
          console.log(res.data);
        })
        .catch((error) => {
          console.error('Error deleting supply:', error);
        })
    }
  }

  return (
    <>
      <div>
        {props.tutorialName}
        {props.paid ? ": payment required" : ""}
        {props.isEditing && <button class="D-button" onClick={deleteSupply}>Delete</button>}
      </div>
    </>
  )
}

export default TutorialsCard