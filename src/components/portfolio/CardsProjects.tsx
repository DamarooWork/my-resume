import CardProject from './CardProject'
import FilterCardsProjects from './FilterCardsProjects'
import { useTranslation } from 'react-i18next'

export default function CardsProjects() {
  const filteredArray: IProject[] = []
  const type: ITypesOfProject = ''
  const { t } = useTranslation()
  // @ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })
  return (
    <>
      <FilterCardsProjects setter={type} />
      <section className="grid grid-cols-1  sm:grid-cols-1 xl:grid-cols-[repeat(2,_1fr)] 3xl:grid-cols-[repeat(3,_1fr)]  flex-nowrap gap-20 pb-12">
        {type
          ? projects
              .filter((project: IProject) => {
                if (project.categories.includes(type)) {
                  filteredArray.push(project as IProject)
                }
                console.log(filteredArray)

                return filteredArray
              })
              .map((filteredProject) => {
                return (
                  <CardProject key={filteredProject.id} {...filteredProject} />
                )
              })
          : projects.map((project) => {
              return <CardProject key={project.id} {...project} />
            })}
      </section>
    </>
  )
}
