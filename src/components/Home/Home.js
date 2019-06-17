import React from 'react';
import Categories from './Categories';
import Pagenation from './Pagenation';
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
      <Categories />
      <div className="content">
        <Pagenation />
        <Products />
      </div>
    </div>
  );
};

export default Home;
