import React from 'react'
import classes from './NewPost.module.css'

const newPost = () => {
    return (
      <div className={classes.NewPost}>
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

export default newPost;