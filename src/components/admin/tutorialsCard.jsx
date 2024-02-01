import { React, useState, useEffect } from 'react'
import axios from 'axios'

const TutorialsCard = (props) => {

  const [paid, setPaid] = useState(props.paid)

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
        {paid ? ": payment required" : ""}
        {props.isEditing && <input type='checkbox' value={paid} checked={paid} onChange={handleChecked}/>}
        {props.isEditing && <button onClick={deleteSupply}>Delete</button>}
      </div>
    </>
  )
}

export default TutorialsCard