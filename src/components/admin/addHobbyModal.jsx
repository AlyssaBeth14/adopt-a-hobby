import { Modal } from 'react-bootstrap'

const AddHobbyModal = (props) => {
    return (
        <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>Add Hobby</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.handleSubmit}>
                    <label className='form-label'>
                        Hobby Name
                        <input
                            type='text'
                            className='form-control'
                            // value={props.hobbyName}
                            onChange={(e) => props.setHobbyName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Hobby Image URL
                        <input
                            type='text'
                            className='form-control'
                            // value={props.hobbyImg}
                            onChange={(e) => props.setHobbyImg(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Category
                        <input
                            type='text'
                            className='form-control'
                            // value={props.category}
                            onChange={(e) => props.setHobbyCategory(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='form-label'>
                        Map Query
                        <input
                            type='text'
                            className='form-control'
                            // value={props.mapQuery}
                            onChange={(e) => props.setMapQuery(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default AddHobbyModal