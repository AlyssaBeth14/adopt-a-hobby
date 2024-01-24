import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './CYOPage.css'
import HobbyCard from './HobbyCard.jsx'

const CYOPage = () => {
    // Creating different useStates
    const [artList, setArtList] = useState([])                  // Creating useState for Art category    
    const [athleticsList, setAthleticsList] = useState([])      // Creating useState for Athletics category
    const [craftsList, setCraftsList] = useState([])            // Creating useState for Crafts category
    const [fashionList, setFashionList] = useState([])          // Creating useState for Fashion category
    const [foodList, setFoodList] = useState([])                // Creating useState for Food category
    const [outdoorsList, setOutdoorsList] = useState([])        // Creating useState for Outdoors category
    const [currentData, setCurrentData] = useState([])          // Creating 'currentData' useState

    // Utilizing useEffect to execute artlist, fashionlist and other functions when page is loaded
    // Each of those functions renders a HobbyCard component(setArtList & setFashionList)
    useEffect(() => {
        axios.get(`/hobbies`)
            .then((res) => {
                setCurrentData(res.data)
                setArtList([])                                   // Executes the setArtList when the page loads (using useEffect)
                setAthleticsList([])  
                setCraftsList([])
                setFashionList([]) 
                setFoodList([])   
                setOutdoorsList([])                               
            })
    }, [])

    // This useEffect executes 'categoryMap' function           // Why does this useEffect run while there is an other useEffect ?????
    useEffect(() => {
        categoryMap()}, [currentData])

    // categoryMap function that conducts different if statements. 
    const categoryMap = () => {
        const artCopy = [...artList]                            // Creating array called 'artCopy'. Utilizes spread operator to enable array to be added to
        const athleticsCopy = [...athleticsList]                // ...
        const craftsCopy = [...craftsList]                      // ...
        const fashionCopy = [...fashionList]                    // ...
        const foodCopy = [...foodList]                          // ...
        const outdoorsCopy = [...outdoorsList]                  // ...

        currentData.forEach((hobby) => {                        // Loops over each element, 'hobby', in the currentData variable

            if (hobby.category === 'Arts') {                    // If statement, that checks if the 'category' property is 'Arts'
                artCopy.push(                                   // Adds(pushes) additional HobbyCards to 'artCopy' variable'
                    <HobbyCard                                  // HobbyCard from HobbyCard component
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
            else if (hobby.category === 'Athletics') {            
                athleticsCopy.push(                               
                    <HobbyCard                                  
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
            else if (hobby.category === 'Crafts') {            
                craftsCopy.push(                               
                    <HobbyCard                                  
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
            else if (hobby.category === 'Fashion') {            
                fashionCopy.push(                               
                    <HobbyCard                                  
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
            else if (hobby.category === 'Food') {            
                foodCopy.push(                               
                    <HobbyCard                                  
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
            else if (hobby.category === 'Outdoors') {            
                outdoorsCopy.push(                               
                    <HobbyCard                                  
                        key = { hobby.id }
                        hobbyId = { hobby.id }
                        hobbyImg = { hobby.hobbyImg }
                        hobbyName = { hobby.hobbyName }
                        />
                )
            }
    })
    setArtList(artCopy)                                         // Executes 'setArtlist' function with artCopy variable (variable has all 'Art' HobbyCards)  ?????
    setAthleticsList(athleticsCopy)                             // ...
    setCraftsList(craftsCopy)                                   // ...
    setFashionList(fashionCopy)                                 // ...
    setFoodList(foodCopy)                                       // ...
    setOutdoorsList(outdoorsCopy)                               // ...         
    }

    return (
        <>

            <nav style={{
                position: 'fixed',
                top: '0',
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
                <button onClick={() => scrollToSection('Arts')}>Arts</button>
                <button onClick={() => scrollToSection('Athletics')}>Athletics</button>
            </nav>





            <br></br>
            <div id="Arts" style={{ height: '40px', backgroundColor: 'lightred' }}>Art Section</div>
            <div class="full-width-line-top"></div>
            <div>{artList}</div>

            <p>Athletics</p>          
            <div class="full-width-line-top"></div>
            <div>{athleticsList}</div>

            <p>Crafts</p>          
            <div class="full-width-line-top"></div>
            <div>{craftsList}</div>

            <p>Fashion</p>          
            <div class="full-width-line-top"></div>
            <div>{fashionList}</div>

            <p>Food</p>          
            <div class="full-width-line-top"></div>
            <div>{foodList}</div>

            <p>Outdoors</p>          
            <div class="full-width-line-top"></div>
            <div>{outdoorsList}</div>
        </>
    )
}

export default CYOPage