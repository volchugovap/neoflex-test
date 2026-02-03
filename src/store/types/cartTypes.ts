import type { ProductCardType } from "../../data";

type CartProductState = Pick<ProductCardType, "id">;
type CartCountState = {
  count: number;
};

export type CartState = CartProductState & CartCountState;

export type CartAction =
  | { type: "cart/addItem"; payload: CartProductState }
  | { type: "cart/removeItem"; payload: CartProductState }
  | { type: "cart/deleteItemCard"; payload: CartProductState };
