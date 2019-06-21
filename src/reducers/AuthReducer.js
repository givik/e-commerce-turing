import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload);
      return { ...state, currentUser: action.payload };
    case SIGN_OUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
