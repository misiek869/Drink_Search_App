import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{ path: '/', element: <h2>Home Page</h2> },
	{
		path: '/about',
		element: <h2>About Page</h2>,
	},
])

function App() {
	const [count, setCount] = useState(0)

	return <RouterProvider router={router}></RouterProvider>
}

export default App
