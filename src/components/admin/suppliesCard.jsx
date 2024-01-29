import { React, useState, useEffect } from 'react'
import axios from 'axios'

const SuppliesCard = (props) => {



// Delete supply function
const deleteSupply = () => {
  const confirmDelete = window.confirm('Sure want to delete supply?')
  if (confirmDelete) {
    axios.delete(`/api/supply/${props.supplyId}`)
      .then((res) => {
        props.setSupplies(res.data)
      })
      .catch((error) => {
        console.error('Error deleting supply:', error);
      })
  }
}




  return (
    <>
      <div>
      {props.supplyName}
      {props.optional ? ": Optional" : ""}


      {/* {props.isEditing && <button>Delete</button>} */}

      {props.isEditing && <button onClick={deleteSupply} >Delete</button>}


      </div>
    </>
  )
}

export default SuppliesCard





















