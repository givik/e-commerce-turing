import React from 'react';
import { Link } from 'react-router-dom';

const Bag = () => {
  return (
    <div className="bag">
      <Link to="cart">
        <span className="icon">
          <span className="item-count">0</span>
        </span>
        <span className="amount">Your bag: $0.00</span>
      </Link>
    </div>
  );
};

export default Bag;
