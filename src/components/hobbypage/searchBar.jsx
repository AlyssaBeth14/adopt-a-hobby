import { React, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import data from '../../../server/db/data/search.json'
import './searchBar.css'


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
            <div className="text-input-button" >
                <div id="search-container">
                    <h1 id="search" >Find a Hobby</h1>
                    <div className="input-container">
                        <input className="input-box" type="text" value={value} onChange={onChange} />
                        <button className="search-button" onClick={() => onSearch(value)}>Search</button>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default SearchBar