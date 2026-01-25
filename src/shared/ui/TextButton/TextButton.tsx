import { type FC } from 'react'

interface IProps {
	children?: React.ReactNode
	onClick?: () => void
}

export const TextButton: FC<IProps> = ({ children, onClick }) => {
	return (
		<button type='button' onClick={onClick}>
			{children}
		</button>
	)
}
