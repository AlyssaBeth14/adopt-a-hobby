import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

const HobbySuggestion = (props) => {
    const { showModal, setShowModal } = props
    const [hobbyName, setHobbyName] = useState('')
    const [basicSupplies, setBasicSupplies] = useState('')
    const [optionalSupplies, setOptionalSupplies] = useState('')
    const [tutorials, setTutorials] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSuggestion = {
            hobbyName: hobbyName,
            basicSupplies: basicSupplies,
            optionalSupplies: optionalSupplies,
            tutorials: tutorials
        }
        axios.post('/api/suggestion', newSuggestion)
            .then((res) => {
                console.log(res.data)
                setShowModal(false)
            })
    }

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>Suggest a Hobby:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>
                        Hobby Name
                        <input
                            type='text'
                            className='form-control'
                            onChange={(e) => setHobbyName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Basic Supplies
                        <input
                            type='text'
                            className='form-control'
                            onChange={(e) => setBasicSupplies(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Optional Supplies
                        <input
                            type='text'
                            className='form-control'
                            onChange={(e) => setOptionalSupplies(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Tutorials
                        <input
                            type='text'
                            className='form-control'
                            onChange={(e) => setTutorials(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type='submit' className='btn yellowButton'>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}
export default HobbySuggestion