import React from 'react'
import { Button, Card } from 'react-bootstrap';

const HobbyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.hobbyImg} className="doctor-card-img" />
            <Card.Body>
                <Card.Title className='title'>{props.hobbyName}</Card.Title>
                <Button  className='viewButton' href={`/hobby/${props.hobbyId}`}>View Hobby</Button>
            </Card.Body>
        </Card>

    );
}
export default HobbyCard