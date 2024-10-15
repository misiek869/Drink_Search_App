import React from 'react'

type CocktailListProps = {
	drinks: []
}

const CocktailList = ({ drinks }: CocktailListProps) => {
	if (!drinks) {
		return (
			<h4 style={{ textAlign: 'center' }}>
				We don't have the drink you're looking for
			</h4>
		)
	}

	return <div></div>
}

export default CocktailList
