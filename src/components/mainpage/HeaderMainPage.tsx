import { useTranslation } from 'react-i18next'
import './mainpage.css'
import avatar from '/Projects/React/my-resume/src/assets/images/avatar_rounded.png'
import AppButton from '../UI/AppButton'
import Resume_Kichigin_LA from '/Projects/React/my-resume/src/assets/files/Resume_Kichigin_LA.pdf'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="headerHomePage flex flex-row justify-between ">
        <div className="max-w-[55%]  ">
          <h1 className="mb-4">{t('home.h1')}</h1>
          <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />
          <h2 className="  mb-4 mt-4 m-auto">{t('home.h2')}</h2>
          <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />

          <h3 className="mb-12 mt-4">{t('home.about')}</h3>
          <AppButton
            link_out={Resume_Kichigin_LA}
            btnClasses="relative border-0 rounded-2xl border-[var(--hover-bg-color)] py-4 px-8  text-2xl gradient-bg text-white transition ease-in-out  duration-150 hover:scale-[105%] active:scale-[95%]"
          >
            <>
              {t('home.btnText')}
              <span className="animate-ping absolute top-[-5px] right-[-5px] inline-flex h-4 w-4 rounded-full bg-[var(--link-color)] dark:bg-[var(--dark-link-color)] opacity-75"></span>
              <span className="absolute inline-flex top-[-5px] right-[-5px] rounded-full h-4 w-4 bg-[var(--link-color)] dark:bg-[var(--dark-link-color)]"></span>
            </>
          </AppButton>
        </div>
        <div className="w-[40%]">
          <img
            className="p-8 slice-effect w-[100%] max-w-[500px]  h-auto "
            src={avatar}
            alt="Beatiful man with long hair"
          />
        </div>
      </header>
    </>
  )
}
