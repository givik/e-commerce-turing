import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import ParamsReducer from './ParamsReducer';
import DepartmentsReducer from './DepartmentsReducer';
import CategoriesReducer from './CategoriesReducer';
import CustomersReducer from './CustomerReducer';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  params: ParamsReducer,
  departments: DepartmentsReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
  customer: CustomersReducer,
  form: formReducer
});
