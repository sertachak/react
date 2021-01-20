import React from 'react'

import Aux from '../../../hoc/Auxilary'

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map( (ingKey) => {
        return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}</li>
    })
    return(
         <Aux>
             <ul>{summary}</ul>
         </Aux>
    );
}

export default orderSummary;