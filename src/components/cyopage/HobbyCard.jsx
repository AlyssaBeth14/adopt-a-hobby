import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios'





const HobbyCard = (props) => {
    // console.log(props);
    const navigate = useNavigate()

    const handleClick = () => {
    
        axios.get(`/api/hobby/${props.hobbyId}`)
        .then((res) => {
            console.log(res.data)
            navigate(`/hobby/${props.hobbyId}`)
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