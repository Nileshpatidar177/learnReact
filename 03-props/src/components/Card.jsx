import React from 'react'

const Card = (props) => {
  return (
    
        <div className="card">
            <img src="https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg" alt="pic" />
          <h1>{props.user}</h1>
          <p>{props.info}</p>
          <button>view profile</button>
          
    </div>
  )
}

export default Card
