import calendarLight from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarLight.png'
import calendarDark from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendarDark.png'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../hooks/ThemeContext'
import { useContext } from 'react'
export default function ProfExp({
  position,
  job,
  description,
  date,
  stack,
  linkJob,
  workDoneTitle,
  workDone,
}: IProfExp) {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8  mb-16 border-2 rounded-2xl  border-[var(--link-color)] dark:border-[var(--dark-link-color)] ">
      <hgroup className="mb-8">
        <h2 className="text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
          {position}
        </h2>
        <h3 className="text-2xl font-black ">
          <a className="hover:underline" href={linkJob} target="_blank">
            {job}
          </a>
        </h3>
      </hgroup>
      <section className="flex flex-row flex-wrap gap-2 text-xl mb-4">
        <h3>{workDoneTitle}</h3>
        {'-'}
        <a
          className="text-[var(--link-color)] dark:text-[var(--dark-link-color)] hover:underline"
          href={workDone}
          target="_blank"
        >
          {workDone}
        </a>
      </section>
      <p className="text-xl mb-8">{description}</p>
      <h4 className="text-2xl mb-4">{t('aboutPage.stack')}</h4>
      <ul className="flex flex-row flex-wrap gap-4 ">
        {stack.map((s) => {
          return (
            <li
              key={s}
              className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)]  rounded-3xl py-2 px-4"
            >
              {s}
            </li>
          )
        })}
      </ul>
      <div className="absolute right-5 top-6 flex flex-row  gap-2 justify-end items-center">
        <img
          className="w-5 h-auto"
          src={theme === 'dark' ? calendarDark : calendarLight}
          alt="Calendar icon"
        />
        <time dateTime={date.start}>{date.start} -</time>
        <time dateTime={date.end}>{date.end}</time>
      </div>
    </section>
  )
}
