import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Modal } from 'react-bootstrap'

const data = [
    {option: 'Arts', style: { backgroundColor: 'blue'}},
    {option: 'Crafts', style: { backgroundColor: 'red'}},
    {option: 'Fashion', style: { backgroundColor: 'yellow'}},
    {option: 'Food', style: { backgroundColor: 'green'}}
]

const WheelSpinner = () => {
    
    const [mustSpin, setMustSpin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [spinResult, setSpinResult] = useState('')

    const handleSpin = () => {
        if (!mustSpin) {
            setMustSpin(true)
        }
    }

    const prizeNumber = mustSpin ? Math.floor(Math.random() * data.length) : null;

    return (
        <div>
            <Wheel
                mustStartSpinning={mustSpin}
                spinDuration={0.25}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['grey', 'green']}
                textColors={['black']}
                onStopSpinning={() => {
                    setMustSpin(false)
                    setShowModal(true)
                    console.log(data[prizeNumber].option)
                    setSpinResult(data[prizeNumber].option)
                }}
            />
            <button onClick={handleSpin} disabled={mustSpin}>
                {mustSpin ? 'Spinning...' : 'Spin the Wheel'}
            </button>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header>
                    <Modal.Title>Your Hobby:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{spinResult}</h4>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default WheelSpinner