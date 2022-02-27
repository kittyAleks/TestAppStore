import { GET_ALL_PRODUCTS } from "./constans";

const initialState = {
  products: [],
};
export const rootReducer = (state = initialState, action) => {
  console.log("QQQaction", action.allProducts);
  const { type, allProducts } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: allProducts,
      };
    default:
      return state;
  }
};
