import React from 'react'

const withClass = (props) => {
    return (
        <div className={props.cssClasses}>
            {props.children}
        </div>
    )
}

export default withClass;