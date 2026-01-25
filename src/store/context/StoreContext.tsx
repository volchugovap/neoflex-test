import React, {
	createContext,
	useContext,
	useReducer,
	type ReactNode,
	type Dispatch,
} from 'react'
import type { RootState, RootAction } from '../types'
import { rootReducer, initialState } from '../reducers/'

interface StoreContextValue {
	state: RootState
	dispatch: Dispatch<RootAction>
}

export const StoreContext = createContext<StoreContextValue | undefined>(
	undefined,
)

interface StoreProviderProps {
	children: ReactNode
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState)

	return <StoreContext value={{ state, dispatch }}>{children}</StoreContext>
}

export const useStore = (): StoreContextValue => {
	const context = useContext(StoreContext)
	if (context === undefined) {
		throw new Error('useStore must be used within a StoreProvider')
	}
	return context
}

export const useSelector = <TSelected,>(
	selector: (state: RootState) => TSelected,
): TSelected => {
	const { state } = useStore()
	return selector(state)
}

export const useDispatch = (): Dispatch<RootAction> => {
	const { dispatch } = useStore()
	return dispatch
}
