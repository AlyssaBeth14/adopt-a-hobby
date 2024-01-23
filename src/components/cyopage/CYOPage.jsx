import { useState } from 'react'
import axios from 'axios'
import HobbySuggestion from './HobbySuggestion.jsx'
import HobbyCard from './HobbyCard.jsx'

const CYOPage = () => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/hobbies/?category=arts')
            .then((res) => { setCurrentData(res.data) })
    }, [])


    const artsHobbyList = currentData.map((hobby) => (
        <HobbyCard
            key={hobby.hobbyId}
            hobbyName={hobby.hobbyName}
            hobbyImg={hobby.hobbyImg}
            id={hobby.hobbyId}
        />
    ))


    return (
        <>
            <p>Arts</p>
            <div class="full-width-line-top"></div>
            <div>{artsHobbyList}</div>
        </>
    )
}

export default CYOPage