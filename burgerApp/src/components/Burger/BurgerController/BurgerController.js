import React from 'react'
import classes from './BurgerController.module.css'
import BuildControl from '../BurgerController/BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad' },
    {label:'Meat', type:'meat' },
    {label:'Cheese', type:'cheese' },
    {label:'Bacon', type:'bacon' }
]

const burgerController = (props) => {
    return(
        <div className={classes.BurgerController}>
            {controls.map( (control) => {
                return <BuildControl
                    label={control.label}
                    type={control.type}
                    added={() => props.addingIngredients(control.type)}
                    removed={() => props.removingIngredients(control.type)}
                    disabledControl={props.disabledControl[control.type]}/>
            })}
        </div>

    );

}

export default burgerController;