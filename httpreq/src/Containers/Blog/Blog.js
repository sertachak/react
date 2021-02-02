import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'

import NewPost from '../NewPost/NewPost'
import Posts from '../Posts/Posts'
import classes from './Blog.module.css'

class Blog extends Component{

    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName={classes.aActiveStyle} to="/" exact>Home</NavLink></li>
                            <li><NavLink activeClassName={classes.aActiveStyle} to="/newPost">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/newPost" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;