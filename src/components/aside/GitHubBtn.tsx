import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'
import githubWhite from '/Projects/React/my-resume/src/assets/github-mark-white.png'
import githubBlack from '/Projects/React/my-resume/src/assets/github-mark.png'
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
          <img src={githubBlack} alt="Github button" />
        </a>
      ) : (
        <a
          href="http://github.com/DamarooWork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubWhite} alt="Github button" />
        </a>
      )}
    </>
  )
}
