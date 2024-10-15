import Wrapper from '../assets/wrappers/ErrorWrapper'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/undraw_server_down_s-4-lk.svg'

type RouteError = {
	status: number
	message?: string
}

const Error = () => {
	const error = useRouteError() as RouteError

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt='404 error image' />
					<h4>Upss</h4>
					<p>Something went wrong</p>
					<Link to={'/'}>Back Home</Link>
				</div>
			</Wrapper>
		)
	}
	return (
		<Wrapper>
			<div>
				<h4>Something went wrong</h4>
			</div>
		</Wrapper>
	)
}

export default Error
