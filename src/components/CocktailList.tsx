import React from 'react'

type Drink = {
	idDrink: number
	strDrink: string
	strDrinkThumb: string
	strAlcoholic: string
	strGlass: string
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

	return <div></div>
}

export default CocktailList
