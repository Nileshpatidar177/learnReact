import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        
        <div className="top">
          <img 
            src={props.clogo} 
            alt="company logo" 
          />
          
          <button>
            Save
          </button>
        </div>

        <div className="center">
          <h3>{props.company}</h3>
          <h2>Senior UI/UX Designer</h2>

          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
         <div>
          <h3>$120/hr</h3>
          <p>Indore, India</p>
         </div>
         <button>Apply Now</button>
        </div>

      </div>
  )
}

export default Card
