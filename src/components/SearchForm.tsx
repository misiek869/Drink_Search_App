import Wrapper from '../assets/wrappers/SearchFormWrapper'
import { Form, useNavigation } from 'react-router-dom'

type SearchFormProps = {
	searchTerm: string
}

const SearchForm = ({ searchTerm }: SearchFormProps) => {
	const navigation = useNavigation()
	const isSearching = navigation.state === 'submitting'

	return (
		<Wrapper>
			<Form className='form'>
				<input
					type='search'
					name='search'
					defaultValue={searchTerm}
					className='form-input'
				/>
				<button className='btn' type='submit' disabled={isSearching}>
					{isSearching ? 'searching...' : 'search'}
				</button>
			</Form>
		</Wrapper>
	)
}

export default SearchForm
