import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }

  componentDidMount(){
    const {id} = this.props.user
    if(!this.props.user.username){
        this.props.history.push('/')
    } else {
    axios.get(`/api/posts/${id}`)
    .then(res => {
      this.setState({posts: res.data})
      // console.log(this.state)
  })
    .catch(err => console.log(err))
  }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const mappedPosts = this.state.posts.map((post, i) => (
      <div key={i} className='post-box'>
        <p> Title: {this.state.posts[i].title} </p>
        <p> Poster: {this.state.posts[i].username} </p>
      </div>
    ))
    return(
      <div className='dashboard'>
        <p> Dashboard </p>
        <input
          value={this.props.search}
          name='search'
          placeholder='Search'
          onChange={(e) => this.handleInput(e)} />
        <button> Search </button>
        <button> Reset </button>
        { mappedPosts }
      </div>
    )
  }
};

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);