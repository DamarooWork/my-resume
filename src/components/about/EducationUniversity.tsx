import calendarIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendar.png'
import { useTranslation } from 'react-i18next'

export default function EducationUniversity() {
  const { t } = useTranslation()
  return (
    <>
      <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8 rounded-2xl">
        <hgroup className="mb-8">
          <h2 className="text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
            {t('aboutPage.educationUniversity.position')}
          </h2>
          <h3 className="text-2xl font-black hover:underline cursor-pointer">
            <a
              href={t('aboutPage.educationUniversity.linkUniversity')}
              target="_blank"
            >
              {t('aboutPage.educationUniversity.university')}
            </a>
          </h3>
        </hgroup>
        <div className="flex justify-between gap-5  mb-8 border-2 rounded-2xl py-2 px-4">
          <div className="flex flex-col justify-between gap-5 text-center">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.courseTitle')}
            </h4>
            <p className="text-md">
              {t('aboutPage.educationUniversity.course')}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-5 text-center">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.formTitle')}
            </h4>
            <p className="text-md">{t('aboutPage.educationUniversity.form')}</p>
          </div>
          <div className="flex flex-col justify-between gap-5  text-center">
            <h4 className="text-xl">
              {t('aboutPage.educationUniversity.typeTitle')}
            </h4>
            <p className="text-md">{t('aboutPage.educationUniversity.type')}</p>
          </div>
        </div>

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
