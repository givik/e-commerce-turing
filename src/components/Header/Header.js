import React from 'react';

import Welcome from './Welcome';
import Menu from './Menu';
import Bag from './Bag';
import Logo from './Logo';
import Departments from './Departments';
import Search from './Search';

const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <Welcome />
        <Menu />
        <Bag />
      </div>
      <div className="bottom">
        <Logo />
        <Departments />
        <Search />
      </div>
    </div>
  );
};

export default Header;
