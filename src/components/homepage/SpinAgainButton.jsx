const SpinAgainButton = (props) => {
    
    const {handleSpin} = props

    return <button className='btn btn-primary' onClick={handleSpin}>Spin Again</button> 
}

export default SpinAgainButton