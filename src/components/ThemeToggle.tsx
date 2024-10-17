import { useState } from 'react'
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

	return <div></div>
}

export default ThemeToggle
