import ecomerce from '../apis/ecommerce';
import history from '../history';

import { SIGN_IN, SIGN_OUT } from './types';

export const customerPostFetch = formValues => async dispatch => {
  console.log(formValues);
  const response = ecomerce.post('/customer', formValues);
  // console.log(response);
};
