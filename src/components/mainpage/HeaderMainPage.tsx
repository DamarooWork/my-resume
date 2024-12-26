import { useTranslation } from 'react-i18next'
import './mainpage.css'
import avatar from '/Projects/React/my-resume/src/assets/images/myAvatar.jpg'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="headerHomePage">
        <h1>{t('home.h1')}</h1>
        <p>{t('home.about')}</p>
        <img
          sizes="100"
          className="rounded-2xl max-w-[50%]"
          src={avatar}
          alt="My photo, beatiful man with long hair"
        />
      </header>
    </>
  )
}
