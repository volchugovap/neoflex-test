import type { CartAction, CartState } from "../types";

export function cartReducer(
  state: CartState[],
  action: CartAction,
): CartState[] {
  const { type, payload } = action;

  switch (type) {
    case "cart/addItem": {
      const existItem = state.find(({ id }) => id === payload.id);

      if (existItem) {
        return state.map((el) =>
          el.id === payload.id
            ? { ...existItem, count: existItem.count + 1 }
            : el,
        );
      } else {
        return [...state, { ...payload, count: 1 }];
      }
    }

    case "cart/removeItem": {
      return state.map((el) =>
        el.id === payload.id && el.count > 0
          ? { ...el, count: el.count - 1 }
          : el,
      );
    }

    case "cart/deleteItemCard": {
      return state.filter(({ id }) => id !== payload.id);
    }

    default: {
      return state;
    }
  }
}
