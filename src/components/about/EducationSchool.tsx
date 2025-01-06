import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'
import calendarLight from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarLight.png'
import calendarDark from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarDark.png'
import checkmarkDark from '/Projects/React/my-resume/src/assets/icons/aboutPage/checkmarkDark.png'
import checkmarkLight from '/Projects/React/my-resume/src/assets/icons/aboutPage/checkmarkLight.png'
import schoolLogo from '/Projects/React/my-resume/src/assets/icons/aboutPage/schoolLogo.png'

export default function EducationSchool() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const coursesArray = t('aboutPage.educationSchool.keyCourses', {
    returnObjects: true,
  })
  return (
    <>
      <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8 rounded-2xl border-2 border-[var(--link-color)] dark:border-[var(--dark-link-color)]">
        <hgroup className="mb-8">
          <h2 className=" text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] mb-2">
            {t('aboutPage.educationSchool.position')}
          </h2>

          <section className="flex flex-row justify-start items-center gap-5">
            {' '}
            <a href={t('aboutPage.educationSchool.linkSchool')} target="_blank">
              <h3 className="text-2xl font-black hover:underline cursor-pointer">
                {t('aboutPage.educationSchool.school')}
              </h3>
            </a>{' '}
            <a href={t('aboutPage.educationSchool.linkSchool')} target="_blank">
              <img
                className="h-[5.2rem] w-auto"
                src={schoolLogo}
                alt="University logo"
              />
            </a>
          </section>
        </hgroup>

        <div className="flex flex-col justify-between text-center py-2 px-4">
          <h4 className="text-xl">
            {t('aboutPage.educationSchool.courseTitle')}
          </h4>
          <p className=" italic text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
            {t('aboutPage.educationSchool.course')}
          </p>
        </div>

        <section>
          <h4 className="text-2xl mb-4 text-center">
            {t('aboutPage.educationSchool.keyCoursesTitle')}
          </h4>

          <ul className="flex flex-col list-none gap-4">
            {(coursesArray as string[]).map((course, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-row justify-start items-center gap-2"
                >
                  <img
                    src={theme === 'dark' ? checkmarkDark : checkmarkLight}
                    alt="Checkmark"
                  />
                  <li>{course}</li>
                </div>
              )
            })}
          </ul>
        </section>

        <div className="flex flex-row flex-wrap gap-4 "></div>
        <div className="absolute right-5 top-6 flex flex-row  gap-2 justify-end items-center">
          <img
            className="w-5 h-auto"
            src={theme === 'dark' ? calendarDark : calendarLight}
            alt="Calendar icon"
          />
          <time dateTime={t('aboutPage.educationSchool.date.start')}>
            {t('aboutPage.educationSchool.date.start')} -
          </time>
          <time dateTime={t('aboutPage.educationSchool.date.end')}>
            {t('aboutPage.educationSchool.date.end')}
          </time>
        </div>
      </section>
    </>
  )
}
