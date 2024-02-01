import axios from 'axios'
import { useNavigate } from 'react-router'

const SelectButton = (props) => {
    const {hobbyName} = props
    const navigate = useNavigate()
    const handleSelect = () => {
        axios.get(`/api/hobby?hobbyName=${hobbyName}`)
        .then((res) => {
            const hobby = res.data
            navigate(`/hobby/${hobby.hobbyId}`, {state: {hobby}})
        })
    }
    return <button className='btn btn-primary' onClick={handleSelect}>Select</button>
}
export default SelectButton