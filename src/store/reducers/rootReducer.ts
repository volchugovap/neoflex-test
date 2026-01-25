import type { RootState, RootAction } from '../types'
import { cartReducer } from './cartReducer'

export const initialState: RootState = {
	cart: [],
}

export const rootReducer = (
	state: RootState,
	action: RootAction,
): RootState => {
	return {
		cart: cartReducer(state.cart, action),
	}
}
