import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Cart, Main } from '../pages'
import { MainLayout } from './MainLayout'
import { StoreProvider } from '../store/context'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index element={<Main />} />
						<Route path='cart' element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StoreProvider>
	</StrictMode>,
)
