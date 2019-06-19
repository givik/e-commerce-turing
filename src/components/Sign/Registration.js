import React from 'react';
import { connect } from 'react-redux';
import { customerPostFetch } from '../../actions';

class Registration extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.customerPostFetch(this.state);
  };

  render() {
    return (
      <div className="registration">
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <div>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Registration" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { customerPostFetch }
)(Registration);
