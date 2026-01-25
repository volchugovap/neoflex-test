import type { ProductCardState } from './productCardState'

export type ProductType = Omit<ProductCardState, 'rate' | 'oldPrice'>
type CountType = {
	count: number
}

export type CartState = ProductType & CountType

export type cartInitialState = []

export type CartAction =
	| { type: 'cart/addItem'; payload: ProductType }
	| { type: 'cart/removeItem'; payload: number }
	| { type: 'cart/deleteItemCard'; payload: number }
	| { type: 'cart/totalPrice'; payload: null }
