import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import '../styles/App.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Login from './Sign/Login';
import Registration from './Sign/Registration';

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
