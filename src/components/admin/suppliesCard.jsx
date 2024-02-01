import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './adminHobbyCard.css'


const SuppliesCard = (props) => {

  const [optional, setOptional] = useState(props.optional)


  // Delete supply function
  const deleteSupply = () => {
    const confirmDelete = window.confirm('Sure want to delete supply?')
    if (confirmDelete) {
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
        {optional ? ": Optional" : ""}
        {props.isEditing && <input type='checkbox' value={optional} checked={optional} onChange={handleChecked} />}
        {props.isEditing && <button className="D-button" onClick={deleteSupply} >Delete</button>}
      </div>
    </>
  )
}

export default SuppliesCard