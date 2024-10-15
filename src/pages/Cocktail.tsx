import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPageWrapper'
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

	return (
		<Wrapper>
			<header>
				<Link to={'/'}>back home</Link>
				<h3>{name}</h3>
			</header>

			<div className='drink'>
				<img className='img' src={image} alt={name} />
				<div className='drink-info'>
					<p>
						<span className='drink-data'>category: </span>
						{category}
					</p>
					<p>
						<span className='drink-data'>info: </span>
						{info}
					</p>
					<p>
						<span className='drink-data'>glass: </span>
						{glass}
					</p>
					<p>
						<span className='drink-data'>instructions: </span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	)
}

export default Cocktail
