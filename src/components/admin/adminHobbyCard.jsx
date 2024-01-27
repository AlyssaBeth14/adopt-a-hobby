import { React, useState, useEffect } from 'react'
import './admin.css'
import SuppliesCard from './suppliesCard.jsx'
import TutorialsCard from './tutorialsCard.jsx'

function AdminHobbyCard(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [hobbyId, setHobbyId] = useState(props.hobbyId)
  const [hobbyImg, setHobbyImg] = useState(props.hobbyImg)
  const [hobbyName, setHobbyName] = useState(props.hobbyName)
  const [hobbyCategory, setHobbyCategory] = useState(props.category)
  const [hobbyMapQuery, setHobbyMapQuery] = useState(props.hobbyMapQuery)

  const [supplies, setSupplies] = useState(props.supplies)
  const [tutorials, setTutorials] = useState(props.tutorials)



  const supply = supplies.map((sup) => {
    return <SuppliesCard
      key={sup.supplyId}
      supplyName={sup.supplyName}
      optional={sup.optional}
    />
  })

  const tutorial = tutorials.map((tur) => {
    return <TutorialsCard
      key={tur.turtorialId}  
      tutorialName={tur.tutorialName}
      tutorialLink={tur.tutorialLink}
    />
  })

  return (isEditing) ? (
    <>
      <img src={hobbyImg} alt={hobbyName} />

      <br></br>
      <br></br>
      <br></br>

      <div className='textAndInput'>
        <p>Name:</p>
        <input
          type="text"
          value={hobbyName}
          onChange={(e) => setHobbyName(e.target.value)}
        />
      </div>

      <div className='textAndInput'>
        <p>Category:</p>
        <input
          type="text"
          value={hobbyCategory}
          onChange={(e) => setHobbyCategory(e.target.value)}
        />
      </div>

      <div className='textAndInput'>
        <p>May query:</p>
        <input
          type="text"
          value={hobbyMapQuery}
          onChange={(e) => setHobbyMapQuery(e.target.value)}
        />
      </div>
      <button class="ADCbutton" onClick={saveFunction}>Save</button>

    </>
  ) : (
    <>
      <br></br>
      <div class="full-width-line-top"></div>
      <button class="ADCbutton" onClick={() => setIsEditing(true)}>Edit</button>
      <button class="ADCbutton" onClick={() => deleteDoctor()}>Delete</button>
      <br></br>
      <br></br>
      <img src={hobbyImg} alt={hobbyName} />
      <p>Name: {hobbyName}</p>
      <p>Category: {hobbyCategory}</p>
      <p>Map query: {hobbyMapQuery}</p>
      <br></br>
      <p>Supplies</p>
      {supply}
      <p>Turtorials</p>
      {tutorial}
      <br></br>
    </>
  )
}

export default AdminHobbyCard
























// // Save doctor function
// const saveFunction = () => {
//   const bodyObj = {
//     name: hobbyName,
//     category: hobbyCategory,
//     hobbyImg: hobbyImg,

//   }
//   // Axios put request to insert doctor data into database
//   axios.put(`/api/hobby/${hobbyId}`, bodyObj)
//     .then((res) => {
//       setCurrentData(res.data)
//       setIsEditing(false)
//     })
// }

// // Delete doctor function
// const deleteHobby = () => {
//   const confirmDelete = window.confirm('Sure want to delete Hobby?')
//   if (confirmDelete) {
//     axios.delete(`/api/hobby/${hobbyId}`)
//       .then((res) => {
//         setCurrentData(res.data)
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.error('Error deleting hobby:', error);
//       })
//   }
// }
