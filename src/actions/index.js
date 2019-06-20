import ecomerce from '../apis/ecommerce';
import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  GET_DEPARTMENTS,
  GET_CATEGORIES,
  GET_PRODUCTS
} from './types';

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
      })
      .catch(error => {
        localStorage.removeItem('token');
      });
  } else {
    // alert();
    // dispatch(signOutUser());
  }
};

export const signUser = user => ({
  type: SIGN_IN,
  payload: user
});

export const signOutUser = user => ({
  type: SIGN_OUT
});

export const getDepartments = () => async dispatch => {
  const response = await ecomerce.get('/departments');

  dispatch({ type: GET_DEPARTMENTS, payload: response.data });
};

export const getCategories = () => async dispatch => {
  const response = await ecomerce.get('/categories');

  dispatch({ type: GET_CATEGORIES, payload: response.data.rows });
};

export const getProducts = () => async dispatch => {
  const response = await ecomerce.get('/products');

  dispatch({ type: GET_PRODUCTS, payload: response.data.rows });
};
