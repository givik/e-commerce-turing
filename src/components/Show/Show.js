import React from 'react';
import { connect } from 'react-redux';
import ecomerse, { IMG_URL } from '../../apis/ecommerce';
import { getParameterByName } from '../../helpers';
import { addToCart } from '../../actions';

class Show extends React.Component {
  state = { attributes: [], count: 1, form: { size: '', color: '' } };

  colors = [];
  sizes = [];

  async componentDidMount() {
    const responseProduct = await ecomerse.get(
      `/products/${getParameterByName('item')}`
    );

    this.setState(responseProduct.data);

    const responseAttributes = await ecomerse.get(
      `/attributes/inProduct/${getParameterByName('item')}`
    );

    responseAttributes.data.forEach(attribute => {
      if (attribute.attribute_name === 'Color') this.colors.push(attribute);
      else if (attribute.attribute_name === 'Size') this.sizes.push(attribute);
    });

    this.setState({ attributes: responseAttributes.data });
  }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        ...{ [event.target.name]: event.target.value }
      }
    });
  };

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrease = () => {
    if (this.state.count > 1)
      this.setState({
        count: this.state.count - 1
      });
  };

  handleAdd = event => {
    let error = false;
    if (!this.state.form.color) {
      error = true;
      alert('Please select color');
    }
    if (!this.state.form.size) {
      error = true;
      alert('Please select size');
    }
    console.log(this.state);
    if (!error) this.props.addToCart(this.state);
  };

  render() {
    if (!this.state.attributes.length) return null;
    return (
      <div className="show">
        <div className="gallery">
          <div className="thumb">
            <img alt="" src={`${IMG_URL}${this.state.thumbnail}`} width="900" />
          </div>
          <div className="images">
            <img alt="" src={`${IMG_URL}${this.state.image}`} />
            <img alt="" src={`${IMG_URL}${this.state.image_2}`} />
          </div>
        </div>
        <div className="info">
          <h3 className="name">{this.state.name}</h3>
          {!parseFloat(this.state.discounted_price) ? (
            <div
              className="price"
              style={{
                textDecoration: 'none'
              }}
            >
              ${this.state.price}
            </div>
          ) : (
            <React.Fragment>
              <div className="discounted">${this.state.discounted_price}</div>
              <div className="price">${this.state.price}</div>
            </React.Fragment>
          )}

          <div className="description">{this.state.description}</div>
          <h3>Color</h3>
          <div className="color">
            <div className="radio">
              {this.colors.map((attribute, index) => {
                return (
                  <div className="selection" key={attribute.attribute_value_id}>
                    <input
                      // checked={!index ? 'checked' : ''}
                      id={attribute.attribute_value_id}
                      onChange={this.handleChange}
                      name="color"
                      type="radio"
                      value={attribute.attribute_value}
                    />
                    <label
                      style={{
                        background: attribute.attribute_value
                      }}
                      htmlFor={attribute.attribute_value_id}
                    >
                      {attribute.attribute_value}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="size">
            <h3>Size</h3>
            <div className="radio">
              {this.sizes.map((attribute, index) => {
                if (attribute.attribute_name === 'Size') {
                  return (
                    <div
                      className="selection"
                      key={attribute.attribute_value_id}
                    >
                      <input
                        // checked={!index ? 'checked' : ''}
                        id={attribute.attribute_value_id}
                        onChange={this.handleChange}
                        name="size"
                        type="radio"
                        value={attribute.attribute_value}
                      />
                      <label htmlFor={attribute.attribute_value_id}>
                        {attribute.attribute_value}
                      </label>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
          <div className="quantity">
            <button onClick={this.decrease}>-</button>
            <input
              name="quantity"
              type="text"
              onChange={this.handleChange}
              value={this.state.count || ''}
            />
            <button onClick={this.increase}>+</button>
          </div>
          <div className="add-to-cart">
            <button onClick={this.handleAdd}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Show);
