import { ACTIONS } from "./constants";

export const initState = {
  cart: [],
};

export const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_PRODUCT_CART: {
      const productFind = state.cart.find((e) => e === payload);
      if (productFind) {
        // alert("Products already in the cart");
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }
    default:
      return state;
  }
};
