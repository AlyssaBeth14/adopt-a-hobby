import { useNavigate } from 'react-router'

const CYOButton = () => {
    const navigate = useNavigate()

    const handleCYO = () => {
        navigate('/cyo-hobby')
    }

    return <button className='btn btn-primary' onClick={handleCYO}>Choose Your Own</button>
}

export default CYOButton