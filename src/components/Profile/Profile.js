import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../actions';
import ecomerse from '../../apis/ecommerce';

class Profile extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    day_phone: '',
    eve_phone: '',
    mob_phone: ''
  };

  componentWillReceiveProps(props) {
    this.setState({ ...props.user });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await ecomerse.put(`/customer`, this.state);
    if (response.data) alert('Profile Successfully Updated');
    this.props.fetchUsersData();
  };

  render() {
    if (!this.props.user) return null;
    return (
      <div className="profile">
        <h2>User's Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <input
              name="name"
              onChange={this.handleChange}
              defaultValue={this.props.user.name}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="email">
            <input
              name="email"
              onChange={this.handleChange}
              defaultValue={this.props.user.email}
              type="email"
              placeholder="email"
            />
          </div>
          <div className="password">
            <input
              name="password"
              onChange={this.handleChange}
              defaultValue={this.props.user.password}
              type="password"
              placeholder="password"
            />
          </div>
          <div className="day_phone">
            <input
              name="day_phone"
              onChange={this.handleChange}
              defaultValue={this.props.user.day_phone}
              type="text"
              placeholder="day phone"
            />
          </div>
          <div className="eve_phone">
            <input
              name="eve_phone"
              onChange={this.handleChange}
              defaultValue={this.props.user.eve_phone}
              type="text"
              placeholder="eve phone"
            />
          </div>
          <div className="mob_phone">
            <input
              name="name"
              onChange={this.handleChange}
              defaultValue={this.props.user.mob_phone}
              type="text"
              placeholder="mob phone"
            />
          </div>
          <br />
          <div>
            <input type="submit" value="Update Profile" />
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
)(Profile);
