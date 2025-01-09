import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

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
    <main>
      <header className="mb-12">
        <time className="text-2xl" dateTime={project.date}>
          {project.date}
        </time>
        <h2 className="text-5xl mt-4">{project.title}</h2>
      </header>

      <section>
        <p className="text-xl mb-6">{project.description}</p>
        <div className="flex gap-4 mb-4 items-center ">
          <span className="text-2xl">{t('project.stackTitle')}:</span>
          <ul className="flex flex-nowrap gap-5 ">
            {project.stack.map((s) => {
              return (
                <li className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)]  rounded-3xl py-2 px-4">
                  {s}
                </li>
              )
            })}
          </ul>
        </div>
        <p className="flex flex-wrap gap-2 mb-4 text-2xl">
          <span className=""> {t('project.linkTitle')}:</span>
          <span className="text-[var(--link-color)] dark:text-[var(--dark-link-color)] hover:underline">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </span>
        </p>
        <div className="flex gap-4 mb-4 items-center">
          <span className="text-2xl">{t('project.categoriesTitle')}:</span>
          <ul className="flex flex-nowrap gap-5">
            {project.categories.map((s) => {
              return (
                <li className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)]  rounded-3xl py-2 px-4">
                  {filters.filter((f) => f.type === s).map((f) => f.name)}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <div
        className="group
       w-full h-auto overflow-hidden rounded-2xl "
      >
        <div className="relative w-full h-auto">
          <img
            className=" w-full h-full object-cover  group-hover:scale-115   m-auto transition-all ease-in-out duration-500 will-change-transform"
            src={project.img.src}
            alt={project.img.alt}
          />
        </div>
      </div>
    </main>
  )
}
