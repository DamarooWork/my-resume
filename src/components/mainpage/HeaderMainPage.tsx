import { useTranslation } from 'react-i18next'
import './mainpage.css'
import avatar from '/Projects/React/my-resume/src/assets/images/myAvatar.jpg'
import {AppButton} from '../UI/AppButton'
import Resume_Kichigin_LA from '/Projects/React/my-resume/src/assets/files/Resume_Kichigin_LA.pdf'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="headerHomePage flex flex-row justify-between ">
        <div className="max-w-[55%]  ">
          <h1>{t('home.h1')}</h1>
          <h2>{t('home.h2')}</h2>
          <h3>{t('home.about')}</h3>
          <AppButton
            download={true}
            link_out={Resume_Kichigin_LA}
            btnClasses="border-2 rounded-xl py-2 px-4"
          >
            Мое резюме
          </AppButton>
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
