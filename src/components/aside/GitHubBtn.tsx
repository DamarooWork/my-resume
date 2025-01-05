import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'
import githubWhite from '/Projects/React/my-resume/src/assets/icons/github/github-mark-white.png'
import githubBlack from '/Projects/React/my-resume/src/assets/icons/github/github-mark.png'
export default function GithubBtn() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <a href="http://github.com/DamarooWork" target="_blank">
        <img
          className="flex-none w-[40px] transition ease-in  duration-300 hover:scale-115"
          src={theme === 'light' ? githubBlack : githubWhite}
          alt="Github button"
        />
      </a>
    </>
  )
}
