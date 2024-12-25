import { Link, NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const { t } = useTranslation()

  return (
    <nav>
      <ul
        className="flex flex-col justify-center text-[var(--main-color)]
       dark:text-[var(--main-dark-color)]"
      >
        <Link to="/">{t('navigation.home')}</Link>
        <Link to="/about">{t('navigation.about')}</Link>
        <Link to="/experience">{t('navigation.experience')}</Link>
        <Link to="/portfolio">{t('navigation.portfolio')}</Link>
        <Link to="/contacts">{t('navigation.contacts')}</Link>
      </ul>
    </nav>
  )
}
