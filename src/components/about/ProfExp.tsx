import calendarIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendar.png'
import { useTranslation } from 'react-i18next'
export default function ProfExp({
  position,
  job,
  description,
  date,
  stack,
  linkJob,
}: IProfExp) {
  const { t } = useTranslation()
  return (
    <>
      <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8 rounded-2xl">
        <hgroup className="mb-8">
          <h2 className="text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
            {position}
          </h2>
          <h3 className="text-2xl font-black hover:underline">
            <a href={linkJob} target="_blank">
              {job}
            </a>
          </h3>
        </hgroup>
        <p className="text-xl mb-8">{description}</p>
        <h4 className="text-2xl mb-4">{t('aboutPage.stack')}</h4>
        <div className="flex flex-row flex-wrap gap-4 ">
          {stack.map((s) => {
            return (
              <div
                key={s}
                className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)] rounded-3xl py-2 px-4"
              >
                {s}
              </div>
            )
          })}
        </div>
        <div className="absolute right-5 top-5 flex flex-row  gap-2 justify-end items-center">
          <img className="w-5 h-auto" src={calendarIcon} alt="Calendar icon" />
          <time dateTime={date.start}>{date.start} -</time>
          <time dateTime={date.end}>{date.end}</time>
        </div>
      </section>
    </>
  )
}
