import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import './searchBar.css'
import data from '../../../server/db/data/search.json'
import axios from 'axios';

function SearchBar() {
    const [value, setValue] = useState('')                                  // Creating value and setValue useStates
    const onChange = (event) => {                                           // Defining onChange function
        setValue(event.target.value)
    }
    const navigate = useNavigate()                                          // Bringing in useNavigate                              
    const onSearch = (searchTerm) => {                                      // Defining onSearch function w/ 'searchTerm' parameter
        axios.get(`/api/hobby/?hobbyName=${searchTerm}`)                    // Axios get to pull in data from endpoint
            .then((res) => {
                const hobby = res.data                                      // Creating 'hobby' variable that is the data results (res.data)
                navigate(`/hobby/${hobby.hobbyId}`, { state: { hobby } })   // Utilizing navigate to send to....
            })
    }

    return (
        <>
            <h1 id="search">Search Hobby</h1>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}>Search</button>
            <div className="dropdown">
                {data.filter(item => {
                    const searchTerm = value.toLowerCase()
                    const fullName = item.hobbyName.toLowerCase()
                    return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                })
                    .map((item) => (
                        <div onClick={() => setValue(item.hobbyName)} searchclassName="dropdown-row" key={item.hobbyName}>
                            {item.hobbyName}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default SearchBar