import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'
import calendarLight from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarLight.png'
import calendarDark from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarDark.png'
import mietLogoBlack from '/Projects/React/my-resume/src/assets/icons/aboutPage/mietLogoBlack.png'
import mietLogoWhite from '/Projects/React/my-resume/src/assets/icons/aboutPage/mietLogoWhite.png'

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
          <h2 className=" text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] mb-2">
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
          <div className="flex flex-col justify-between text-center py-2 px-4">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.courseTitle')}
            </h4>
            <p className=" italic text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
              {t('aboutPage.educationUniversity.course')}
            </p>
          </div>
          <div className="flex flex-col justify-between  text-center py-2 px-4">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.formTitle')}
            </h4>
            <p className=" italic text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
              {t('aboutPage.educationUniversity.form')}
            </p>
          </div>
          <div className="flex flex-col justify-between   text-center py-2 px-4">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.typeTitle')}
            </h4>
            <p className=" italic text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
              {t('aboutPage.educationUniversity.type')}
            </p>
          </div>
        </div>
        <section>
          <h4 className="text-2xl mb-4 text-center">
            {t('aboutPage.educationUniversity.keyCoursesTitle')}
          </h4>

          <ul className="flex flex-col list-none gap-4">
            {theme === 'dark'
              ? (coursesArray as string[]).map((course, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row justify-start items-center gap-2"
                    >
                      <img
                        src="src/assets/icons/aboutPage/checkmarkDark.png"
                        alt="Checkmark"
                      />
                      <li>{course}</li>
                    </div>
                  )
                })
              : (coursesArray as string[]).map((course, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row justify-start items-center gap-2"
                    >
                      <img
                        src="src/assets/icons/aboutPage/checkmarkLight.png"
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
          {theme === 'dark' ? (
            <img
              className="w-5 h-auto"
              src={calendarDark}
              alt="Calendar icon"
            />
          ) : (
            <img
              className="w-5 h-auto"
              src={calendarLight}
              alt="Calendar icon"
            />
          )}
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
