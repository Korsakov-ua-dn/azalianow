import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice";
import favoritesReducer from "./cart-slice copy";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// types
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch