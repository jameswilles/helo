import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        {this.props.location.pathname !== '/'
        ? (<div>
            <Link to='/dashboard' > Home </Link>
            <Link to='/new' > New Post </Link>
            <Link to='/' > Logout </Link>
          </div>) : null}
      </div>
    )
  }
};

export default withRouter(Nav);