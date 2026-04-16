import React from 'react'

const Card = (props) => {
  return (
    
        <div className="card">
            <img src={props.img} alt="pic" />
          <h1>{props.user}</h1>
          <p>{props.info}</p>
          <button>view profile</button>
          
    </div>
  )
}

export default Card
