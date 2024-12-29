import { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'

const lngs: ILngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
  ko: { nativeName: 'Korean' },
}

export default function LanguageChanger() {
  const [isSelectOpen, setSelectOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)
  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng)
    setSelectOpen(false)
  }
  const mainBtnStyle = () => {
    if (isSelectOpen) {
      return 'relative h-[42px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative border-t-0 rounded-t-none  '
    } else
      return 'relative h-[42px] grow  border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative '
  }
  const elemsStyle = () => {
    if (isSelectOpen) {
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1.5'
    } else
      return 'relative flex flex-row justify-start items-center cursor-pointer px-1 pt-1'
  }
  return (
    <section className={mainBtnStyle()}>
      <div
        className={elemsStyle()}
        onClick={() => setSelectOpen((prev) => !prev)}
      >
        {theme === 'dark' && (
          <svg
            className="fill-none"
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
            className="fill-none"
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
        <span className="ml-0.5 font-medium">{t('nativeName')} </span>
        {/* {theme === 'dark' && (
          <svg
            className="fill-[var(--main-dark-color)] absolute right-2"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            color="var(--main-dark-color)"
            stroke="var(--main-dark-color)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"
            />
          </svg>
        )}
        {theme === 'light' && (
          <svg
            className="absolute right-2"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            color="var(--main-color)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"
            />
          </svg>
        )} */}
      </div>

      {isSelectOpen && (
        <div className="flex w-[calc(100%+4px)] flex-col absolute bottom-[38px] left-[-2px] border-2 border-[var(--main-color)] rounded-xl py-1 px-2   dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0 z-40">
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
