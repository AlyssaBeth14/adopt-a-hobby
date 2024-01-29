import { React, useState, useEffect } from 'react'
import axios from 'axios'
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

  const [newSupply, setNewSupply] = useState("");
  const [allSupplies, setAllSupplies] = useState(supplies); 

  const [newTutorial, setNewTutorial] = useState("");
  const [allTutorials, setAllTutorials] = useState(tutorials); 


  // Save hobby function
  const saveFunction = () => {
    const bodyObj = {
      name: hobbyName,
      category: hobbyCategory,
      hobbyImg: hobbyImg,
      map: hobbyMapQuery,

    }
    // Axios put request to insert hobby data into database
    axios.put(`/api/hobby/${hobbyId}`, bodyObj)
      .then((res) => {
        setCurrentData(res.data)
        setIsEditing(false)
      })
  }

  // Delete hobby function
  const deleteHobby = () => {
    const confirmDelete = window.confirm('Sure want to delete Hobby?')
    if (confirmDelete) {
      axios.delete(`/api/hobby/${hobbyId}`)
        .then((res) => {
          setCurrentData(res.data)
          console.log(res.data);
        })
        .catch((error) => {
          console.error('Error deleting hobby:', error);
        })
    }
  }





// Delete tutorial function
// ...


  const addSupply = () => {
    if (newSupply.trim() !== "") {
      setAllSupplies([...allSupplies, { supplyName: newSupply, optional: false }]);
      setNewSupply("");
    }
  };

  const addTutorial = () => {
    if (newTutorial.trim() !== "") {
      setAllTutorials([...allTutorials, { tutorialName: newTutorial, optional: false }]);
      setNewTutorial("");
    }
  };




  const supply = supplies.map((sup) => {
    return <SuppliesCard
      key={sup.supplyId}
      supplyId={sup.supplyId}
      isEditing={isEditing}
      supplyName={sup.supplyName}
      optional={sup.optional}
      setSupplies={setSupplies}
    />
  })

  const tutorial = tutorials.map((tur) => {
    return <TutorialsCard
      key={tur.turtorialId}
      isEditing={isEditing}
      tutorialName={tur.tutorialName}
      tutorialLink={tur.tutorialLink}
      paid={tur.paid}
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


      <p>Supplies</p>
      {supply}


      <div className='textAndInput'>
        <input
          type="text"
          value={newSupply}
          onChange={(e) => setNewSupply(e.target.value)}
          placeholder="New Supply"
        />
        <button onClick={addSupply}>Add Supply</button>
      </div>



      <p>Turtorials</p>
      {tutorial}

      <div className='textAndInput'>
        <input
          type="text"
          value={newTutorial}
          onChange={(e) => setNewTutorial(e.target.value)}
          placeholder="New Tutorial"
        />
        <button onClick={addTutorial}>Add Tutorial</button>
      </div>

      <button class="ADCbutton" onClick={saveFunction}>Save</button>
    </>
  ) : (
    <>
      <br></br>
      <div class="full-width-line-top"></div>
      <button class="ADCbutton" onClick={() => { setIsEditing(true) }}>Edit</button>

      <button class="ADCbutton" onClick={() => deleteHobby()}>Delete</button>
      <br></br>
      <br></br>
      <img src={hobbyImg} alt={hobbyName} />
      <br></br>
      <br></br>
      <p>Name: {hobbyName}</p>
      <p>Category: {hobbyCategory}</p>
      <p>Map query: {hobbyMapQuery}</p>
      <br></br>
      <p>Supplies</p>
      {supply}
      <br></br>
      <br></br>
      <p>Turtorials</p>
      {tutorial}
      <br></br>
    </>
  )
}

export default AdminHobbyCard


























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
