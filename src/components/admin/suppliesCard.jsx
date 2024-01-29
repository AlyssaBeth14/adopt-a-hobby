import { React, useState, useEffect } from 'react'
import axios from 'axios'

const SuppliesCard = (props) => {

// Delete supply function
const deleteSupply = () => {
  const confirmDelete = window.confirm('Sure want to delete supply?')
  if (confirmDelete) {

    // const hobbyWork = {
    //   hobbyId: props.hobbyId
    // }

    axios.delete(`/api/supply/${props.supplyId}?hobbyId=${props.hobbyId}`)
      .then((res) => {
        props.setSupplies(res.data)
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
      {props.supplyName}
      {props.optional ? ": Optional" : ""}
      {props.isEditing && <button onClick={deleteSupply} >Delete</button>}
      </div>
    </>
  )
}

export default SuppliesCard





















