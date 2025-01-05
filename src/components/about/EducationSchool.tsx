// import calendarIcon from '/Projects/React/my-resume/src/assets/icons/aboutPage/calendar.png'
// import { useTranslation } from 'react-i18next'
export default function EducationSchool() {
  // const { t } = useTranslation()
  return (
    <section className="relative flex flex-col bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] py-4 px-8 rounded-2xl border-2 border-[var(--link-color)] dark:border-[var(--dark-link-color)]">
      <h2 className="text-typing text-3xl leading-relaxed text-center">
        Coding................
      </h2>
      <hgroup className="mb-8">
        <h2 className="text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] "></h2>
        <h3 className="text-2xl font-black hover:underline"></h3>
      </hgroup>
      <p className="text-xl mb-8"></p>
      <h4 className="text-2xl mb-4"></h4>
      <div className="flex flex-row flex-wrap gap-4 "></div>
      <div className="absolute right-5 top-5 flex flex-row  gap-2 justify-end items-center"></div>
    </section>
  )
}
