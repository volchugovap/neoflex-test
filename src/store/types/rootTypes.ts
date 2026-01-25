import type { CartState, CartAction } from './cartTypes'

export interface RootState {
	cart: CartState[]
}

export type RootAction = CartAction
