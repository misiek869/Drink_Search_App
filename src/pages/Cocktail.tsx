import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
// import Wrapper from '../assets/wrappers/CocktailPageWrapper'
import { Drink } from '../components/CocktailList'

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

interface LoaderParams {
	id: string
}

export const loader = async ({ params }: { params: LoaderParams }) => {
	const { id } = params
	const { data } = await axios.get(`${singleCocktailUrl}${id}`)
	console.log(data)
	return { data, id }
}

const Cocktail = () => {
	const { data } = useLoaderData()
	const singleDrink = data.drinks[0]

	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink

	return <div></div>
}

export default Cocktail
