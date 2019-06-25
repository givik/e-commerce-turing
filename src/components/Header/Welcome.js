import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOutUser } from '../../actions';

const Welcome = props => {
  if (!props.currentUser) {
    return (
      <div className="welcome">
        <React.Fragment>
          Hi!{' '}
          <Link to="/login" className="link">
            Sign in
          </Link>{' '}
          or{' '}
          <Link to="registration" className="link">
            Register
          </Link>
        </React.Fragment>
      </div>
    );
  } else {
    return (
      <div className="welcome">
        <React.Fragment>
          Hi
          <div className="dropdown">
            <button className="dropbtn">{props.currentUser.name}&#9662;</button>
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/orders">My Orders</Link>
              <Link to="/shipping">Shipping Address</Link>
            </div>
          </div>
          {'! '}
          <button
            onClick={() => {
              props.signOutUser();
              localStorage.removeItem('token');
              window.location = '/';
            }}
            className="logout"
          >
            Log Out
          </button>
        </React.Fragment>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

export default connect(
  mapStateToProps,
  { signOutUser }
)(Welcome);
