import React from 'react'

const WTBCard = ({buyLink, buyName, buyImg, owned}) => {

  return (
<div className='btn'>
    <a href={buyLink} target='_blank'>
        <button style={{backgroundColor: '#ad9a32', fontWeight: 'bold', width: '100%', padding: '1rem'}}>
            <div style={{backgroundColor: 'white', padding: '5px', borderRadius: '5px'}}>
            <img src={buyImg} style={{ width: '18rem' }}/>
            </div>
            <br/>
            <h4 style={{marginTop: '5px'}}>{buyName}</h4>
            <br/>
            {owned}
        </button> 
    </a>
</div>
  )
}

export default WTBCard