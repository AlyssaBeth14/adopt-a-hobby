import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import './searchBar.css'
import data from '../../../server/db/data/search.json'

function SearchBar() {

    const [value, setValue] = useState('')
    
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const navigate = useNavigate()

    const onSearch = (searchTerm) => {
        axios.get(`/api/hobby/?hobbyName=${searchTerm}`)
        .then((res) => {
            console.log(res.data)
            const hobby = res.data
            navigate(`/hobby/${props.hobbyId}`, {state:{hobby}})
        }
        )
        setValue(searchTerm)
        console.log(searchTerm);
    }


    return (
        <>
            <h1>Search bar</h1>
            <input type="text" value={value} onChange={onChange}/>
            <button onClick={() => onSearch(value)}>Search</button>
            <div className="dropdown">
                {data.filter(item => {
                    const searchTerm = value.toLowerCase()
                    const fullName = item.hobbyName.toLowerCase()
                    return searchTerm && fullName.startsWith(searchTerm) && fullName !==searchTerm
                })
                .map((item)=> (
                    <div onClick={() => onSearch(item.hobbyName)} searchclassName="dropdown-row"  key={item.hobbyName}>
                        {item.hobbyName}
                    </div>
                )) }
            </div>
        </>
    )
}

export default SearchBar