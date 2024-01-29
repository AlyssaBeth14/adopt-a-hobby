import { React, useState, useEffect } from 'react'
import axios from 'axios'
import AdminHobbyCard from './adminHobbyCard.jsx'
import './admin.css'

const Admin = () => {
    const [hobbyData, setHobbyData] = useState([])         
   
    useEffect(() => {
        axios.get(`/api/hobbies`)
            .then((res) => {
                setHobbyData(res.data)
            })
    }, [])

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