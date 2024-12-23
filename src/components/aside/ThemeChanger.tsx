import { useState } from 'react'

export default function ThemeChanger() {
  const [isDarkMode, setDarkMode] = useState(true)
  function handleChangeThemeLight() {
    localStorage.theme = 'light'
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
          src="src\assets\dark-mode-light.png"
          alt="Light theme"
          onClick={() => handleChangeThemeDark()}
        />
      ) : (
        <img
          width={50}
          className="cursor-pointer"
          src="src\assets\dark-mode-night.png"
          alt="Dark theme"
          onClick={() => handleChangeThemeLight()}
        />
      )}
    </div>
  )
}
