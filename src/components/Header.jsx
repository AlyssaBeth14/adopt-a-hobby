import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <header>

      <img src='sale-removebg-preview.png' id='logo'/>

      <button onClick={() => navigate('/')} className='blueButton'>
        <img src='sale-removebg-preview.png' />
      </button>

    </header>
  )
}

export default Header