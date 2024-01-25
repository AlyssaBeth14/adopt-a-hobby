import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import BasicSupplies from './BasicSupplies.jsx'
import OptionalSupplies from './OptionalSupplies.jsx'

const Supplies = (props) => {

// const location = useLocation()
// const {hobbyId, supplyName} = location.state.hobby

// const [basicSupplies, setBasicSupplies] = useState([])
// const [optionalSupplies, setOptionalSupplies] = useState([])
// const {currentData, setCurrentData} = useState([])

// useEffect(() => {
//     supplyMap()}, [currentData])

// const supplyMap = () => {

//     currentData.forEach((el) => {
//         if(el.optional === false){
         
//         }
//         else if(el.optional === true){
          
//         }
//     })
//     setBasicSupplies()
//     setOptionalSupplies()
// }
// get supplies from table where hobbyid matches and optional is false
//get request?
//map through table that has been gotten and find where optional is false

//get supplies from table where hobbyid matches and optional is true
//get request?
//map through table that has been gotten and find where optional is true

// const basicSupplies = setCurrentData.map(() => {
//     key={hobbyId}
//     currentData={currentData}
//     setCurrentData={setCurrentData}
// })

// const optionalSupplies = setCurrentData.map(() => {
//     key={hobbyId}
//     currentData={currentData}
//     setCurrentData={setCurrentData}
// })


  return (
    <div>
        <div>
            <h4>Basic Supplies Needed:</h4>
            <BasicSupplies />
        </div>
        <div>
            <h4>Optional Supplies:</h4>
            <OptionalSupplies />
        </div>
    </div>
  )
}

export default Supplies