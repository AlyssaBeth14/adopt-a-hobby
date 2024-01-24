import React from 'react'
// import Map from 'Map.jsx'
import Supplies from './Supplies.jsx'
import TutorialCard from './TutorialCard.jsx'

const HobbyPage = () => {
  return (
    <div>
        <img src="https://cdn.shopify.com/s/files/1/1130/7582/files/acrylic_paint_or_oil_paint_600x600.webp?v=1692107088"/>

        <h1>Hobby Name</h1>
        <Supplies />

        <h2>Tutorials</h2>
        <TutorialCard />

        <h2>Classes Near You</h2>


    </div>
  )
}

export default HobbyPage