import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Links() {
  const { t } = useTranslation()

  return (
    <>
      <ul className="flex flex-col justify-center ">
        <Link to="/my-resume/home">{t('navigation.home')}</Link>
        <Link to="/my-resume/about">{t('navigation.about')}</Link>
        <Link to="/my-resume/experience">{t('navigation.experience')}</Link>
        <Link to="/my-resume/portfolio">{t('navigation.portfolio')}</Link>
        <Link to="/my-resume/contacts">{t('navigation.contacts')}</Link>
      </ul>
    </>
  )
}
