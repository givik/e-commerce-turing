import { GET_CART_ITEMS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
