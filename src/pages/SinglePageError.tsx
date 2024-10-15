import { useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/AboutPageWrapper'

type RouteError = {
	status: number
	message?: string
}

const SinglePageError = () => {
	const error = useRouteError() as RouteError

	return (
		<Wrapper>
			<div>
				<h4>Something went wrong</h4>
				<p>{error.message}</p>
			</div>
		</Wrapper>
	)
}

export default SinglePageError
