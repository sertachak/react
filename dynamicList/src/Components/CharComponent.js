import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return(
      <div className="CharComponent">
          <p onClick={props.deleteCharHandler}>{props.characterOfText}</p>
      </div>
    );
}

export default charComponent;