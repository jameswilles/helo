import React, { Component } from 'react';

class Post extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      content: '',
      author: '',
      authorPicture: ''
    }
  }

  render() {
    return(
      <div className='post'>
        <p> Post </p>
      </div>
    )
  }
};

export default Post;