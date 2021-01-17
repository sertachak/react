import React from 'react'
import classes from './BurgerController.module.css'
import BuildControl from '../BurgerController/BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad' },
    {label:'Meat', type:'meat' },
    {label:'Cheese', type:'cheese' },
    {label:'Bacon', type:'bacon' }
]

const burgerController = () => {
    return(
        <div className={classes.BurgerController}>
            {controls.map( (control) => {
                return <BuildControl label={control.label} type={control.type}/>
            })}
        </div>

    );

}

export default burgerController;