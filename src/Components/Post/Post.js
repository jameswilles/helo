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
        <p> Title: {this.state.title} </p>
        <img src={this.state.img} alt='helo imgage' />
        <p> Content: {this.state.contnt} </p>
        <p> Author: {this.state.author} </p>
        <img src={this.state.authorPicture} alt='user image' />
      </div>
    )
  }
};

export default Post;