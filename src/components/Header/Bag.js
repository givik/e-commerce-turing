import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ecomerse from '../../apis/ecommerce';
import { getCartItems, getTotalAmount } from '../../actions';

class Bag extends React.Component {
  state = { amount: 0 };

  async componentDidMount() {
    if (!localStorage.getItem('cart_id')) {
      const responseGenerate = await ecomerse.get(
        '/shoppingcart/generateUniqueId'
      );
      localStorage.setItem('cart_id', responseGenerate.data.cart_id);
    } else {
      this.props.getCartItems();
    }

    this.props.getTotalAmount();
  }

  render() {
    return (
      <div className="bag">
        <Link to="cart">
          <span className="icon">
            <span className="item-count">{this.props.count}</span>
          </span>
          <span className="amount">Your bag: ${this.props.totalAmount}</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: Object.values(state.cart).length,
    totalAmount: Object.values(state.totalAmount)
  };
};

export default connect(
  mapStateToProps,
  { getCartItems, getTotalAmount }
)(Bag);
