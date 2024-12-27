import { useTranslation } from 'react-i18next'
import './mainpage.css'
import avatar from '/Projects/React/my-resume/src/assets/images/myAvatar.jpg'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="headerHomePage flex flex-row justify-between">
        <div className="max-w-[55%] ">
          <h1>{t('home.h1')}</h1>
          <p>{t('home.about')}</p>
        </div>

        <img
          className="slice-effect max-w-[40%]"
          src={avatar}
          alt="My photo, beatiful man with long hair"
        />
      </header>
    </>
  )
}
