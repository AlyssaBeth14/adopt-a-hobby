import React from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './CYOPage.css'

const HobbyCard = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        axios.get(`/api/hobby?hobbyId=${props.hobbyId}`)
        .then((res) => {
            console.log(res.data)
            const hobby = res.data
            navigate(`/hobby/${props.hobbyId}`, {state:{hobby}})
        }
        )
    }

    return (
        <Card style={{ width: '25rem', marginBottom: '5rem', padding: '20px', border: '2px solid' }}>
            <Card.Img variant="top" src={props.hobbyImg} className="hobby-card-img" style={{ height: '300px' }} />
            <Card.Body>
                <div className='title'>{props.hobbyName}</div>
                <button className='viewButton' onClick={handleClick} >View Hobby</button>
            </Card.Body>

        </Card>
    );
}
export default HobbyCard