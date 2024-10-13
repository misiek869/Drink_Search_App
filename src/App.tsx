import { useState } from 'react'
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
	{ path: '/', element: <HomeLayout /> },
	{
		path: '/about',
		element: <About />,
	},
])

function App() {
	const [count, setCount] = useState(0)

	return <RouterProvider router={router}></RouterProvider>
}

export default App
