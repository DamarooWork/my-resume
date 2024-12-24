import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function GithubBtn() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      {theme === 'light' ? (
        <a
          href="http://github.com/DamarooWork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src\assets\github-mark.png" alt="Github button" />
        </a>
      ) : (
        <a
          href="http://github.com/DamarooWork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src\assets\github-mark-white.png" alt="Github button" />
        </a>
      )}
    </>
  )
}
