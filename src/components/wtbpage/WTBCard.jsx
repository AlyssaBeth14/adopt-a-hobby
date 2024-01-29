import React from 'react'

const WTBCard = ({buyLink, buyName, buyImg, owned}) => {
  return (
<div>
    <a href={buyLink} target='_blank'>
        <button>
            <img src={buyImg}/>
            <br/>
            {buyName}
            {owned}
        </button>
    </a>
</div>
  )
}

export default WTBCard