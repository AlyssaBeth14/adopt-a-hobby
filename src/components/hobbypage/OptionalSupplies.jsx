import React from 'react'
import { useLocation } from 'react-router-dom'

const OptionalSupplies = () => {

const location = useLocation()
const {supplyName} = location.state.hobby
 
    return (
    <div>
        Optional Supply Name
        {/* {supplyName} */}
    </div>
  )
}

export default OptionalSupplies