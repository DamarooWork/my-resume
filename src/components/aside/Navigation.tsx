import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const { t } = useTranslation()
  const styleNavLink =
    'text-[16px] md:text-[1.5rem] py-4 px-5   dark:hover:bg-[var(--hover-bg-dark-color)] hover:bg-[var(--hover-bg-color)] rounded-lg max-lg:rounded-r-none max-lg:border-r-4 lg:rounded-l-none lg:border-l-4  tracking-wide font-bold transition ease-in  duration-300 text-nowrap '
  const styleActiveNavLink =
    'border-[var(--link-color)] text-[var(--link-color)]  dark:border-[var(--dark-link-color)] dark:text-[var(--dark-link-color)]'
  const styleNormalNavLink =
    'border-[var(--hover-bg-color)] dark:border-[var(--hover-bg-dark-color)] text-[var(--main-color)] dark:text-[var(--main-dark-color)] '
  return (
    <nav className="xl:w-[100%]">
      <ul className="flex flex-col items-end lg:items-start text-2xl  gap-[1.6rem] pr-4 lg:pr-0 lg:pl-4 py-4  motion-preset-expand ">
        <li>
          <NavLink
            id="home"
            className={({ isActive }) => {
              const linkClasses = [styleNavLink]
              isActive
                ? linkClasses.push(styleActiveNavLink)
                : linkClasses.push(styleNormalNavLink)

              return linkClasses.join(' ')
            }}
            to="/"
          >
            {t('navigation.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            id="about"
            className={({ isActive }) => {
              const linkClasses = [styleNavLink]
              isActive
                ? linkClasses.push(styleActiveNavLink)
                : linkClasses.push(styleNormalNavLink)

              return linkClasses.join(' ')
            }}
            to="/about"
          >
            {t('navigation.about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            id="experience"
            className={({ isActive }) => {
              const linkClasses = [styleNavLink]
              isActive
                ? linkClasses.push(styleActiveNavLink)
                : linkClasses.push(styleNormalNavLink)

              return linkClasses.join(' ')
            }}
            to="/experience"
          >
            {t('navigation.experience')}
          </NavLink>
        </li>
        <li>
          <NavLink
            id="portfolio"
            className={({ isActive }) => {
              const linkClasses = [styleNavLink]
              isActive
                ? linkClasses.push(styleActiveNavLink)
                : linkClasses.push(styleNormalNavLink)

              return linkClasses.join(' ')
            }}
            to="/portfolio"
          >
            {t('navigation.portfolio')}
          </NavLink>
        </li>
        <li>
          <NavLink
            id="contacts"
            className={({ isActive }) => {
              const linkClasses = [styleNavLink]
              isActive
                ? linkClasses.push(styleActiveNavLink)
                : linkClasses.push(styleNormalNavLink)

              return linkClasses.join(' ')
            }}
            to="/contacts"
          >
            {t('navigation.contacts')}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
