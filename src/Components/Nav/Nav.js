import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        {this.props.location.pathname !== '/'
        ? (<div>
            <Link to='/dashboard' className='link' > Home </Link>
            <Link to='/new' className='link' > New Post </Link>
            <Link to='/' className='link' > Logout </Link>
          </div>) : null}
      </div>
    )
  }
};

export default withRouter(Nav);