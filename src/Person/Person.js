import React from 'react'

const person = (props) => {
    return(
        <div>
            <p>Here are props {props.firstname}, {props.lesson} and lastly children {props.children}</p>
        </div>
    );
}

export default person