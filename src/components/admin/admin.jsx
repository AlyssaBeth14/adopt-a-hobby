import { React, useState, useEffect } from 'react'
import axios from 'axios'
import AdminHobbyCard from './adminHobbyCard.jsx'
import AddHobbyModal from './addHobbyModal.jsx'
import './admin.css'

const Admin = () => {
    const [hobbyData, setHobbyData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [hobbyName, setHobbyName] = useState('')
    const [hobbyImg, setHobbyImg] = useState('')
    const [hobbyCategory, setHobbyCategory] = useState('')
    const [mapQuery, setMapQuery] = useState('')

    // Getting hobby data & making it avaialable for 'AdminHobbyCard' component
    useEffect(() => {
        axios.get(`/api/hobbies`)
            .then((res) => {
                setHobbyData(res.data)
            })
    }, [])

    // Add Hobby function: bodyObj & axios post request
    const addHobby = () => {
        setShowModal(true)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const bodyObj = {
            hobbyName: hobbyName,
            hobbyImg: hobbyImg,
            category: hobbyCategory,
            mapQuery: mapQuery
        }

        // Axios put request to insert hobby data into database
        axios.post(`/api/hobby`, bodyObj)
            .then((res) => {
                setHobbyData(res.data)
                setShowModal(false)
                console.log(res.data);
            })
    }

    const hobbies = hobbyData.map((hobby) => {
        return <AdminHobbyCard
            key={hobby.hobbyId}
            hobbyId={hobby.hobbyId}
            hobbyImg={hobby.hobbyImg}
            hobbyName={hobby.hobbyName}
            category={hobby.category}
            hobbyMapQuery={hobby.mapQuery}
            supplies={hobby.Supplies}
            tutorials={hobby.Tutorials}
            setHobbyData={setHobbyData}
        />
    })

    return (
        <>
            <div>Admin Page</div>
            <br></br>
            <div class="full-width-line-top"></div>
            <button class="ADCbutton" onClick={addHobby}>Add Hobby</button>
            <div>{hobbies}</div>
            <br></br>

            <AddHobbyModal
                showModal={showModal}
                setShowModal={setShowModal}
                setHobbyName={setHobbyName}
                setHobbyImg={setHobbyImg}
                setHobbyCategory={setHobbyCategory}
                setMapQuery={setMapQuery}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Admin