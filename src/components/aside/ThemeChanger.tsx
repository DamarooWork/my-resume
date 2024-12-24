import { useContext, useState } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function ThemeChanger() {
  const [isDarkMode, setDarkMode] = useState(true)
  const { theme, toggleTheme } = useContext(ThemeContext)

  function handleChangeThemeLight() {
    localStorage.theme = 'light'
    toggleTheme()
    setDarkMode(true)
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }
  function handleChangeThemeDark() {
    localStorage.theme = 'dark'
    toggleTheme()

    setDarkMode(false)
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }
  return (
    <div>
      {isDarkMode ? (
        <img
          className="cursor-pointer"
          width={50}
          src="src\assets\themesForLight.png"
          alt="Light theme"
          onClick={() => handleChangeThemeDark()}
        />
      ) : (
        <img
          width={50}
          className="cursor-pointer"
          src="src\assets\themeForDark.png"
          alt="Dark theme"
          onClick={() => handleChangeThemeLight()}
        />
      )}
    </div>
  )
}
