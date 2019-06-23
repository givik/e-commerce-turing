import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../actions';
import ecomerse from '../../apis/ecommerce';

class Shipping extends React.Component {
  state = {
    address_1: '',
    address_2: '',
    city: '',
    region: '',
    postal_code: '',
    country: '',
    shipping_region_id: ''
  };

  regions = [];

  componentDidMount() {}

  async componentWillReceiveProps(props) {
    const response = await ecomerse.get(`/shipping/regions`);
    this.regions = response.data;
    console.log(this.regions);
    this.setState({
      // address_1: props.user.address_1,
      // address_2: props.user.address_2,
      // city: props.user.city,
      // region: props.user.region,
      // postal_code: props.user.postal_code,
      // country: props.user.country,
      // shipping_region_id: props.user.shipping_region_id
      ...this.state
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const shipping = {
      address_1: event.target.address_1.value,
      address_2: event.target.address_2.value,
      city: event.target.city.value,
      region: event.target.region.value,
      postal_code: event.target.postal_code.value,
      country: event.target.country.value,
      shipping_region_id: event.target.shipping_region_id.value
    };
    const response = await ecomerse.put(`/customers/address`, shipping);

    if (response.data) alert('Shipping Address Successfully Updated');
    this.props.fetchUsersData();
  };

  render() {
    if (!this.props.user) return null;
    return (
      <div className="shipping">
        <h2>Shipping Address</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="address_1">
            <input
              name="address_1"
              onChange={this.handleChange}
              defaultValue={this.props.user.address_1 || 'address 1'}
              type="text"
              placeholder="address 1"
            />
          </div>
          <div className="address_2">
            <input
              name="address_2"
              onChange={this.handleChange}
              defaultValue={
                this.props.user.address_2
                  ? this.props.user.address_2
                  : 'address 2'
              }
              type="text"
              placeholder="address 2"
            />
          </div>
          <div className="city">
            <input
              name="city"
              onChange={this.handleChange}
              defaultValue={this.props.user.city || 'city'}
              type="text"
              placeholder="city"
            />
          </div>
          <div className="region">
            <input
              name="region"
              onChange={this.handleChange}
              defaultValue={this.props.user.region || 'region'}
              type="text"
              placeholder="region"
            />
          </div>
          <div className="postal_code">
            <input
              name="postal_code"
              onChange={this.handleChange}
              defaultValue={this.props.user.postal_code || 'postal code'}
              type="text"
              placeholder="postal code"
            />
          </div>
          <div className="country">
            <input
              name="country"
              onChange={this.handleChange}
              defaultValue={this.props.user.country || 'country'}
              type="text"
              placeholder="country"
            />
          </div>
          <div className="shipping_region_id">
            <select
              name="shipping_region_id"
              // value={this.props.user.shipping_region_id}
              onChange={this.handleChange}
            >
              {this.regions.map(region => {
                // alert(this.props.user.shipping_region_id);
                return (
                  <option
                    key={region.shipping_region_id}
                    value={region.shipping_region_id}
                  >
                    {region.shipping_region}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <div>
            <input type="submit" value="Update Shipping" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.currentUser };
};

export default connect(
  mapStateToProps,
  { fetchUsersData }
)(Shipping);
