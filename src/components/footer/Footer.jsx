import { useState } from 'react'
import HobbySuggestion from './HobbySuggestion.jsx'

const Footer = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <footer className='bg-dark text-light text-center py-4 fixed-bottom'>
            <button className='btn btn-link' onClick={() => setShowModal(true)}>Suggest a hobby</button>
            <HobbySuggestion 
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </footer>

    )
}

export default Footer