import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const { t } = useTranslation()

  return (
    <nav>
      <ul
        className="flex flex-col justify-center text-[var(--main-color)]
       dark:text-[var(--main-dark-color)]"
      >
        <Link to="/my-resume/home">{t('navigation.home')}</Link>
        <Link to="/my-resume/about">{t('navigation.about')}</Link>
        <Link to="/my-resume/experience">{t('navigation.experience')}</Link>
        <Link to="/my-resume/portfolio">{t('navigation.portfolio')}</Link>
        <Link to="/my-resume/contacts">{t('navigation.contacts')}</Link>
      </ul>
    </nav>
  )
}
