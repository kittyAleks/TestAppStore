import { GET_ALL_PRODUCTS } from "./constans";

export const getProducts = (products) => {
  console.log('QWQWQW_products', products)
  return ({
    type: GET_ALL_PRODUCTS,
    allProducts: products
  });
}
