import ecommerce from '../apis/ecommerce';
import history from '../history';
import { getParameterByName } from '../helpers';

import {
  SIGN_IN,
  SIGN_OUT,
  GET_DEPARTMENTS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PARAMS,
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_TOTAL_AMOUNT
} from './types';

export const customerRegisterFetch = formValues => async dispatch => {
  ecommerce
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
  ecommerce
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

export const fetchUsersData = () => async dispatch => {
  if (localStorage.token) {
    ecommerce
      .get('/customer')
      .then(response => {
        dispatch(signUser(response.data));
      })
      .catch(error => {
        localStorage.removeItem('token');
      });
  } else {
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
  const response = await ecommerce.get('/departments');

  dispatch({ type: GET_DEPARTMENTS, payload: response.data });
};

export const getCategories = () => async (dispatch, getState) => {
  if (
    history.location.pathname.split('/')[1] &&
    history.location.pathname.split('/')[1] !== 'all'
  ) {
    const response = await ecommerce.get(
      `/categories/inDepartment/${history.location.pathname.split('/')[1]}`
    );
    dispatch({ type: GET_CATEGORIES, payload: response.data });
  } else {
    const response = await ecommerce.get('/categories');
    dispatch({ type: GET_CATEGORIES, payload: response.data.rows });
  }
};

export const getProducts = () => async (dispatch, getState) => {
  const activePage = getParameterByName('page') || 1;

  let response = '';

  if (history.location.pathname.split('/')[2]) {
    // on category
    response = await ecommerce.get(
      `/products/inCategory/${
        history.location.pathname.split('/')[2]
      }?page=${activePage}`
    );
  } else if (
    history.location.pathname.split('/')[1] &&
    history.location.pathname.split('/')[1] !== 'all'
  ) {
    response = await ecommerce.get(
      `/products/inDepartment/${
        history.location.pathname.split('/')[1]
      }?page=${activePage}`
    );
  } else if (history.location.pathname.split('/')[1] === 'all') {
    // all categories
    response = await ecommerce.get(`/products?page=${activePage}`);
  } else {
    // all categories
    response = await ecommerce.get(`/products?page=${activePage}`);
  }

  dispatch({
    type: GET_PRODUCTS,
    payload: response.data
  });
};

export const getParams = () => async dispatch => {
  dispatch(getCategories());
  dispatch(getProducts());
  dispatch({
    type: GET_PARAMS,
    payload: {
      department: history.location.pathname.split('/')[1] || null,
      category: history.location.pathname.split('/')[2] || null
    }
  });
};

export const getCartItems = () => async dispatch => {
  const response = await ecommerce.get(
    `/shoppingcart/${localStorage.getItem('cart_id')}`
  );

  dispatch({ type: GET_CART_ITEMS, payload: response.data });
};

export const addToCart = formValues => async dispatch => {
  const values = {
    cart_id: localStorage.getItem('cart_id'),
    product_id: formValues.product_id,
    attributes: JSON.stringify(formValues.form)
  };

  const response = await ecommerce.post(`/shoppingcart/add`, values);

  dispatch({ type: ADD_TO_CART, payload: response.data });

  dispatch(getTotalAmount());

  dispatch(
    updateCartItem(
      response.data[0].item_id,
      formValues.count + response.data[0].quantity - 1
    )
  );
};

export const updateCartItem = (itemId, quantity) => async dispatch => {
  const values = { item_id: itemId, quantity };
  await ecommerce.put(`/shoppingcart/update/${itemId}`, values);

  dispatch(getCartItems());
  dispatch(getTotalAmount());
};

export const getTotalAmount = () => async dispatch => {
  const response = await ecommerce.get(
    `/shoppingcart/totalAmount/${localStorage.getItem('cart_id')}`
  );

  dispatch({ type: GET_TOTAL_AMOUNT, payload: response.data.total_amount });
};

export const removeItem = itemId => async (dispatch, getState) => {
  await ecommerce.delete(`/shoppingcart/removeProduct/${itemId}`);

  const items = Object.values(getState().cart).filter(
    item => item.item_id !== itemId
  );

  dispatch({ type: REMOVE_FROM_CART, payload: items });
};

export const createOrder = () => async (dispatch, getState) => {
  if (localStorage.token) {
    //! (incomplete API) Hardcoded shipping_id & tax_id
    const values = {
      cart_id: localStorage.getItem('cart_id'),
      shipping_id: 2,
      tax_id: 2
    };

    await ecommerce.post(`/orders`, values);

    dispatch(getCartItems());
    history.push('/orders');
  } else {
    history.push('/login');
  }
};
