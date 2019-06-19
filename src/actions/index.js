import ecomerce from '../apis/ecommerce';
import history from '../history';

import { SIGN_IN, SIGN_OUT } from './types';

export const customerPostFetch = formValues => async dispatch => {
  ecomerce
    .post('/customers', formValues)
    .then(response => {
      alert('You have successfully registered.');
      localStorage.setItem('token', response.data.accessToken);
      dispatch(signUser(response.data));
      history.push('/');
    })
    .catch(error => {
      alert(error.response.data.error.message);
    });
};

export const signUser = user => ({
  type: SIGN_IN,
  payload: user
});

export const signOutUser = user => ({
  type: SIGN_OUT,
  payload: user
});
