import axios from 'axios';
import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      password:''
    }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLogin = () => {
    const { username, password } = this.state;

    axios.post('/api/login', {username, password})
        .then(res => {
            // this.props.getUser(res.data);
            this.props.history.push('/dashboard');
        })
        .catch(err => console.log(err));
  }

  handleRegister = () => {
    const { username, password } = this.state;

    axios.post('/api/register', { username, password })
    .then(this.props.history.push('/dashboard'))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div className='auth'>
        <section className='inputs'>
          <input 
            placeholder='username'
            name='username'
            value={this.state.username}
            onChange={(e) => this.handleInput(e)} />
          <input 
            placeholder='password'
            type='password'
            name='password'
            value={this.state.password}
            onChange={(e) => this.handleInput(e)} />
        </section>
        <section className='buttons'>
          <button onClick={this.handleLogin}> Login </button>
          <button onClick={this.handleRegister}> Register </button>
        </section>
      </div>
    )
  }
};

export default Auth;