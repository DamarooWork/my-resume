import { useContext } from 'react'
import calendarIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendar.png'
import mietLogoBlack from '/Projects/React/my-resume/src/assets/icons/aboutPage/mietLogoBlack.png'
import mietLogoWhite from '/Projects/React/my-resume/src/assets/icons/aboutPage/mietLogoWhite.png'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function EducationUniversity() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const coursesArray = t('aboutPage.educationUniversity.keyCourses', {
    returnObjects: true,
  })
  return (
    <>
      <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8 rounded-2xl">
        <hgroup className="mb-8">
          <h2 className=" text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
            {t('aboutPage.educationUniversity.position')}
          </h2>
          <a
            href={t('aboutPage.educationUniversity.linkUniversity')}
            target="_blank"
          >
            <section className="flex flex-row justify-start items-center">
              <h3 className="text-2xl font-black hover:underline cursor-pointer">
                {t('aboutPage.educationUniversity.university')}
              </h3>
              {theme === 'dark' ? (
                <img
                  className="h-[5.2rem] w-auto"
                  src={mietLogoWhite}
                  alt="University logo"
                />
              ) : (
                <img
                  className="h-20 w-auto"
                  src={mietLogoBlack}
                  alt="University logo"
                />
              )}
            </section>
          </a>
        </hgroup>
        <div className="flex justify-between gap-5  mb-8  ">
          <div className="flex flex-col justify-between gap-5 text-center py-2 px-4 border-2 rounded-2xl">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.courseTitle')}
            </h4>
            <p className="text-md">
              {t('aboutPage.educationUniversity.course')}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-5 text-center py-2 px-4 border-2 rounded-2xl">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.formTitle')}
            </h4>
            <p className="text-md">{t('aboutPage.educationUniversity.form')}</p>
          </div>
          <div className="flex flex-col justify-between gap-5  text-center py-2 px-4 border-2 rounded-2xl">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.typeTitle')}
            </h4>
            <p className="text-md">{t('aboutPage.educationUniversity.type')}</p>
          </div>
        </div>
        <section>
          <h4 className="text-xl">
            {t('aboutPage.educationUniversity.keyCoursesTitle')}
          </h4>
          {theme === 'dark' ? (
            <ul className="flex flex-col list-image-[url(/Projects/React/my-resume/src/assets/icons/aboutPage/checkmarkDark.png)] list-inside">
              {(coursesArray as string[]).map((course: string, i) => {
                return <li key={i}>{course}</li>
              })}
            </ul>
          ) : (
            <ul className="flex flex-col list-image-[url(/Projects/React/my-resume/src/assets/icons/aboutPage/checkmarkLight.png)] list-inside">
              {(coursesArray as string[]).map((course: string) => {
                return <li>{course}</li>
              })}
            </ul>
          )}
        </section>

        <div className="flex flex-row flex-wrap gap-4 "></div>
        <div className="absolute right-5 top-5 flex flex-row  gap-2 justify-end items-center">
          <img className="w-5 h-auto" src={calendarIcon} alt="Calendar icon" />
          <time dateTime={t('aboutPage.educationUniversity.date.start')}>
            {t('aboutPage.educationUniversity.date.start')} -
          </time>
          <time dateTime={t('aboutPage.educationUniversity.date.end')}>
            {t('aboutPage.educationUniversity.date.end')}
          </time>
        </div>
      </section>
    </>
  )
}
