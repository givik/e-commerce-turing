import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return { ...state, ...action.payload };
    case ADD_TO_CART:
      return { ...state, ...action.payload };
    case REMOVE_FROM_CART:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
