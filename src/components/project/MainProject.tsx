import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import SliderProject from './SliderProject'

export default function MainProject() {
  const { t } = useTranslation()
  //@ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })
  //@ts-ignore
  const filters: IFilter[] = t('portfolioPage.filters', {
    returnObjects: true,
  })
  let params = useParams()
  const project = projects.filter(
    (project) => project.id === params.portfolioName
  )[0]
  return (
    <main className="pb-12">
      <header className="mb-12 motion-preset-pop  motion-duration-1000 motion-delay-100">
        <time className="text-2xl" dateTime={project.date}>
          {project.date}
        </time>
        <h2 className="text-5xl text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
          {project.title}
        </h2>
      </header>

      <section className="mb-2 sm:mb-6 lg:mb-12 ">
        <p className="text-xl mb-6 motion-preset-pop  motion-duration-1000 motion-delay-200">
          {project.description}
        </p>
        <div className="flex gap-4 mb-4  items-center motion-preset-pop  motion-duration-1000 motion-delay-300">
          <h3 className="text-2xl">{t('project.stackTitle')}:</h3>
          <ul className="flex flex-wrap gap-5 items-center ">
            {project.stack.map((s) => {
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
        </div>
        <div className="flex flex-wrap gap-2 mb-4 text-2xl motion-preset-pop  motion-duration-1000 motion-delay-500">
          <h3 className=""> {t('project.linkTitle')}:</h3>
          <span className="text-[var(--link-color)] dark:text-[var(--dark-link-color)] hover:underline">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </span>
        </div>
        <div className="flex gap-4 lg:mb-4 items-center motion-preset-pop  motion-duration-1000 motion-delay-700">
          <h3 className="text-2xl">{t('project.categoriesTitle')}:</h3>
          <ul className="flex flex-nowrap gap-5">
            {project.categories.map((s, i) => {
              return (
                <li
                  key={i}
                  className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)]  rounded-3xl py-2 px-4"
                >
                  {filters.filter((f) => f.type === s).map((f) => f.name)}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <SliderProject {...project} />
      <section className="mb-12 intersect-once intersect:motion-preset-pop">
        <h3 className="text-2xl mb-4 text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
          {t('project.overviewTitle')}
        </h3>
        <p className="text-xl">{project.overview}</p>
      </section>
      <section className="mb-12 intersect-once intersect:motion-preset-pop  motion-delay-200">
        <h3 className="text-2xl mb-4 text-[var(--link-color)] dark:text-[var(--dark-link-color)]">
          {t('project.myRoleTitle')}
        </h3>
        <p className="text-xl">{project.myRole}</p>
      </section>
      <div
        className="group
       w-full h-auto intersect-once intersect:motion-preset-slide-up"
      >
        <img
          className=" w-full h-auto   rounded-2xl group-hover:scale-[102%]   m-auto transition-all ease-in-out duration-500 will-change-transform"
          src={project.img.src}
          alt={project.img.alt}
        />
      </div>
    </main>
  )
}
