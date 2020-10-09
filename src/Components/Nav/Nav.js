import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

class Nav extends Component {
  render() {
    // console.log(this.props)
    return(
      <div className='nav'>
        {this.props.location.pathname !== '/'
        ? (<div>
            <p> Hello {this.props.user.username} </p>
            <section className='nav-links'>
              <Link to='/dashboard' className='link' > Home </Link>
              <Link to='/new' className='link' > New Post </Link>
              <Link to='/' className='link' > Logout </Link>
            </section>
          </div>) : null}
      </div>
    )
  }
};

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(Nav));