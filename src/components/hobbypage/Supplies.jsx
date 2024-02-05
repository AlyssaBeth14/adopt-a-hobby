import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import SupplyName from './SupplyName.jsx'

const Supplies = () => {


const location = useLocation()
const {hobbyId, Supplies, Buys} = location.state.hobby

const [basicSupplies, setBasicSupplies] = useState([])
const [optionalSupplies, setOptionalSupplies] = useState([])
const [currentData, setCurrentData] = useState(Supplies)

const navigate = useNavigate()
const handleClick = () => {
  navigate(`/hobby/${hobbyId}/where-to-buy`, {state: {Buys, hobbyId}})
}

useEffect(() => {
    supplyMap()}, [currentData])

const supplyMap = () => {
    const basicCopy = []
    const optionalCopy = []

    currentData.forEach((el) => {
        if(el.optional === false){
            basicCopy.push(
                <SupplyName 
                key={el.hobbyId}
                hobbyId={el.hobbyId}
                supplyId={el.supplyId}
                supplyName={el.supplyName}
                />
            )
        }
        else if(el.optional === true){
            optionalCopy.push(
                <SupplyName 
                key={el.hobbyId}
                hobbyId={el.hobbyId}
                supplyId={el.supplyId}
                supplyName={el.supplyName}
                />  
            )
        }
    })
    setBasicSupplies(basicCopy)
    setOptionalSupplies(optionalCopy)
}


  return (
    <div className='two-columns'>
        <div>
        </div>
        <div className='supplies'>
            <h4>Basic Supplies Needed:</h4>
            {basicSupplies}
        </div>
        <div className='supplies'>  
            <h4>Optional Supplies:</h4>
            {optionalSupplies}
            <br />
            <button className='btn btn-link' onClick={handleClick}>Where to Buy</button>
        </div>
        <div>
        </div>
    </div>
  )

}

export default Supplies