import { useState } from 'react'
import CardProject from './CardProject'
import FilterCardsProjects from './FilterCardsProjects'
import { useTranslation } from 'react-i18next'

export default function CardsProjects() {
  const [type, setType] = useState<ITypesOfProject>('All')
  const { t } = useTranslation()
  // @ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })

  return (
    <>
      <FilterCardsProjects type={type} setType={setType} />
      <section className="grid grid-cols-1  sm:grid-cols-1 xl:grid-cols-[repeat(2,_1fr)] 3xl:grid-cols-[repeat(3,_1fr)]  flex-nowrap gap-20 pb-12 motion-preset-expand  motion-delay-1000">
        {type !== 'All'
          ? projects
              .filter((project: IProject) => project.categories.includes(type))
              .map((filteredProject) => (
                <CardProject key={filteredProject.id} {...filteredProject} />
              ))
          : projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))}
      </section>
    </>
  )
}
