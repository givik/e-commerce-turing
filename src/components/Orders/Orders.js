import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import ecommerce from '../../apis/ecommerce';

class Orders extends React.Component {
  state = {
    orders: []
  };

  async componentWillMount() {
    const response = await ecommerce.get('/orders/inCustomer');
    this.setState({ orders: response.data });
  }

  onToken = async (token, addresses, order_id, amount) => {
    console.log('====================================');
    console.log('token', token);
    console.log('addresses', addresses);
    console.log('====================================');
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.

    await ecommerce.post('/stripe/charge', {
      stripeToken: token.id,
      order_id,
      description: '',
      amount: Math.round(parseFloat(amount) * 100)
    });

    const resp = await ecommerce.get('/orders/inCustomer');
    this.setState({ orders: resp.data });
  };

  render() {
    const { orders } = this.state;
    return (
      <div className="orders">
        <h1>Orders</h1>
        {orders.map(order => {
          return (
            <div className="order" key={order.order_id}>
              <span className="order-id" role="img" aria-label="">
                📦 Order ID: {order.order_id}
              </span>
              <span>Created On: {order.created_on}</span>
              <span>status: {order.status}</span>
              <span>total amount: {order.total_amount}</span>
              {!order.status > 0 ? (
                <span>
                  <StripeCheckout
                    className="checkout-btn"
                    stripeKey="pk_test_NcwpaplBCuTL6I0THD44heRe"
                    token={(token, addresses) => {
                      this.onToken(
                        token,
                        addresses,
                        order.order_id,
                        order.total_amount
                      );
                    }}
                  />
                </span>
              ) : (
                <span className="checked">✔</span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Orders;
