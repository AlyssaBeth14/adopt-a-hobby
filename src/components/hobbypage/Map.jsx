import React from 'react'
import { useLocation } from 'react-router-dom'

const Map = (props) => {
  const location = useLocation()
  const { mapQuery } = location.state.hobby
  const src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBrcfC_wydzdEysNg0NZvSVoq7026t7alc&q=${mapQuery}+near+me`

  return (

    <div style={{marginBottom:'80px', marginTop: '7px'}}>
        <iframe
        width="50%"

        height="450"
        src={src} allowFullScreen
      >
      </iframe>
    </div>
  )
}
export default Map
// API key AIzaSyBrcfC_wydzdEysNg0NZvSVoq7026t7alc