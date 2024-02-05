import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, animateScroll as scroll } from 'react-scroll';
import HobbyCard from './HobbyCard.jsx'
import SearchBar from '../hobbypage/searchBar.jsx';
import './CYOPage.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaintBrush, faRunning, faScissors, faTshirt, faUtensils, faTree } from '@fortawesome/free-solid-svg-icons';


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
            const position = element.getBoundingClientRect().top + window.scrollY - 300;
            scroll.scrollTo(position, {
                duration: 300,
                smooth: 'easeInOutQuart',
            });
        }
    };

    return (
        <>
            <br></br>
            <br></br>
            <div className="sticky-container">
                <SearchBar />
                <div className="icon-button-container">
                    <button className="myButton" onClick={() => scrollToSection('Arts')}><FontAwesomeIcon icon={faPaintBrush} className="custom-icon-size" />Arts</button>
                    <button className="myButton" onClick={() => scrollToSection('Athletics')}><FontAwesomeIcon icon={faRunning} className="custom-icon-size" />Athletics</button>
                    <button className="myButton" onClick={() => scrollToSection('Crafts')}><FontAwesomeIcon icon={faScissors} className="custom-icon-size" />Crafts</button>
                    <button className="myButton" onClick={() => scrollToSection('Fashion')}><FontAwesomeIcon icon={faTshirt} className="custom-icon-size" />Fashion</button>
                    <button className="myButton" onClick={() => scrollToSection('Food')}><FontAwesomeIcon icon={faUtensils} className="custom-icon-size" />Food</button>
                    <button className="myButton" onClick={() => scrollToSection('Outdoors')}><FontAwesomeIcon icon={faTree} className="custom-icon-size" />Outdoors</button>
                </div>
            </div>
            <div class="full-width-line-top"></div>
            <div id='Arts' className='section-title-category'>Arts</div>
            <div className='hobby-list-container'>{artList}</div>

            <div class="full-width-line-top"></div>
            <div id='Athletics' className='section-title-category'>Athletics</div>
            <div className='hobby-list-container'>{athleticsList}</div>

            <div class="full-width-line-top"></div>
            <div id='Crafts' className='section-title-category'>Crafts</div>
            <div className='hobby-list-container'>{craftsList}</div>

            <div class="full-width-line-top"></div>
            <div id='Fashion' className='section-title-category' >Fashion</div>
            <div className='hobby-list-container'>{fashionList}</div>

            <div class="full-width-line-top"></div>
            <div id='Food' className='section-title-category' >Food</div>
            <div className='hobby-list-container'>{foodList}</div>

            <div class="full-width-line-top"></div>
            <div id='Outdoors' className='section-title-category'>Outdoors</div>
            <div className='hobby-list-container'>{outdoorsList}</div>


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