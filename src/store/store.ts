import { useState } from 'react'
import type { ICardData } from './types'

export const useCartStore = () => {
	const [data, setData] = useState<ICardData[]>([])

	return [data, setData]
}
