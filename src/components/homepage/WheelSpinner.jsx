import { useState, useEffect } from 'react'
import axios from 'axios'
import { Wheel } from 'react-custom-roulette'
import { Modal } from 'react-bootstrap'
import CYOButton from './CYOButton.jsx'
import SpinAgainButton from './SpinAgainButton.jsx'
import SelectButton from './SelectButton.jsx'

const WheelSpinner = () => {
    
    const [mustSpin, setMustSpin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [spinResult, setSpinResult] = useState('')
    const [hobbies, setHobbies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/hobbies')
        .then((res) => {
            const shuffledHobbies = [...res.data].sort(() => Math.random() - 0.5)
            const randomSubset = shuffledHobbies.slice(0, 8)
            setHobbies(randomSubset)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    const handleSpin = () => {
        if (!mustSpin) {
            setMustSpin(true)
            setShowModal(false)
        }
    }

    const data = hobbies.map(hobby => ({
        option: hobby.hobbyName
    }))

    const prizeNumber = mustSpin ? Math.floor(Math.random() * data.length) : null

    return (
        <div className='moveDown homeGutters background-fill'>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <CYOButton />
                    {/* <br/> */}
                    <h3>Or</h3>
                    {/* <br/> */}
                    <button className='btn redButton' onClick={handleSpin} disabled={mustSpin}>
                        {mustSpin ? 'Spinning...' : 'Spin the Wheel'}
                    </button>
                    {/* <br/> */}
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='moveDown'>
                        <Wheel
                            mustStartSpinning={mustSpin}
                            spinDuration={0.25}
                            prizeNumber={prizeNumber}
                            data={data}
                            backgroundColors={['#7a221d', '#998100', '#953195', '#5f9ea0']}
                            outerBorderColor={'#242424'}
                            radiusLineColor={'#242424'}
                            textColors={['white']}
                            fontSize={15}
                            pointerProps={{
                                src: '\Paint-Brush-PNG.png',
                                style: {
                                    width: '25%',
                                    height: '25%',
                                }
                            }}
                            onStopSpinning={() => {
                                setMustSpin(false)
                                setShowModal(true)
                                if (hobbies[prizeNumber] !== undefined) {
                                    setSpinResult(hobbies[prizeNumber])
                                }
                            }}
                        />
                    </div>
                    <br/>

                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton className='modalHeader'>
                            <Modal.Title>Your Hobby:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>{spinResult.hobbyName}</h4>
                            <img src={spinResult.hobbyImg} className='img-fluid'/>
                        </Modal.Body>
                        <Modal.Footer>
                            <SelectButton
                                hobbyName={spinResult.hobbyName}
                            />
                            <SpinAgainButton
                                handleSpin={handleSpin}
                            />
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </div>
    )
}

export default WheelSpinner