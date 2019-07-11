import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import ParamsReducer from './ParamsReducer';
import DepartmentsReducer from './DepartmentsReducer';
import CategoriesReducer from './CategoriesReducer';
import ProductsReducer from './ProductsReducer';
import TotalAmountReducer from './TotalAmountReducer';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  totalAmount: TotalAmountReducer,
  params: ParamsReducer,
  departments: DepartmentsReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
  form: formReducer
});
