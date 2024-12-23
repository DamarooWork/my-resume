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
          <a
            href="http://github.com/DamarooWork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src\assets\github.png" width={40} alt="Github button" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
