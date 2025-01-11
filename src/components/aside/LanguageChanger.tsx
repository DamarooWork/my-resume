import { useState, useContext, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'
import { useClickOutside } from '/Projects/React/my-resume/src/hooks/useClickOutside'
import languageDark from '/Projects/React/my-resume/src/assets/icons/language/languageDark.png'
import languageLight from '/Projects/React/my-resume/src/assets/icons/language/languageLight.png'
const lngs: ILngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
  ko: { nativeName: 'Korean' },
}
export default function LanguageChanger() {
  const [isSelectOpen, setSelectOpen] = useState(false)
  const [isSelectSmallOpen, setSelectSmallOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { t, i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const ref = useRef<HTMLDivElement>(null)
  const refSmall = useRef<HTMLElement>(null)
  useClickOutside(ref, () => setSelectOpen(false))
  useClickOutside(refSmall, () => setSelectSmallOpen(false))
  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng)
    setSelectOpen(false)
  }
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
      {isMobile ? (
        <section
          className={`relative grow transition-transform ease-in duration-300 hover:scale-115 will-change-transform`}
          ref={refSmall}
          onClick={() => setSelectSmallOpen((prev) => !prev)}
        >
          <img
            className="h-[38px] w-auto cursor-pointer"
            src={theme === 'dark' ? languageDark : languageLight}
            alt="World icon"
          />
          {isSelectSmallOpen && (
            <div
              className={`flex max-md:text-2xl max-md:w-32 text-xl w-26 h-auto flex-col absolute top-[37px] right-[-20px] sm:right-[-30px]  md:right-[-24px] bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] border-2 border-[var(--main-color)] rounded-xl py-2 px-2 m-0  dark:border-[var(--main-dark-color)]`}
            >
              {Object.keys(lngs).map((lng: string) => (
                <button
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                  }}
                  type="submit"
                  onClick={() => handleChangeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          )}
        </section>
      ) : (
        <section
          className={`relative h-[44px] grow px-1  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl   transition-transform ease-in  duration-300 hover:scale-115 will-change-transform ${
            isSelectOpen ? 'border-t-0 rounded-t-none' : ''
          }`}
          onClick={() => setSelectOpen((prev) => !prev)}
        >
          <div
            className={` relative flex flex-row justify-start items-center   text-nowrap  cursor-pointer  ${
              isSelectOpen ? 'pt-[8px]' : 'pt-[6px]'
            }`}
            ref={ref}
          >
            <img
              className="w-7 h-auto will-change-transform"
              src={theme === 'dark' ? languageDark : languageLight}
              alt="World icon"
            />

            <span className="ml-0.5 font-medium text-[16px] will-change-transform">
              {t('nativeName')}
            </span>
          </div>

          {isSelectOpen && (
            <div
              className={`flex w-[calc(100%+4px)] flex-col absolute bottom-[36px] left-[-2px] border-2 border-[var(--main-color)] rounded-xl pt-2 px-2  dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0`}
            >
              {Object.keys(lngs).map((lng: string) => (
                <button
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                  }}
                  type="submit"
                  onClick={() => handleChangeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}
