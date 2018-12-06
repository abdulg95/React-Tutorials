import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  state = {
    posts: [],
    loading: true,
    error: null
  };  

  componentDidMount() {
    //pass in url for fake json posts to axios
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        // store posts in temp variable 
        let posts = res.data;
        // Update state with variable to trigger re-render.
        // change loading state to false.
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // catch any error found and save to state.
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  //loading placeholder
  renderLoading() {
    return <div>Loading...</div>;
  }
  //error message
  renderError() {
    return (
      <div>
        Error!: {this.state.error.message}
      </div>
    );
  }
  //reder posts if no error is caught
  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Here are some Posts</h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}


ReactDOM.render(
  <FetchDemo />,
  document.getElementById('root')
);
