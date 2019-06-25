import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import { fetchUsersData } from '../actions';
import '../styles/App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Orders from './Orders/Orders';
import Show from './Show/Show';
import Login from './Sign/Login';
import Registration from './Sign/Registration';
import Profile from './Profile/Profile';
import Shipping from './Shipping/Shipping';

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchUsersData();
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
              <Route path="/orders" exact component={Orders} />
              <Route path="/show" exact component={Show} />
              <Route path="/login" exact component={Login} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/shipping" exact component={Shipping} />
              <Route path="/registration" exact component={Registration} />
              <Route path="/:department" exact component={Home} />
              <Route path="/:department/:category" exact component={Home} />
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
  { fetchUsersData }
)(App);
