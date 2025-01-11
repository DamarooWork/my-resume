import { useTranslation } from 'react-i18next'
import avatar from '/images/others/myAvatar.jpg'
import fullRoundedMyAvatar from '/images/others/fullRoundedMyAvatar.png'
import AppButton from '../UI/AppButton'
import Resume_Kichigin_LA from '/files/Resume_Kichigin_LA.pdf'
import { useState, useEffect } from 'react'

export default function HeaderMainPage() {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <header className="flex flex-col-reverse xl:flex-row justify-start lg:justify-between text-center items-center xl:items-start mt-16 lg:mt-0">
        <div className=" basis-[65%] lg:basis-[50%] xl:mt-8 xl:mb-8 ">
          <div className="fade-effect">
            <h1 className="text-6xl mb-4 xl:mb-8">{t('home.h1')}</h1>
            <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />
            <h2 className="text-4xl text-typing my-4  m-auto">
              {t('home.h2')}
            </h2>
            <hr className="border-[var(--main-color)] dark:border-[var(--dakr-main-color)]" />
            <h3 className="text-3xl mt-4 xl:mt-8">{t('home.about')}</h3>
          </div>
          <div className="fade-effect fade-time-500 py-[4vh] xl:py-[8vh]">
            <AppButton
              link_out={Resume_Kichigin_LA}
              btnClasses="relative border-0 rounded-2xl border-[var(--hover-bg-color)] py-4 px-8  text-2xl gradient-bg text-white transition ease-in-out  duration-150 hover:scale-[105%] active:scale-[95%] shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)]"
            >
              <>
                {t('home.btnText')}
                <span className="animate-ping absolute top-[-5px] right-[-5px] inline-flex h-4 w-4 rounded-full bg-[var(--link-color)] dark:bg-[var(--dark-link-color)] opacity-75"></span>
                <span className="absolute inline-flex top-[-5px] right-[-5px] rounded-full h-4 w-4 bg-[var(--link-color)] dark:bg-[var(--dark-link-color)]"></span>
              </>
            </AppButton>
          </div>
        </div>
        <div className=" basis-[30%] lg:basis-[40%]  lg:ml-[20%]  lg:mt-20 xl:ml-0 xl:mt-[15vh] 2xl:mt-[10vh] 3xl:mt-20 4xl:mt-0  motion-preset-expand motion-duration-2000 lg:motion-preset-flomoji-👉 max-lg:flex  max-lg:justify-center">
          <img
            loading="lazy"
            className="parallax-effect   w-[70%] lg:h-auto lg:w-[60%] xl:w-[100%] h-auto max-w-[600px] "
            src={isMobile ? fullRoundedMyAvatar : avatar}
            alt="Beatiful man with long hair"
          />
        </div>
      </header>
    </>
  )
}
