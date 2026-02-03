import type { CartState, CartAction } from "./cartTypes";
import type { FavoritesAction, FavoritesState } from "./favoritesTypes";

export interface RootState {
  cart: CartState[];
  favorites: FavoritesState[];
}

export type RootAction = CartAction | FavoritesAction;
