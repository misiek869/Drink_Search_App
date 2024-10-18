import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPageWrapper'
import { useQuery } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

interface LoaderParams {
	id: number
}

const cocktailPageQuery = (id: number) => {
	return {
		queryKey: ['cocktail', id],
		queryFn: async () => {
			const { data } = await axios.get(`${singleCocktailUrl}${id}`)
			return data
		},
	}
}

export const loader =
	(queryClient: QueryClient) =>
	async ({ params }: { params: LoaderParams }) => {
		const { id } = params
		await queryClient.ensureQueryData(cocktailPageQuery(id))
		return { id }
	}

const Cocktail = () => {
	const { id } = useLoaderData() as LoaderParams
	const { data } = useQuery(cocktailPageQuery(id))

	if (!data) return <Navigate to={'/'} />

	const singleDrink = data.drinks[0]

	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink

	const ingredients = Object.entries(singleDrink).filter(
		([key, value]) => key.startsWith('strIngredient') && value !== null
	)

	return (
		<Wrapper>
			<header>
				<h3>{name} Drink</h3>
			</header>

			<div className='drink'>
				<img className='img' src={image} alt={name} />
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name: </span>
						{name}
					</p>
					<p>
						<span className='drink-data'>category: </span>
						{category}
					</p>
					<p>
						<span className='drink-data'>ingredients: </span>
						{ingredients.map((item, index) => {
							return (
								<span className='ing' key={index}>
									{item[1]}
									{index < ingredients.length - 1 ? ', ' : ''}
								</span>
							)
						})}
					</p>
					<p>
						<span className='drink-data'>instructions: </span>
						{instructions}
					</p>
					<p>
						<span className='drink-data'>glass: </span>
						{glass}
					</p>
					<p>
						<span className='drink-data'>more info: </span>
						{info}
					</p>
				</div>
			</div>
			<div className='back-home-btn'>
				<Link className='btn' to={'/'}>
					back home
				</Link>
			</div>
		</Wrapper>
	)
}

export default Cocktail
