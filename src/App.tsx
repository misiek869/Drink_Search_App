import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	HomeLayout,
	About,
	Landing,
	Error,
	// Newsletter,
	Cocktail,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import SinglePageError from './pages/SinglePageError'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// query for 10 min
			staleTime: 1000 * 60 * 10,
		},
	},
})

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
				loader: landingLoader(queryClient),
			},
			{
				path: 'cocktail/:id',
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader(queryClient),
				element: <Cocktail />,
			},
			// {
			// 	path: 'newsletter',
			// 	element: <Newsletter />,
			// },
			{
				path: 'about',
				element: <About />,
			},
		],
	},
])

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App

// const searchCocktailsQuery = (searchTerm) => {
// 	return {
// 		queryKey: ['search', searchTerm || 'all'],
// 		queryFn: async () => {
// 			// UPDATE !!!
// 			// Default to 'a' if no search term is provided since API has changed
// 			searchTerm = searchTerm || 'a';

// 			const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
// 			return response.data.drinks;
// 		},
// 	};
// };
