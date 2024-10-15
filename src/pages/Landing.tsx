import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async ({ request }) => {
	const url = new URL(request.url)
	const searchTerm = url.searchParams.get('search') || 'vodka'
	const response = await axios.get(`${drinkApi}${searchTerm}`)
	return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
	const { drinks, searchTerm } = useLoaderData()
	console.log(drinks)

	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	)
}

export default Landing
