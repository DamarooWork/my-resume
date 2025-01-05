import { useTranslation } from 'react-i18next'
import ProfExp from './ProfExps'
import jobBlackIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/jobBlack.png'
import jobWhiteIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/jobWhite.png'
import educationBlackIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/educationBlack.png'
import educationWhiteIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/educationWhite.png'
import { ThemeContext } from '../../hooks/ThemeContext'
import { useContext } from 'react'
import Education from './Education'
export default function MainAbout() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)
  return (
    <main className="">
      <section className="fade-effect mb-20">
        <h2 className="text-4xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] mb-4">
          {t('aboutPage.h2')}
        </h2>

        <p className="text-2xl">{t('aboutPage.aboutMe')}</p>
      </section>
      <div className=" flex flex-row justify-between">
        <section className="fade-effect fade-time-250 flex flex-col justify-start gap-5 w-[48%]">
          <header className="flex items-center gap-5">
            {theme === 'dark' && (
              <img className="w-10 h-auto" src={jobWhiteIcon} alt="Job icon" />
            )}
            {theme === 'light' && (
              <img className="w-10 h-auto" src={jobBlackIcon} alt="Job icon" />
            )}
            <h2 className="text-4xl">{t('aboutPage.profExpHeader')}</h2>
            <span className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)] rounded-2xl py-1 px-3 text-2xl">
              {t('aboutPage.profExpSumTime')}
            </span>
          </header>

          <ProfExp />
        </section>
        <section className="fade-effect fade-time-500 flex flex-col justify-start gap-5 w-[48%]">
          <header className="flex items-center gap-5">
            {theme === 'dark' && (
              <img
                className="w-10 h-auto"
                src={educationWhiteIcon}
                alt="Education icon"
              />
            )}
            {theme === 'light' && (
              <img
                className="w-10 h-auto"
                src={educationBlackIcon}
                alt="Education icon"
              />
            )}
            <h2 className="text-4xl">{t('aboutPage.educationHeader')}</h2>
            <span className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)] rounded-2xl py-1 px-3 text-2xl">
              {t('aboutPage.education')}
            </span>
          </header>

          <Education />
        </section>
      </div>
    </main>
  )
}
