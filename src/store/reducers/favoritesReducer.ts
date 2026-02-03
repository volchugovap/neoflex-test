import type { FavoritesAction, FavoritesState } from "../types";

export function favoritesReducer(
  state: FavoritesState[],
  action: FavoritesAction,
): FavoritesState[] {
  const { type, payload } = action;

  switch (type) {
    case "favorites/addToFavorites": {
      const existItem = state.find(({ id }) => id === payload.id);

      if (existItem) {
        return state;
      } else {
        return [...state, { ...payload }];
      }
    }
    case "favorites/removeFromFavorites": {
      return state.filter(({ id }) => id != payload.id);
    }

    default:
      return state;
  }
}
