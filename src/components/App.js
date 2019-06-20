import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import { getLoginStatus } from '../actions';
import '../styles/App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Show from './Show/Show';
import Login from './Sign/Login';
import Registration from './Sign/Registration';

class App extends React.Component {
  componentDidMount = () => {
    this.props.getLoginStatus();
  };

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/show" exact component={Show} />
              <Route path="/login" exact component={Login} />
              <Route path="/registration" exact component={Registration} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { getLoginStatus }
)(App);
