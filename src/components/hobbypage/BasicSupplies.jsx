import React from 'react'
import { useLocation } from 'react-router-dom'

const BasicSupplies = () => {

 const location = useLocation()
 const {supplyName} = location.state.hobby

  return (
    <div>
    Basic Supply Name
    {/* {supplyName} */}
</div>
  )
}

export default BasicSupplies