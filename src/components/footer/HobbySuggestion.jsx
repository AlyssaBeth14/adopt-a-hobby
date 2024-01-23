import { Modal, Button } from 'react-bootstrap'

const HobbySuggestion = (props) => {

    const {showModal, setShowModal} = props

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
                <Modal.Title>Hobby Suggestion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>
                        Hobby Name
                        <input
                            type='text'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Basic Supplies
                        <input
                            type='text'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Optional Supplies
                        <input
                            type='text'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Tutorials
                        <input
                            type='text'
                            className='form-control'
                        />
                    </label>
                    <br/>
                    <button type='submit' className='btn btn-dark'>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default HobbySuggestion