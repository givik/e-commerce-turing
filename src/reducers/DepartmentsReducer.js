import { GET_DEPARTMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
