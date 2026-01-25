import { type FC } from 'react'
import type { ProductCardState, ProductType } from '../../store/types'
import { TextButton } from '../../shared/ui'
import { useDispatch, useSelector } from '../../store/context'

export const CardMain: FC<ProductCardState> = ({
	id,
	img,
	price,
	rate,
	title,
	oldPrice,
}) => {
	const dispatch = useDispatch()
	const selector = useSelector(state => state.cart)

	console.log(selector)

	const handleClick = ({ id, img, price, title }: ProductType) => {
		dispatch({ type: 'cart/addItem', payload: { id, img, price, title } })
	}

	return (
		<div>
			<div>
				<img src={img} alt={title} />
			</div>

			<div>
				<h3>{title}</h3>
				<div>{price}</div>
				{oldPrice && <div>{oldPrice}</div>}
			</div>

			<div>
				<div>
					<img src='' alt='' />
					<span>{rate}</span>
				</div>
				<TextButton onClick={() => handleClick({ id, title, price, img })}>
					Купить
				</TextButton>
			</div>
		</div>
	)
}
