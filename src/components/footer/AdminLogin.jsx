import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = (props) => {

    const {showModal, setShowModal} = props
    const [adminName, setAdminName] = useState('')
    const [adminPass, setAdminPass] = useState('')
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault()

        const adminObject = {
            adminName,
            adminPass
        }

        axios.post('/api/admin', adminObject)
        .then((res) => {
            if (res.status === 200) {
                navigate('/admin')
                setShowModal(false)
            }
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    alert('Invalid admin credentials')
                } else if (error.response.status === 404) {
                    alert('Admin not found')
                }
            } else {
                console.log(error)
            }
        })
    }

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>
                        Username
                        <input
                            type='text'
                            className='form-control'
                            value={adminName}
                            onChange={(e) => setAdminName(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Password
                        <input
                            type='password'
                            className='form-control'
                            value={adminPass}
                            onChange={(e) => setAdminPass(e.target.value)}
                        />
                    </label>
                    <br/>
                    <button type='submit' className='btn yellowButton'>Login</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default AdminLogin