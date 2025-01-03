import { useState, useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'
import { useClickOutside } from '/Projects/React/my-resume/src/hooks/useClickOutside'
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
      return 'relative h-[42px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative border-t-0 rounded-t-none  transition-transform ease-in  duration-300 hover:scale-115 backface-hidden '
    } else
      return 'relative h-[42px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative transition-transform ease-in  duration-300 hover:scale-115 backface-hidden'
  }
  const elemsStyle = () => {
    if (isSelectOpen) {
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1.5 '
    } else
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1'
  }
  const modalStyle = () => {
    return 'flex  w-[calc(100%+4px)] flex-col absolute bottom-[38px] left-[-2px] border-2 border-[var(--main-color)] rounded-xl pt-1 px-2   dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0 z-40'
  }
  return (
    <section className={mainBtnStyle()} ref={ref}>
      <div
        className={elemsStyle()}
        onClick={() => setSelectOpen((prev) => !prev)}
      >
        {theme === 'dark' && (
          <svg
            className="fill-none transition-all ease-in  duration-300"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="languageIconTitle"
            stroke="var(--main-dark-color)"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            color="var(--main-dark-color)"
          >
            <title id="languageIconTitle">Language</title>
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
            />
            <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
          </svg>
        )}
        {theme === 'light' && (
          <svg
            className="fill-none transition-all ease-in  duration-300"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="languageIconTitle"
            stroke="var(--main-color)"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            color="var(--main-color)"
          >
            <title id="languageIconTitle">Language</title>
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
            />{' '}
            <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />{' '}
          </svg>
        )}
        <span className="ml-0.5 font-medium  will-change-transform">
          {t('nativeName')}{' '}
        </span>
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
