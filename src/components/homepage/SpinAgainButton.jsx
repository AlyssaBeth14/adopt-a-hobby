const SpinAgainButton = (props) => {
    const {handleSpin} = props
    return <button className='btn redButton' onClick={handleSpin}>Spin Again</button> 
}

export default SpinAgainButton