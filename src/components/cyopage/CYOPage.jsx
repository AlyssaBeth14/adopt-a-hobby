import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, animateScroll as scroll } from 'react-scroll';
import HobbyCard from './HobbyCard.jsx'
import './CYOPage.css'
import SearchBar from '../hobbypage/searchBar.jsx';

const CYOPage = () => {
    // Creating currentData useState & different category useStates
    const [currentData, setCurrentData] = useState([])          // Creating 'currentData' useState
    const [artList, setArtList] = useState([])                  // Creating useState for Art category    
    const [athleticsList, setAthleticsList] = useState([])      // ...
    const [craftsList, setCraftsList] = useState([])
    const [fashionList, setFashionList] = useState([])
    const [foodList, setFoodList] = useState([])
    const [outdoorsList, setOutdoorsList] = useState([])

    // Utilizing useEffect to execute artlist, fashionlist and other functions when page is loaded
    // Each of those functions renders a HobbyCard component(setArtList & setFashionList)
    useEffect(() => {
        axios.get(`/api/hobbies`)
            .then((res) => {
                setCurrentData(res.data)
                setArtList([])                                   // Executes setArtList when page loads (using useEffect)
                setAthleticsList([])                             // ...
                setCraftsList([])
                setFashionList([])
                setFoodList([])
                setOutdoorsList([])
            })
    }, [])

    // This useEffect executes 'categoryMap' function           // Why does this useEffect run while there is an other useEffect ?????
    useEffect(() => {
        categoryMap()
    }, [currentData])

    // categoryMap function that conducts different if statements. 
    const categoryMap = () => {
        const artCopy = [...artList]                            // Creating array called 'artCopy'. Utilizes spread operator to enable array to be added to
        const athleticsCopy = [...athleticsList]                // ...
        const craftsCopy = [...craftsList]
        const fashionCopy = [...fashionList]
        const foodCopy = [...foodList]
        const outdoorsCopy = [...outdoorsList]

        currentData.forEach((hobby) => {                        // Loops over each element, 'hobby', in the currentData variable
            if (hobby.category === 'Arts') {                    // If statement, that checks if the 'category' property is 'Arts'
                artCopy.push(                                   // Adds(pushes) additional HobbyCards to 'artCopy' variable'
                    <HobbyCard                                  // HobbyCard from HobbyCard component
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
            else if (hobby.category === 'Athletics') {
                athleticsCopy.push(
                    <HobbyCard
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
            else if (hobby.category === 'Crafts') {
                craftsCopy.push(
                    <HobbyCard
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
            else if (hobby.category === 'Fashion') {
                fashionCopy.push(
                    <HobbyCard
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
            else if (hobby.category === 'Food') {
                foodCopy.push(
                    <HobbyCard
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
            else if (hobby.category === 'Outdoors') {
                outdoorsCopy.push(
                    <HobbyCard
                        key={hobby.hobbyId}
                        hobbyId={hobby.hobbyId}
                        hobbyImg={hobby.hobbyImg}
                        hobbyName={hobby.hobbyName}
                    />
                )
            }
        })
        setArtList(artCopy)                                         // Executes 'setArtlist' function with artCopy variable (variable has all 'Art' HobbyCards)  ?????
        setAthleticsList(athleticsCopy)                             // ...
        setCraftsList(craftsCopy)
        setFashionList(fashionCopy)
        setFoodList(foodCopy)
        setOutdoorsList(outdoorsCopy)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const position = element.offsetTop;
            scroll.scrollTo(position, {
                duration: 300,
                smooth: 'easeInOutQuart',
            });
        }
    };

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
                <button onClick={() => scrollToSection('Crafts')}>Crafts</button>
                <button onClick={() => scrollToSection('Fashion')}>Fashion</button>
                <button onClick={() => scrollToSection('Food')}>Food</button>
                <button onClick={() => scrollToSection('Outdoors')}>Outdoors</button>
            </nav>
            <br></br>
            <br></br>
            <SearchBar />
            <br></br>
            <br></br>
            <div id="Arts" style={{ height: '40px', backgroundColor: 'lightred' }}>Art Section</div>
            <div class="full-width-line-top"></div>
            <div>{artList}</div>

            <div id="Athletics" style={{ height: '40px' }}>Athletics Section</div>
            <div class="full-width-line-top"></div>
            <div>{athleticsList}</div>

            <div id="Crafts" style={{ height: '40px' }}>Crafts Section</div>
            <div class="full-width-line-top"></div>
            <div>{craftsList}</div>

            <div id="Fashion" style={{ height: '40px' }}>Fashion Section</div>
            <div class="full-width-line-top"></div>
            <div>{fashionList}</div>

            <div id="Food" style={{ height: '40px' }}>Food Section</div>
            <div class="full-width-line-top"></div>
            <div>{foodList}</div>

            <div id="Outdoors" style={{ height: '40px' }}>Outdoors Section</div>
            <div class="full-width-line-top"></div>
            <div>{outdoorsList}</div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default CYOPage