import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Supplies = (props) => {

// const {currentData, setCurrentData} = props

// get supplies from table where hobbyid matches and optional is false
//get request?
//map through table that has been gotten and find where optional is false

//get supplies from table where hobbyid matches and optional is true
//get request?
//map through table that has been gotten and find where optional is true

// const basicSupplies = setCurrentData.map((el) => {
    // key={el.hobbyId}
    // currentData={currentData}
    // setCurrentData={setCurrentData}
// })

// const optionalSupplies = setCurrentData.map((el) => {
    // key={el.hobbyId}
    // currentData={currentData}
    // setCurrentData={setCurrentData}
// })


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