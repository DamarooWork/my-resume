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
  const { t, i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const ref = useRef<HTMLElement>(null)
  useClickOutside(ref, () => setSelectOpen(false))

  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng)
    setSelectOpen(false)
  }
  const mainBtnStyle = () => {
    if (isSelectOpen) {
      return 'relative h-[40px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative border-t-0 rounded-t-none  transition-transform ease-in  duration-300 hover:scale-115 will-change-transform'
    } else
      return 'relative h-[40px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative transition-transform ease-in  duration-300 hover:scale-115 will-change-transform'
  }
  const elemsStyle = () => {
    if (isSelectOpen) {
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1.5 mr-2  text-nowrap'
    } else
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1 mr-2  text-nowrap'
  }
  const modalStyle = () => {
    return 'flex  w-[calc(100%+4px)] flex-col absolute bottom-[36px] left-[-2px] border-2 border-[var(--main-color)] rounded-xl pt-2 px-2   dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0'
  }
  return (
    <section className={mainBtnStyle()} ref={ref}>
      <div
        className={elemsStyle()}
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
        <div className={modalStyle()}>
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
  )
}
