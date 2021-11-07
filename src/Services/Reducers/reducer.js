import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

const initialState = {
  cartData: [],
};
export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("From ADD_TO_CART:", action);
      return [...state, { cartData: action.data }];
    case REMOVE_FROM_CART:
      console.log("From REMOVE_FROM_CART:", action);
      state.pop();
      return [...state];

    default:
      return state;
  }
};
