import { React, useState, useEffect } from 'react'
import axios from 'axios'
import SuppliesCard from './suppliesCard.jsx'
import TutorialsCard from './tutorialsCard.jsx'
import './admin.css'
import './adminHobbyCard.css'

function AdminHobbyCard(props) {
  const { setHobbyData } = props
  const [isEditing, setIsEditing] = useState(false)                         // Edit mode
  const [hobbyId, setHobbyId] = useState(props.hobbyId)                     // Hobby: hobbyId field
  const [currentHobby, setCurrentHobby] = useState()
  const [hobbyName, setHobbyName] = useState(props.hobbyName)               // Hobby: hobbyName field
  const [hobbyCategory, setHobbyCategory] = useState(props.category)        // Hobby: hobbyCategory field
  const [hobbyMapQuery, setHobbyMapQuery] = useState(props.hobbyMapQuery)   // Hobby: hobbyMapQuery field
  const [hobbyImg, setHobbyImg] = useState(props.hobbyImg)                  // Hobby: hobbyImg field
  const [supplyName, setSupplyName] = useState('')                          // Supply: optional field
  const [optional, setOptional] = useState(props.supplies.optional)         // Supply: optional field         (not being used)
  const [tutorialImg, setTutorialImg] = useState('')                        // Tutorial: tutorialImg field   
  const [tutorialName, setTutorialName] = useState('')                      // Tutorial: tutorialName field
  const [tutorialLink, setTutorialLink] = useState('')                      // Tutorial: tutorialLink field
  const [paid, setPaid] = useState('')                                      // Tutorial: paid field           (not being used)
  const [supplies, setSupplies] = useState(props.supplies)                  // Add supply
  const [tutorials, setTutorials] = useState(props.tutorials)               // Add tutorial

  // Save hobby function
  const saveFunction = () => {
    const bodyObj = {
      hobbyName: hobbyName,
      hobbyImg: hobbyImg,
      category: hobbyCategory,
      mapQuery: hobbyMapQuery,
    }

    // Axios put request to insert hobby data into database
    axios.put(`/api/hobby/${hobbyId}`, bodyObj)
      .then((res) => {
        setCurrentHobby(res.data)
        setIsEditing(false)
      })
  }

  // Delete hobby function
  const deleteHobby = () => {
    const confirmDelete = window.confirm('Sure want to delete Hobby?')
    if (confirmDelete) {
      axios.delete(`/api/hobby/${hobbyId}`)
        .then((res) => {
          setHobbyData(res.data)
          console.log(res.data)
        })
        .catch((error) => {
          console.error('Error deleting hobby:', error);
        })
    }
  }

  // Add Supply function: bodyObj & axios post request
  const addSupply = () => {
    const bodyObj = {
      hobbyId: hobbyId,
      supplyName: supplyName,
      optional: true
    }

    // Axios put request to insert supply data into database
    axios.post(`/api/supply`, bodyObj)
      .then((res) => {
        setSupplies(res.data)
        // console.log(res.data);
      })
  };

  // Add Tutorial function: bodyObj & axios post request
  const addTutorial = () => {
    const bodyObj = {
      hobbyId: hobbyId,
      tutorialImg: tutorialImg,
      tutorialName: tutorialName,
      tutorialLink: tutorialLink,
      paid: true
    }

    // Axios put request to insert turorial data into database
    axios.post(`/api/tutorial`, bodyObj)
      .then((res) => {
        setTutorials(res.data)
        // console.log(res.data);
      })
  };

  // Mapping over supply array for supply component
  const supply = supplies.map((sup) => {
    return <SuppliesCard
      key={sup.supplyId}
      supplyId={sup.supplyId}
      isEditing={isEditing}
      supplyName={sup.supplyName}
      optional={sup.optional}
      setSupplies={setSupplies}
      supplies={supplies}
      hobbyId={hobbyId}
    />
  })

  // Mapping over tutorial array for supply component
  const tutorial = tutorials.map((tur) => {
    return <TutorialsCard
      key={tur.tutorialId}
      tutorialId={tur.tutorialId}
      isEditing={isEditing}
      tutorialName={tur.tutorialName}
      tutorialLink={tur.tutorialLink}
      paid={tur.paid}
      setTutorials={setTutorials}
      tutorials={tutorials}
      hobbyId={hobbyId}
    />
  })

  // Return statement
  return (isEditing) ? (
    <>

      <div class="full-width-line-top"></div>
      <button class="S-button" onClick={saveFunction}>Save</button>



      <div className="container">

        <img className="image-size" src={hobbyImg} alt={hobbyName} />

        <p className="section-title">Hobby Details</p>
        <div className="input-container">
          <p>Name:</p>
          <input type="text" value={hobbyName} onChange={(e) => setHobbyName(e.target.value)} />
        </div>

        <div className="input-container">
          <p>Category:</p>
          <input type="text" value={hobbyCategory} onChange={(e) => setHobbyCategory(e.target.value)} />
        </div>

        <div className="input-container">
          <p>May query:</p>
          <input type="text" value={hobbyMapQuery} onChange={(e) => setHobbyMapQuery(e.target.value)} />
        </div>

        <div className="input-container">
          <p>Image Address Link:</p>
          <input type="text" value={hobbyImg} onChange={(e) => setHobbyImg(e.target.value)} />
        </div>


        <p className="section-title">Supplies</p>
        {supply}

        <div className='textAndInput2'>
          <input type="text" onChange={(e) => setSupplyName(e.target.value)} placeholder="New Supply" />
          <button className="S-button" onClick={addSupply}>Add Supply</button>
        </div>

        <p className="section-title">Tutorials</p>
        {tutorial}

        <div className='textAndInput2'>
          <input type="text" value={tutorialName} onChange={(e) => setTutorialName(e.target.value)} placeholder="New Tutorial" />
          <button className="S-button" onClick={addTutorial}>Add Tutorial</button>
        </div>


      </div>



    </>

  ) : (
    <>
      <div class="full-width-line-top"></div>
      <button class="E-button" onClick={() => { setIsEditing(true) }}>Edit</button>
      <button class="D-button" onClick={() => deleteHobby()}>Delete</button>


      <div className="container">

        <img className="image-size" src={hobbyImg} alt={hobbyName} />

        <div className="hobby-details">
          <p className="section-title">Hobby Details</p>
          <p>Name: {hobbyName}</p>
          <p>Category: {hobbyCategory}</p>
          <p>Map query: {hobbyMapQuery}</p>
          <p>Image Address Link: {hobbyImg}</p>
          <br></br>

          <p className="section-title">Supplies</p>
          {supply}
          <br></br>

          <p className="section-title">Tutorials</p>
          {tutorial}

        </div>

      </div>

      <br></br>
    </>
  )
}

export default AdminHobbyCard