import React, {Component} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'

import Posts from '../Posts/Posts'
import classes from './Blog.module.css'
import {Redirect} from "react-router"
import asyncComponent from "../../hoc/asyncComponenet";

const AsyncNewPost = asyncComponent( () => {
    return import('../NewPost/NewPost')
})

class Blog extends Component{

    state = {
        auth: true
    }

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
                    {this.state.auth? <Route path="/newPost" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Redirect to="/posts" from="/" />
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;