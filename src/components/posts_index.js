import React, { Component } from 'react';
import { connect } from 'react-router';
import { fetchPosts } from '../actions/index';
class PostsIndex extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts());
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index</div>;
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
