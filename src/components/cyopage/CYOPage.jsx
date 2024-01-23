import HobbySuggestion from './HobbySuggestion.jsx'
import { useState } from 'react'

const CYOPage = () => {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <div>
            <h1>This is the CYO page</h1>

            <button onClick={handleClick}>Show Modal</button>
            <HobbySuggestion
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </div>
    )
}

export default CYOPage