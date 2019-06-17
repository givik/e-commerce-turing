import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <span className="branding" />
      </Link>
    </div>
  );
};

export default Logo;
