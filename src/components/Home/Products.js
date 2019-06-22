import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import history from '../../history';
import { IMG_URL } from '../../apis/ecommerce';

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    console.log(history);

    return (
      <div className="products">
        {this.props.products.map(product => {
          return (
            <div
              key={product.product_id}
              className="item"
              onClick={() => history.push(`/show?item=${product.product_id}`)}
            >
              <div className="photo">
                <img alt="" width="200" src={IMG_URL + product.thumbnail} />
              </div>
              <div className="name">{product.name}</div>
              <div className="price">{product.price}$</div>
              <div className="discounted">{product.discounted_price}$</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: Object.values(state.products.rows) };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
