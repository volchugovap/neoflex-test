import { type FC } from 'react'
import { CardCart } from '../../components'
import { useStore } from '../../store/context'

export const Cart: FC = () => {
	const { state } = useStore()

	return (
		<div>
			{state.cart.map(({ id, price, title, img }) => (
				<CardCart id={id} img={img} price={price} title={title} key={id} />
			))}
		</div>
	)
}
