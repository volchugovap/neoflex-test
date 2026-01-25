import { type FC } from 'react'
import { headPhones } from '../../data'
import { CardMain } from '../../components'

export const Main: FC = () => {
	return (
		<div>
			{headPhones.map(el => (
				<>
					<h2>{el.name}</h2>
					<div>
						{el.data.map(({ id, img, price, rate, title, oldPrice }) => (
							<CardMain
								id={id}
								img={img}
								price={price}
								rate={rate}
								title={title}
								oldPrice={oldPrice}
								key={id}
							/>
						))}
					</div>
				</>
			))}
		</div>
	)
}
