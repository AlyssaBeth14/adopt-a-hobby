import { useState } from 'react'
import HobbySuggestion from './HobbySuggestion.jsx'

const Footer = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <footer>
            <button
                onClick={() => setShowModal(true)}
            >Suggestion</button>
            <HobbySuggestion 
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </footer>

    )
}

export default Footer