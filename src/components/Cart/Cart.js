import React from 'react';

const Cart = () => {
  return (
    <div className="cart">
      <h2>1 Item(s) In Your Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th />
          </tr>
          <tr className="cart-item">
            <td>
              <div className="item-photo">
                <img
                  alt=""
                  width="200"
                  src="https://secure-cdn.logosoftwear.com/images_products2/9928/9928.zoom.jpg"
                />
              </div>
              <div className="item-name">Lorem Ipsum</div>
            </td>
            <td>XL</td>
            <td>
              <div className="item-quantity">
                <button>-</button>
                <input type="text" />
                <button>+</button>
              </div>
            </td>
            <td>
              <div className="item-price">$14</div>
            </td>
            <td>
              <span className="item-remove">✘ Remove</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
