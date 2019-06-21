import { GET_PRODUCTS } from '../actions/types';

const initialState = { rows: {}, count: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        ...{ rows: action.payload.rows, count: action.payload.count }
      };
    default:
      return { ...state };
  }
};
