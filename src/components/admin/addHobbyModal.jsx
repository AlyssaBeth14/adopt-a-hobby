import { Modal } from 'react-bootstrap'

const addHobbyModal = (props) => {
    return (
        <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Body>
                    <form>

                    </form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    )
}

export default addHobbyModal