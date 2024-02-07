import React from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './CYOPage.css'

const HobbyCard = (props) => {                                      // HobbyCard function. Takes in 'props' from parent component 
    const navigate = useNavigate()                                  // useNavigate hook used to access navigation object      
    const handleClick = () => {                                     // handleClick function that executes when function is called (button is clicked)
        axios.get(`/api/hobby?hobbyId=${props.hobbyId}`)            // Axios get request from endpoint
            .then((res) => {
                // console.log(res.data)                                // Good location to console log data from axios get request from endpoint
                const hobby = res.data                                  // Defining hobby as the incoming res.data (response)
                navigate(`/hobby/${props.hobbyId}`, { state: { hobby } })    // navigate function used to navigate to specific route
            }
            )
    }

    return (
        <div className='card'>
            <img className="hobby-card-img" variant="top" src={props.hobbyImg} />
            <div>
                <div className='title'>{props.hobbyName}</div>
                <button className='viewButton' onClick={handleClick} >View Hobby</button>
            </div>
     
        </div >
    );
}
export default HobbyCard






