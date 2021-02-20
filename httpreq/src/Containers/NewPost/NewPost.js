import React, { useState, useEffect } from 'react'
import classes from './NewPost.module.css'
import { Redirect } from 'react-router-dom'

const NewPost = (props) => {

    const[submitted, setSubmitted] = useState(false);

    useEffect( () => {
        setSubmitted(true);
    }, [])

    let redirect = null;
    if( submitted ) {
        redirect = <Redirect to="/posts"/>
    }


    return (
      <div className={classes.NewPost}>
          {redirect}
          <h1>Add a Post</h1>
          <h2>Title</h2>
        <input/>
            <h2>Content</h2>
          <input/>
          <h2>Author</h2>
          <select>
              <option value="Max">Max</option>
              <option value="Manu">Manu</option>
          </select>
          <button>Add Post</button>
      </div>
    );
}

export default NewPost;