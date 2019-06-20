import ecomerce from '../apis/ecommerce';
import history from '../history';

import { SIGN_IN, SIGN_OUT } from './types';

export const customerRegisterFetch = formValues => async dispatch => {
  ecomerce
    .post('/customers', formValues)
    .then(response => {
      alert('You have successfully registered.');
      localStorage.setItem('token', response.data.accessToken);
      dispatch(signUser(response.data.customer));
      history.push('/');
    })
    .catch(error => {
      alert(error.response.data.error.message);
    });
};

export const customerLoginFetch = formValues => async dispatch => {
  ecomerce
    .post('/customers/login', formValues)
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(signUser(response.data.customer));
      history.push('/');
    })
    .catch(error => {
      alert(error.response.data.error.message);
    });
};

export const getLoginStatus = () => async dispatch => {
  if (localStorage.token) {
    ecomerce
      .get('/customer')
      .then(response => {
        dispatch(signUser(response.data.customer));
        console.log('response.data: ', response.data);
      })
      .catch(error => {
        localStorage.removeItem('token');
      });
  } else {
    dispatch(signOutUser());
  }
};

export const signUser = user => ({
  type: SIGN_IN,
  payload: user
});

export const signOutUser = user => ({
  type: SIGN_OUT
});
