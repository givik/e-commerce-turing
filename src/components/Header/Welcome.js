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
          Hi {props.currentUser.name}
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
