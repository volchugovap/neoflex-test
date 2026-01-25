import type { CartAction, CartState } from '../types'

export function cartReducer(
	state: CartState[],
	action: CartAction,
): CartState[] {
	const { type, payload } = action

	switch (type) {
		case 'cart/addItem': {
			const existItem = state.find(({ id }) => id === payload.id)

			if (existItem) {
				return [...state, { ...existItem, count: existItem.count + 1 }]
			} else {
				return [...state, { ...payload, count: 1 }]
			}
		}

		case 'cart/removeItem': {
			return state.map(el =>
				el.id === payload && el.count > 0 ? { ...el, count: el.count - 1 } : el,
			)
		}

		case 'cart/deleteItemCard': {
			return state.filter(el => el.id !== payload)
		}

		/* case 'cart/totalPrice': {
			return state.reduce((sum, item) => sum + item.price * item.count, 0)
		} */

		default: {
			return state
		}
	}
}
