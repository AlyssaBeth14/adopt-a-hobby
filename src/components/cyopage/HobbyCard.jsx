import React from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.hobbyImg} className="doctor-card-img" />
            <Card.Body>
                <Card.Title className='title'>{props.hobbyName}</Card.Title>
                <Button  className='viewButton' onClick={handleClick} >View Hobby</Button>
            </Card.Body>
        </Card>
    );
}
export default HobbyCard