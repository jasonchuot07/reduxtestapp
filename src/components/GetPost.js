import React, { Component } from 'react'

class GetPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    // This will launch when the app launch
    // Fetch API from ...
    componentWillMount() {

        // Fetching API, then results = results.map through all the json objects, then in data, which is all the json objects, the setState function above is going to be all the data objects
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>this.setState({posts: data}))
    }

    render() {
        const items = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                { items }
            </div>
        )
    }
}

export default GetPost;
