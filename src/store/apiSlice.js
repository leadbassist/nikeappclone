// import
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "http://localhost:3000/";
const baseUrl = "http://192.168.137.247:3000/";
// console.log("baseUrl:", baseUrl);

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

// adding 2 hooks - 1.query a product, 2. query all products
export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
