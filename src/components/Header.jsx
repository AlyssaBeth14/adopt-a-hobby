import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <header >
      <button onClick={() => navigate('/cyo-hobby')} className='blueButton'>
        <img src='sale-removebg-preview.png' id='logo'/>
      </button>
    </header>
  )
}

export default Header