import { type FC } from 'react'
import { Footer, Header } from '../components'

interface IProps {
	children: React.ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
