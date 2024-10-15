import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCardWrapper'

type CocktailCardProps = {
	image: string
	name: string
	id: number
	glass: string
	info: string
}

const CocktailCard = ({ image, name, id, info, glass }: CocktailCardProps) => {
	return (
		<Wrapper>
			<div className='img-container'>
				<img src={image} alt={'name'} className='img' />
				<div className='footer'>
					<h4>{name}</h4>
					<h5>{glass}</h5>
					<p>{info}</p>
					<Link className='btn' to={`/cocktail/${id}`}>
						See More
					</Link>
				</div>
			</div>
		</Wrapper>
	)
}

export default CocktailCard
