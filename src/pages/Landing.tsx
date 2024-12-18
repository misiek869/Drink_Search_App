import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface LoaderData {
	searchTerm: string
}

const searchCocktailQuery = (searchTerm: string) => {
	return {
		queryKey: ['search', searchTerm || 'all'],
		queryFn: async () => {
			const response = await axios.get(`${drinkApi}${searchTerm}`)
			return response.data.drinks
		},
	}
}

export const loader =
	(queryClient: QueryClient) =>
	async ({ request }: { request: Request }): Promise<LoaderData> => {
		console.log(request)
		const url = new URL(request.url)
		const searchTerm = url.searchParams.get('search') || 'vodka'
		await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))
		return { searchTerm }
	}

const Landing = () => {
	const { searchTerm } = useLoaderData() as LoaderData

	const { data: drinks } = useQuery(searchCocktailQuery(searchTerm))

	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	)
}

export default Landing
