import type { RootState, RootAction } from "../types";
import { cartReducer } from "./cartReducer";
import { favoritesReducer } from "./favoritesReducer";

export const initialState: RootState = {
  cart: [],
  favorites: [],
};

export const rootReducer = (
  state: RootState,
  action: RootAction,
): RootState => {
  return {
    cart: cartReducer(state.cart, action),
    favorites: favoritesReducer(state.favorites, action),
  };
};
