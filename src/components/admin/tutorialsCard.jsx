import { React, useState, useEffect } from 'react'
import axios from 'axios'

const TutorialsCard = (props) => {

  const [paid, setPaid] = useState(props.paid)

  // Delete supply function
  const deleteTutorial = () => {
    const confirmDelete = window.confirm('Sure want to delete supply?')
    if (confirmDelete) {

      axios.delete(`/api/tutorial/${props.tutorialId}?hobbyId=${props.hobbyId}`)
        .then((res) => {
          props.setTutorials(res.data)
          console.log(res.data);
        })
        .catch((error) => {
          console.error('Error deleting supply:', error);
        })
    }
  }

  const handleChecked = () => {
    axios.put(`/api/tutorial/${props.tutorialId}`, { paid: !paid })
      .then((res) => {
        const newTutorials = [...props.tutorials]
        for (let tutorial of newTutorials) {
          if (tutorial.tutorialId === res.data.tutorialId) {
            tutorial.paid = res.data.paid
            break
          }
        }
        props.setTutorials(newTutorials)
        setPaid(!paid)
      })
  }

  return (
    <>
      <div>
        {props.tutorialName}
        {!props.isEditing && paid ? ": Paid" : ""}
        <br/>
        {props.tutorialLink}
        <br/>
        {props.isEditing && 
          <label className='form-check-label'>
            Paid:
            <input 
              type='checkbox'
              className='form-check-input'
              value={paid} 
              checked={paid} 
              onChange={handleChecked} 
            />
          </label>}
        {props.isEditing && <button className="D-button" onClick={deleteTutorial}>Delete</button>}
      </div>
    </>
  )
}

export default TutorialsCard