import { CART_ACTIONS } from '../actions/cartActions';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      return [...state, action.payload];
    case CART_ACTIONS.REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
