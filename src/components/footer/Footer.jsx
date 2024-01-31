import { useState } from 'react'
import HobbySuggestion from './HobbySuggestion.jsx'
import AdminLogin from './AdminLogin.jsx'

const Footer = () => {

    const [showSuggestModal, setShowSuggestModal] = useState(false)
    const [showAdminModal, setShowAdminModal] = useState(false)

    return (
        <footer className='bg-light text-center py-3 fixed-bottom'>
            <button className='btn btn-link' onClick={() => setShowSuggestModal(true)}>Suggest a hobby</button>
            <button className='btn btn-link' onClick={() => setShowAdminModal(true)}>Admin</button>

            <HobbySuggestion 
                showModal={showSuggestModal}
                setShowModal={setShowSuggestModal}
            />
            <AdminLogin
                showModal={showAdminModal}
                setShowModal={setShowAdminModal}
            />
        </footer>

    )
}

export default Footer