import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/NavbarWrapper'

const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<span className='logo'>
					Drink<span className='logo-span'>Searcher</span>
				</span>
				<div className='nav-links'>
					<NavLink className='nav-link' to='/'>
						Home
					</NavLink>
					<NavLink className='nav-link' to='/about'>
						About
					</NavLink>
					<NavLink className='nav-link' to='/newsletter'>
						Newsletter
					</NavLink>
				</div>
			</div>
		</Wrapper>
	)
}

export default Navbar
