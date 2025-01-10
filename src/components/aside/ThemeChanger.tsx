import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

import darkmodeDark from '/Projects/React/my-resume/src/assets/icons/theme/darkmodeDark.png'
import darkmodeLight from '/Projects/React/my-resume/src/assets/icons/theme/darkmodeLight.png'
export default function ThemeChanger() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  function handleChangeTheme() {
    if (theme === 'dark') {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }
    toggleTheme()
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }
  return (
    <>
      <img
        className="w-[38px] xl:w-10 h-auto cursor-pointer flex-none transition-transform ease-in  duration-300 hover:scale-115"
        onClick={() => handleChangeTheme()}
        src={theme === 'dark' ? darkmodeDark : darkmodeLight}
        alt="Dark mode icon"
      />
    </>
  )
}
