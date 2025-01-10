import { useState, useContext, useRef } from 'react'
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
  const { t, i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const ref = useRef<HTMLElement>(null)
  const refSmall = useRef<HTMLElement>(null)
  useClickOutside(ref, () => setSelectOpen(false))
  useClickOutside(refSmall, () => setSelectSmallOpen(false))
  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng)
    setSelectOpen(false)
  }
  return (
    <>
      <section
        className={`block lg:hidden relative grow transition-transform ease-in duration-300 hover:scale-115 will-change-transform`}
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
            className={`flex w-24 h-auto flex-col absolute top-[44px] right-[-20px] bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] border-2 border-[var(--main-color)] rounded-xl py-2 px-2  dark:border-[var(--main-dark-color)]`}
          >
            {Object.keys(lngs).map((lng: string) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
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
      <section
        className={`hidden lg:block relative h-[40px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl   transition-transform ease-in  duration-300 hover:scale-115 will-change-transform ${
          isSelectOpen ? 'border-t-0 rounded-t-none' : ''
        }`}
        ref={ref}
      >
        <div
          className={` relative flex flex-row justify-start items-center cursor-pointer px-1 mr-2 text-nowrap ${
            isSelectOpen ? 'pt-1.5' : 'pt-1'
          }`}
          onClick={() => setSelectOpen((prev) => !prev)}
        >
          <img
            className="w-7 h-auto"
            src={theme === 'dark' ? languageDark : languageLight}
            alt="World icon"
          />

          <span className="ml-0.5 font-medium">{t('nativeName')} </span>
        </div>

        {isSelectOpen && (
          <div
            className={`flex w-[calc(100%+4px)] flex-col absolute bottom-[36px] left-[-2px] border-2 border-[var(--main-color)] rounded-xl pt-2 px-2  dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0`}
          >
            {Object.keys(lngs).map((lng: string) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
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
    </>
  )
}
