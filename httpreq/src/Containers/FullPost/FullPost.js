import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from '../../axios'

import classes from './FullPost.module.css'

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props)
       this.loadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadData()
    }

    loadData() {
        console.log('loadData')
        if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) )
        {
            axios.get('/posts/' + this.props.match.params.id)
                .then((response) => {
                    this.setState({loadedPost: response.data})
                })
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.id)
            .then( (response) => {
                console.log(response);
            })
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a post</p>
        if( this.props.match.params.id )
            post = <p style={{textAlign: 'center'}}>Loading</p>
        if( this.state.loadedPost )
        {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div>
                        <Link to='/'>
                            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                        </Link>
                    </div>
                </div>
            )
        }

        return post;
    }
}

export default FullPost;