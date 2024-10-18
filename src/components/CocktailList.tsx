import Wrapper from '../assets/wrappers/CocktailListWrapper'
import CocktailCard from './CocktailCard'

export type Drink = {
	idDrink: number
	strDrink: string
	strDrinkThumb: string
	strAlcoholic: string
	strGlass: string
	strInstructions: string
	strCategory: string
}

type CocktailListProps = {
	drinks: Drink[]
}

const CocktailList = ({ drinks }: CocktailListProps) => {
	if (!drinks || drinks.length === 0) {
		return (
			<h4 style={{ textAlign: 'center' }}>
				We don't have the drink you're looking for
			</h4>
		)
	}

	const formattedDrinks = drinks.map(item => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass,
		}
	})

	return (
		<Wrapper>
			{formattedDrinks.map(item => {
				return <CocktailCard key={item.id} {...item} />
			})}
		</Wrapper>
	)
}

export default CocktailList
