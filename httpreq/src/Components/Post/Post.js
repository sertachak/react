import React from 'react'

import classes from './Post.module.css'

const post = (props) => {
    return(
        <div className={classes.Post}>
            <h1>{props.title}</h1>
            <div className={classes.Author}>
                <div>{props.author}</div>
            </div>
        </div>
    );
}

export default post;