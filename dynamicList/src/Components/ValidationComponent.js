import React from 'react'

const validationComponent = (props) => {
    return (
        {...props.lengthOfText > 5 ?
        <div>
            <p>Text long enough</p>
        </div> :
        <div>
            <p>Text too short</p>
        </div>

        }
    );
}

export default validationComponent;