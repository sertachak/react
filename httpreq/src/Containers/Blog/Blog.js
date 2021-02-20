import React, {Component} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'

import NewPost from '../NewPost/NewPost'
import Posts from '../Posts/Posts'
import classes from './Blog.module.css'
import {Redirect} from "react-router";

class Blog extends Component{

    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName={classes.aActiveStyle} to="/posts" exact>Home</NavLink></li>
                            <li><NavLink activeClassName={classes.aActiveStyle} to="/newPost">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/newPost" component={NewPost}/>
                    <Redirect to="/posts" from="/" />
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;