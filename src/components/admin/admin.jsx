import { React, useState, useEffect } from 'react'
import axios from 'axios'
import AdminHobbyCard from './adminHobbyCard.jsx'
import './admin.css'

const Admin = () => {
    const [hobbyData, setHobbyData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [hobby, setHobby] = useState()                 // Add hobby

    // Getting hobby data & making it avaialable for 'AdminHobbyCard' component
    useEffect(() => {
        axios.get(`/api/hobbies`)
            .then((res) => {
                setHobbyData(res.data)
            })
    }, [])

    // Add Hobby function: bodyObj & axios post request
    const addHobby = () => {
        const bodyObj = {
            hobbyName: 'hobbyName',
            hobbyImg: 'hobbyImg',
            category: 'hobbyCategory',
            mapQuery: 'hobbyMapQuery',
        }

        // Axios put request to insert hobby data into database
        axios.post(`/api/hobby`, bodyObj)
            .then((res) => {
                setHobbyData(res.data)
                console.log(res.data);
            })
    };

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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Admin