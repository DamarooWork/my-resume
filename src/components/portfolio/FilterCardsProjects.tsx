import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BaseClasses =
  'relative border-0 rounded-2xl border-[var(--hover-bg-color)] py-4 px-8  text-2xl  transition ease-in-out  duration-150 hover:scale-[105%] active:scale-[95%] shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)] cursor-pointer hover:motion-preset-seesaw '
const ActiveClasses =
  'text-[var(--link-color)] dark:text-[var(--dark-link-color)]'
// const NormalClasses = ''
export default function FilterCardsProjects({ setType }: any) {
  const { t } = useTranslation()
  // @ts-ignore
  const filters: IFilter[] = t('portfolioPage.filters', {
    returnObjects: true,
  })
  // @ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })
  const [uniqFiltersArray, setUniqFiltersArray] = useState<ITypesOfProject[]>(
    []
  )
  const refs = useRef<(HTMLLIElement | null)[]>(
    new Array(uniqFiltersArray.length)
  )
  const All = useRef<HTMLLIElement>(null)

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
  function sortProjects(e: ITypesOfProject | ReactNode) {
    if (All.current?.dataset.name === e && All.current) {
      const liActive = All.current
      liActive.className = `${BaseClasses} + ' ' + ${ActiveClasses}`
      for (let name in refs.current) {
        if (refs.current[name]) {
          const liNormal = refs.current[name]
          liNormal.className = BaseClasses
        }
      }
    } else {
      if (All.current) {
        const AllNormal = All.current
        AllNormal.className = BaseClasses
        for (let name in refs.current) {
          if (refs.current[name]) {
            if (refs.current[name]?.dataset.name === e) {
              const liActive = refs.current[name]
              liActive.className = `${BaseClasses} + ' ' + ${ActiveClasses}`
            } else {
              const liNormal = refs.current[name]
              liNormal.className = BaseClasses
            }
          }
        }
      }
    }

    setType(e)
  }
  return (
    <ul className="flex flex-wrap justify-center gap-5 mb-16 motion-preset-expand  motion-delay-700  ">
      <li
        ref={All}
        data-name="All"
        className={`${BaseClasses} + ' ' + ${ActiveClasses}`}
        onClick={() => sortProjects('All')}
      >
        {filters.filter((f) => f.type === 'All').map((f) => f.name)}
      </li>
      {uniqFiltersArray.map((e: ITypesOfProject, i) => {
        return (
          <li
            ref={(e) => (refs.current[i] = e)}
            key={e}
            data-name={e}
            className={BaseClasses}
            onClick={() => sortProjects(e as ITypesOfProject | ReactNode)}
          >
            {filters.filter((f) => f.type === e).map((f) => f.name)}
          </li>
        )
      })}
    </ul>
  )
}
