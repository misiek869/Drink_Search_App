import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	HomeLayout,
	About,
	Landing,
	Error,
	Newsletter,
	Cocktail,
} from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'cocktail',
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
