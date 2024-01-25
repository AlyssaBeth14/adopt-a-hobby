import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import BasicSupplies from './BasicSupplies.jsx'
import OptionalSupplies from './OptionalSupplies.jsx'

const Supplies = () => {

// const location = useLocation()
// const {hobbyId, supplyId, supplyName, optional} = location.state.hobby

// const [basicSupplies, setBasicSupplies] = useState([])
// const [optionalSupplies, setOptionalSupplies] = useState([])
// const {currentData, setCurrentData} = useState([])

// useEffect(() => {
//     supplyMap()}, [currentData])

// const supplyMap = () => {
//     const basicCopy = [...basicSupplies]
//     const optionalCopy = [...optionalSupplies]

//     currentData.forEach((el) => {
//         if(el.optional === false){
//             basicCopy.push(
//                 <BasicSupplies 
//                 key={el.hobbyId}
//                 hobbyId={el.hobbyId}
//                 supplyId={el.supplyId}
//                 supplyName={el.supplyName}
//                 />
//             )
//         }
//         else if(el.optional === true){
//             optionalCopy.push(
//                 <OptionalSupplies 
//                 key={el.hobbyId}
//                 hobbyId={el.hobbyId}
//                 supplyId={el.supplyId}
//                 supplyName={el.supplyName}
//                 />  
//             )
//         }
//     })
//     setBasicSupplies(basicCopy)
//     setOptionalSupplies(optionalCopy)
// }


  return (
    <div>
        <div>
            <h4>Basic Supplies Needed:</h4>
            {/* {basicSupplies} */}
        </div>
        <div>
            <h4>Optional Supplies:</h4>
            {/* {optionalSupplies} */}
        </div>
    </div>
  )
}

export default Supplies