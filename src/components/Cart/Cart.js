import React from 'react';
import { connect } from 'react-redux';
import { getCartItems, removeItem, createOrder } from '../../actions';
import { IMG_URL } from '../../apis/ecommerce';

class Cart extends React.Component {
  componentDidMount() {
    // this.props.getCartItems();
  }

  render() {
    return (
      <div className="cart">
        <h2>Item(s) In Your Cart</h2>
        <div className="place-order">
          <button onClick={this.props.createOrder}>Place an order</button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Attributes</th>
              <th>Quantity</th>
              <th>Price</th>
              <th />
            </tr>
            {this.props.items.map(item => {
              return (
                <tr className="cart-item" key={item.item_id}>
                  <td>
                    <div className="item-photo">
                      <img alt="" width="200" src={`${IMG_URL}${item.image}`} />
                    </div>
                    <br />
                    <div className="item-name">{item.name}</div>
                  </td>
                  <td>
                    {Object.values(JSON.parse(item.attributes)).map(
                      attribute => {
                        return attribute + ' ';
                      }
                    )}
                  </td>
                  <td>
                    <div className="item-quantity">
                      <button>-</button>
                      <input type="text" defaultValue="1" />
                      <button>+</button>
                    </div>
                  </td>
                  <td>
                    <div className="item-price">${item.price}</div>
                  </td>
                  <td>
                    <span
                      className="item-remove"
                      onClick={() => this.props.removeItem(item.item_id)}
                    >
                      ✘ Remove
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.cart);
  return { items: Object.values(state.cart) };
};

export default connect(
  mapStateToProps,
  { getCartItems, removeItem, createOrder }
)(Cart);
