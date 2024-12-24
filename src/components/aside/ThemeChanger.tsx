import { useContext, useState } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function ThemeChanger() {
  const [isDarkMode, setDarkMode] = useState(true)
  const { toggleTheme } = useContext(ThemeContext)

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
        <svg
          onClick={() => handleChangeThemeDark()}
          className="cursor-pointer fill-[var(--main-color)]"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0-1.5v-17c4.6944204 0 8.5 3.80557963 8.5 8.5 0 4.6944204-3.8055796 8.5-8.5 8.5z" />
        </svg>
      ) : (
        <svg
          onClick={() => handleChangeThemeLight()}
          className="cursor-pointer  fill-[var(--main-dark-color)]"
          height="40"
          width="40"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m29.37 11.84a13.6 13.6 0 0 0 -1.06-2.51 14.17 14.17 0 0 0 -2.41-3.23 14 14 0 1 0 0 19.8 14.17 14.17 0 0 0 2.41-3.23 13.6 13.6 0 0 0 1.06-2.51 14 14 0 0 0 0-8.32zm-25.37 4.16a12 12 0 0 1 12-12v24a12 12 0 0 1 -12-12z" />
          <path d="m0 0h32v32h-32z" fill="none" />
        </svg>
      )}
    </div>
  )
}
