import { useEffect, useState, useContext } from 'react'
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

  return (
    <section className=" w-[125px] border-2 border-[var(--main-color)] dark:border-[var(--main-dark-color)] rounded-2xl  relative">
      <div
        className="flex flex-row justify-start items-center cursor-pointer px-1 py-1"
        onClick={() => setSelectOpen((prev) => !prev)}
      >
        {theme === 'dark' && (
          <img
            width={40}
            src="src\assets\languageForLight.png"
            alt="language"
          />
        )}
        {theme === 'light' && (
          <img width={35} src="src\assets\languageForDark.png" alt="language" />
        )}
        <span>{t('nativeName')} </span>
        <img src="src\assets\arrow-down.svg" alt="arrow-down" sizes="20" />
      </div>

      {isSelectOpen && (
        <div
          className="flex flex-col absolute top-[-84px] left-[20px] border-2 border-[var(--main-color)]
          rounded-xl py-1 px-2   dark:border-[var(--main-dark-color)] rounded-b-none  border-b-0 z-40 "
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
  )
}
