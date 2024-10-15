import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	HomeLayout,
	About,
	Landing,
	Error,
	Newsletter,
	Cocktail,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import SinglePageError from './pages/SinglePageError'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: 'cocktail/:id',
				element: <Cocktail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
