import { GET_TOTAL_AMOUNT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TOTAL_AMOUNT:
      if (!action.payload) return {};
      return action.payload;
    default:
      return state;
  }
};
