import React from 'react'
import { useState, useEffect } from 'react'

const Map = (props) => {

// const [location, setLocation] = useState([])
// const [query, setQuery] =useState([])
//useeffect needs to include query from table

// const query = setCurrentData.map((el) => {
    // key={el.hobbyId}
    // currentData={currentData}
    // setCurrentData={setCurrentData}
// })

  return (
    <div>Map
        <iframe
        width="600"
        height="450"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBrcfC_wydzdEysNg0NZvSVoq7026t7alc&q=oil+painting+classes+near+me" allowFullScreen
        >
        </iframe>

    </div>
  )
}

export default Map


// API key AIzaSyBrcfC_wydzdEysNg0NZvSVoq7026t7alc