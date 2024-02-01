import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = (props) => {

    const {showModal, setShowModal} = props
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/admin')
        setShowModal(false)
    }

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>
                        Username
                        <input
                            type='text'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Password
                        <input
                            type='password'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <button type='submit' className='btn btn-dark'>Login</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default AdminLogin