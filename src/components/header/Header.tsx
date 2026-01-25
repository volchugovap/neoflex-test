import { type FC } from 'react'
import { Link } from 'react-router'

export const Header: FC = () => {
	return (
		<header>
			<Link to='/cart'>Korzina</Link>
		</header>
	)
}
