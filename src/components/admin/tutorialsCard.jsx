import { React, useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

const TutorialsCard = (props) => {

  const [paid, setPaid] = useState(props.paid)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // Delete supply function
  const deleteTutorial = () => {
    axios.delete(`/api/tutorial/${props.tutorialId}?hobbyId=${props.hobbyId}`)
      .then((res) => {
        props.setTutorials(res.data)
        setShowDeleteModal(false)
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error deleting supply:', error);
      })
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
        {props.isEditing && <button className="D-button" onClick={() => setShowDeleteModal(true)}>Delete</button>}
      </div>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title>Delete Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Do you want to delete "{props.tutorialName}"?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark' onClick={() => setShowDeleteModal(false)}>Cancel</button>
          <button className='btn redButton' onClick={deleteTutorial}>Delete</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TutorialsCard