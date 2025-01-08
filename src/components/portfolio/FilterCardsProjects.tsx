import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BaseClasses =
  'relative border-0 rounded-2xl border-[var(--hover-bg-color)] py-4 px-8  text-2xl  transition ease-in-out  duration-150 hover:scale-[105%] active:scale-[95%] shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)] cursor-pointer'
// const ActiveClasses =
//   'text-[var(--link-color)] dark:text-[var(--dark-link-color)]'
// const NormalClasses = ''
export default function FilterCardsProjects({ setter }: any) {
  const [uniqFiltersArray, setUniqFiltersArray] = useState<ITypesOfProject[]>(
    []
  )

  const { t } = useTranslation()
  // @ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })
  useEffect(() => {
    const filtersArray: ITypesOfProject[] = []
    projects.map((project) => {
      project.categories.map((category) => {
        filtersArray.push(category as ITypesOfProject)
      })
    })
    setUniqFiltersArray(
      filtersArray.filter(function (category, i) {
        return filtersArray.indexOf(category) == i
      })
    )
  }, [])
  function sortProjects(e: ITypesOfProject) {
    setter(e)
  }
  return (
    <ul className="flex flex-wrap justify-center gap-5 mb-16">
      {uniqFiltersArray.map((e: ITypesOfProject) => {
        return (
          <li key={e} className={BaseClasses} onClick={() => sortProjects(e as ITypesOfProject)}>
            {e}
          </li>
        )
      })}
    </ul>
  )
}
