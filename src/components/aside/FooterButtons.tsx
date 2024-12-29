import GithubBtn from './GitHubBtn'
import LanguageChanger from './LanguageChanger'
import ThemeChanger from './ThemeChanger'

export default function FooterAsideButtons() {
  return (
    <footer className="footerAside h-min-[42px]">
      <ul className="flex flex-row justify-between items-center gap-4 ">
        <li>
          <ThemeChanger />
        </li>
        <li>
          <LanguageChanger />
        </li>
        <li>
          <GithubBtn />
        </li>
      </ul>
    </footer>
  )
}
