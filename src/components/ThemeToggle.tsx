import { useState, useEffect } from 'react'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'

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

	return (
		<button className='theme-btn' onClick={toggleDarkTheme} type='button'>
			{isDarkTheme ? (
				<IoSunnyOutline className='theme-icon' />
			) : (
				<IoMoon className='theme-icon' />
			)}
		</button>
	)
}

export default ThemeToggle
