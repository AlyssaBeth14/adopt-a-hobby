import { useState, useEffect } from 'react'
import axios from 'axios'
import { Wheel } from 'react-custom-roulette'
import { Modal } from 'react-bootstrap'

const WheelSpinner = () => {
    
    const [mustSpin, setMustSpin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [spinResult, setSpinResult] = useState('')
    const [hobbies, setHobbies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/hobbies')
        .then((res) => {
            setHobbies(res.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    const handleSpin = () => {
        if (!mustSpin) {
            setMustSpin(true)
        }
    }

    const data = hobbies.map(hobby => ({
        option: hobby.hobbyName,
        style: {backgroundColors: 'green'}
    }))

    const prizeNumber = mustSpin ? Math.floor(Math.random() * data.length) : null

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div>
                        <Wheel
                            mustStartSpinning={mustSpin}
                            spinDuration={0.25}
                            prizeNumber={prizeNumber}
                            data={data}
                            backgroundColors={['#0066ff', '#33ccff']}
                            textColors={['black']}
                            fontSize={15}
                            onStopSpinning={() => {
                                setMustSpin(false)
                                setShowModal(true)
                                if (hobbies[prizeNumber] !== undefined) {
                                    setSpinResult(hobbies[prizeNumber])
                                }
                            }}
                        />
                    </div>
                    <button onClick={handleSpin} disabled={mustSpin}>
                        {mustSpin ? 'Spinning...' : 'Spin the Wheel'}
                    </button>

                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Your Hobby:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>{spinResult.hobbyName}</h4>
                            <img src={spinResult.hobbyImg} className='img-fluid'/>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </div>
    )
}

export default WheelSpinner