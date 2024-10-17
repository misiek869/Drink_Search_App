import { useState, useEffect } from 'react'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'
import Wrapper from '../assets/wrappers/ThemeToggleWrapper'

const ThemeToggle = () => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>()

	const toggleDarkTheme = (): void => {
		const newDarkTheme = !isDarkTheme
		setIsDarkTheme(newDarkTheme)
		localStorage.setItem('darkTheme', String(newDarkTheme))
	}

	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme)
	}, [isDarkTheme])

	useEffect(() => {
		const storedTheme = localStorage.getItem('darkTheme')
		setIsDarkTheme(storedTheme === 'true')
	}, [])

	return (
		<Wrapper className='theme-btn' onClick={toggleDarkTheme} type='button'>
			{isDarkTheme ? (
				<IoSunnyOutline className='theme-icon' />
			) : (
				<IoMoon className='theme-icon' />
			)}
		</Wrapper>
	)
}

export default ThemeToggle
