import type { ProductCardType } from "../../data";

export type FavoritesState = Pick<ProductCardType, "id">;

export type FavoritesAction =
  | { type: "favorites/addToFavorites"; payload: FavoritesState }
  | { type: "favorites/removeFromFavorites"; payload: FavoritesState };
