import { useNavigate } from 'react-router'

const CYOButton = () => {
    const navigate = useNavigate()

    const handleCYO = () => {
        navigate('/cyo-hobby')
    }

    return <button className='btn purpleButton' onClick={handleCYO}>Choose Your Own Hobby</button>
}

export default CYOButton