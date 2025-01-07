import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'
import githubDark from '/Projects/React/my-resume/src/assets/icons/github/githubDark.png'
import githubLight from '/Projects/React/my-resume/src/assets/icons/github/githubLight.png'
export default function GithubBtn() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <a href="http://github.com/DamarooWork" target="_blank">
        <img
          className="flex-none w-[40px] transition ease-in  duration-300 hover:scale-115"
          src={theme === 'dark' ? githubDark : githubLight}
          alt="Github button"
        />
      </a>
    </>
  )
}
