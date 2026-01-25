import { type FC } from 'react'
import { TextButton } from '../../shared/ui'
import type {
	CartState,
	ProductCardState,
	ProductType,
} from '../../store/types'
import { useDispatch, useSelector } from '../../store/context'

type PropType = Omit<ProductCardState, 'rate' | 'oldPrice'>

export const CardCart: FC<PropType> = ({ id, price, title, img }) => {
	const dispatch = useDispatch()
	const cartSelect = useSelector(state => state.cart)

	const addItemToCart = ({ id, img, price, title }: ProductType) => {
		dispatch({ type: 'cart/addItem', payload: { id, img, price, title } })
	}

	const removeItemFromCart = (id: number) => {
		dispatch({ type: 'cart/removeItem', payload: id })
	}

	const deleteCardFromCart = (id: number) => {
		dispatch({ type: 'cart/deleteItemCard', payload: id })
	}

	const countItem = cartSelect.find(el => el.id === id)?.count

	return (
		<div>
			<img src={img} alt={title} />
			<TextButton onClick={() => removeItemFromCart(id)}>
				<img src='' alt='' />
			</TextButton>
			{countItem ?? 0}
			<TextButton onClick={() => addItemToCart({ id, price, title, img })}>
				<img src='' alt='' />
			</TextButton>

			<button type='button' onClick={() => deleteCardFromCart(id)}>
				delete
			</button>
		</div>
	)
}
