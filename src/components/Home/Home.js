import React from 'react';
import Categories from './Categories';
import Pagenation from './Pagenation';
import Products from './Products';

const Home = props => {
  return (
    <div className="home">
      <Categories history={props.match.params} />
      <div className="content">
        <Pagenation history={props.match.params} />
        <Products history={props.match.params} />
      </div>
    </div>
  );
};

export default Home;
