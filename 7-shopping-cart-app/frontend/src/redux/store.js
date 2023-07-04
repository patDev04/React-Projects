import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsApiFetch } from "./productsSlice";
import cartReducer from "./cartSlice";
import { productsApi } from "./productsApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsApiFetch());
