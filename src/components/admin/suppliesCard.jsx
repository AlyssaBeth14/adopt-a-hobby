import { React, useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import './adminHobbyCard.css'


const SuppliesCard = (props) => {

  const [optional, setOptional] = useState(props.optional)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


  // Delete supply function
  const deleteSupply = () => {
    axios.delete(`/api/supply/${props.supplyId}?hobbyId=${props.hobbyId}`)
      .then((res) => {
        props.setSupplies(res.data)
        setShowDeleteModal(false)
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error deleting supply:', error);
      })
  }

  const handleChecked = () => {
    axios.put(`/api/supply/${props.supplyId}`, { optional: !optional })
      .then((res) => {
        const newSupply = [...props.supplies]
        for (let supply of newSupply) {
          if (supply.supplyId === res.data.supplyId) {
            supply.optional = res.data.optional
            break
          }
        }
        props.setSupplies(newSupply)
        setOptional(!optional)
      })
  }

  return (
    <>
      <div>
        {props.supplyName}
        {!props.isEditing && optional ? ": Optional" : ""}
        <br/>
        {props.isEditing && 
        <label className='form-check-label'>
          Optional:
          <input 
            type='checkbox'
            className='form-check-input'
            value={optional} 
            checked={optional} 
            onChange={handleChecked} 
          />
        </label>}
        {props.isEditing && <button className="D-button" onClick={() => setShowDeleteModal(true)}>Delete</button>}
      </div>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title>Delete Supply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Do you want to delete "{props.supplyName}"?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark' onClick={() => setShowDeleteModal(false)}>Cancel</button>
          <button className='btn redButton' onClick={deleteSupply}>Delete</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SuppliesCard