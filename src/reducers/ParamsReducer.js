import { GET_PARAMS } from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case GET_PARAMS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
