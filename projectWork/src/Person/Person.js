import React from 'react'
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>Here are props {props.firstname}, {props.lesson} and lastly children {props.children}</p>
            <input onChange={props.nameChange} value={props.firstname}/>
        </div>
    );
}

export default person