import GithubBtn from './GitHubBtn'
import LanguageChanger from './LanguageChanger'
import ThemeChanger from './ThemeChanger'

export default function FooterAsideButtons() {
  return (
    <footer className="footerAside ">
      <ul className="flex flex-row justify-between items-center gap-2">
        <li>
          <ThemeChanger />
        </li>
        <li>
          <LanguageChanger />
        </li>
        <li>
         <GithubBtn/>
        </li>
      </ul>
    </footer>
  )
}
