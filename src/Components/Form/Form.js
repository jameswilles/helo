import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      content: ''
    }
  }

  render() {
    return(
      <div className='form'>
        <p> Form </p>
      </div>
    )
  }
};

export default Form;