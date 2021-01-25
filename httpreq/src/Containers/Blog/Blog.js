import React, {Component} from 'react'

import Post from '../../Components/Post/Post'
import classes from './Blog.module.css'
import axios from 'axios';

class Blog extends Component{

    state={
        posts: [],
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then( (res) => {
                const data = res.data.slice(0,4);
                const updatedData = data.map( data =>{
                    return {
                        ...data,
                        author:'Man on the Run'
                    }
                })
                this.setState({posts: updatedData})
            }).catch( error => {
                this.setState({error:true})
        })
    }

    render() {

        let posts = <p>Something go wrong!!!</p>
        if(!this.state.error) {
             posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author}/>
            });
        }

        return(
            <div className={classes.Posts}>
                {posts}
            </div>
        );
    }
}

export default Blog;