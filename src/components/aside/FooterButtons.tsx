import GithubBtn from './GitHubBtn'
import LanguageChanger from './LanguageChanger'
import ThemeChanger from './ThemeChanger'

export default function FooterAsideButtons() {
  return (
    <footer className=" footerAside ">
      <ul className="mr-4 lg:mr-0 flex flex-row justify-end lg:justify-between items-center gap-4 motion-preset-expand ">
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
