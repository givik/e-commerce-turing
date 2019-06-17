import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      Hi!{' '}
      <Link to="/login" className="link">
        Sign in
      </Link>{' '}
      or{' '}
      <Link to="registration" className="link">
        Register
      </Link>
    </div>
  );
};

export default Welcome;
