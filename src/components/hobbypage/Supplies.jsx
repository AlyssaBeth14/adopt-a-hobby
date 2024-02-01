import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import SupplyName from './SupplyName.jsx'

const Supplies = () => {

const location = useLocation()
const {hobbyId, Supplies} = location.state.hobby

const [basicSupplies, setBasicSupplies] = useState([])
const [optionalSupplies, setOptionalSupplies] = useState([])
const [currentData, setCurrentData] = useState(Supplies)

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
        <div>
            <h4>Basic Supplies Needed:</h4>
            {basicSupplies}
        </div>
        <div>
            <h4>Optional Supplies:</h4>
            {optionalSupplies}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Supplies