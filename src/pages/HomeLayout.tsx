import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
	return (
		<div>
			<nav>nav</nav>
			<Outlet />
			<footer>footer</footer>
		</div>
	)
}

export default HomeLayout
