import React from 'react'

import LogoImg from '../../assets/logo/burger-logo.png'
import classes from './Logo.module.css'

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={LogoImg} alt="BurgerLogo"/>
        </div>

    );
}

export default logo;