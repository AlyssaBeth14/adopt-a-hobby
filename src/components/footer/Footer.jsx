import { useState } from 'react'
import HobbySuggestion from './HobbySuggestion.jsx'

const Footer = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <footer className='bg-dark text-light text-center py-3'>
            <a href='#' onClick={() => setShowModal(true)}>Suggestion</a>
            <HobbySuggestion 
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </footer>

    )
}

export default Footer