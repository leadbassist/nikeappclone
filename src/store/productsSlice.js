import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      // set the "payload" value, the product's id to productId
      const productId = action.payload;
      // go through all the products in dummy data
      // and find the product whoes id is the same as product id
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});
