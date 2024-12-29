import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'
import githubWhite from '/Projects/React/my-resume/src/assets/icons/github-mark-white.png'
import githubBlack from '/Projects/React/my-resume/src/assets/icons/github-mark.png'
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
          <img
            className="flex-none w-[40px] transition ease-in  duration-300 hover:scale-115"
            src={githubBlack}
            alt="Github button"
          />
        </a>
      ) : (
        <a
          href="http://github.com/DamarooWork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="flex-none w-[40px] transition ease-in  duration-300 hover:scale-115"
            src={githubWhite}
            alt="Github button"
          />
        </a>
      )}
    </>
  )
}
