import { Link } from 'react-router-dom'
import About from './About'

const HomeLayout = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to='/about'>About</Link>
		</div>
	)
}

export default HomeLayout
