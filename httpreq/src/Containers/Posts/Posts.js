import React, {Component} from 'react'
import classes from "./Posts.module.css";
import Post from "../../Components/Post/Post";
import axios from "../../axios";

class Posts extends Component{

    state = {
        posts: [],
        error: false
    }

    clickHandler = (id) => {
        this.props.history.push('/posts/' + id)
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
            this.setState({error:error})
        })
    }

    render(){

        let posts = <p>Something go wrong!!!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/posts/' + post.id} key={post.id}>
                        <Post
                            click={() => this.clickHandler(post.id)}
                            title={post.title}
                            author={post.author}/>
                    //</Link>
                )
            });
        }

        return(
            <div className={classes.Posts}>
                {posts}
            </div>
        );
    }
}

export default Posts;