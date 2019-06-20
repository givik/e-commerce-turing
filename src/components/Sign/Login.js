import React from 'react';
import { connect } from 'react-redux';
import { customerLoginFetch } from '../../actions';

class Login extends React.Component {
  state = {
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
    this.props.customerLoginFetch(this.state);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { customerLoginFetch }
)(Login);
