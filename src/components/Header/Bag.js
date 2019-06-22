import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ecomerse from '../../apis/ecommerce';
import { getCartItems } from '../../actions';

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
  }

  async componentWillReceiveProps() {
    const responseAmount = await ecomerse.get(
      `/shoppingcart/totalAmount/${localStorage.getItem('cart_id')}`
    );

    this.setState({ amount: responseAmount.data.total_amount });
  }

  render() {
    return (
      <div className="bag">
        <Link to="cart">
          <span className="icon">
            <span className="item-count">{this.props.count}</span>
          </span>
          <span className="amount">Your bag: ${this.state.amount}</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: Object.values(state.cart).length };
};

export default connect(
  mapStateToProps,
  { getCartItems }
)(Bag);
