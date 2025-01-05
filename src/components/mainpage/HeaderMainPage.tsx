import { useTranslation } from 'react-i18next'
import './mainpage.css'
import avatar from '/Projects/React/my-resume/src/assets/images/myAvatar.jpg'
import hoverIconSrc from '/Projects/React/my-resume/src/assets/icons/Others/hover-icon-png-23.jpg'
import AppButton from '../UI/AppButton'
import Resume_Kichigin_LA from '/Projects/React/my-resume/src/assets/files/Resume_Kichigin_LA.pdf'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className=" basis-[100%] headerHomePage flex flex-col-reverse xl:flex-row  justify-between  text-center   ">
        <div className=" xl:basis-[50%] mt-8 mb-8 ">
          <div className="fade-effect">
            <h1 className="mb-8  ">{t('home.h1')}</h1>
            <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />
            <h2 className="mb-4 mt-4 m-auto">{t('home.h2')}</h2>
            <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />
            <h3 className="mt-8">{t('home.about')}</h3>
          </div>
          <div className="fade-effect fade-time-500 py-[8vh]">
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
        </div>
        <div className=" relative mt-8 xl:mt-0 xl:basis-[40%]  ">
          <img
            loading="lazy"
            className=" absolute top-[10%] left-[25%]   xl:top-[10%] 2xl:top-0 xl:left-0 parallax-effect w-[50%] xl:w-[100%] max-w-[600px]  h-auto  "
            src={avatar}
            alt="Beatiful man with long hair"
          />
          <img
            className="absolute top-[20%]  xl:top-[15%] 2xl:top-[5%] right-[30%]  xl:right-[25%] w-[3%] xl:w-[5%] h-auto"
            src={hoverIconSrc}
            alt="Hover icon"
          />
        </div>
      </header>
    </>
  )
}
