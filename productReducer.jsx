import { PRODUCT_ACTIONS } from '../actions/productAction';

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return action.payload;
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      return [...state, action.payload];
    case PRODUCT_ACTIONS.REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};
