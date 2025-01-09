import { useEffect, useRef, useState, createRef, LegacyRef } from 'react'
import { useTranslation } from 'react-i18next'

const BaseClasses =
  'relative border-0 rounded-2xl border-[var(--hover-bg-color)] py-4 px-8  text-2xl  transition ease-in-out  duration-150 hover:scale-[105%] active:scale-[95%] shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)] cursor-pointer hover:motion-preset-seesaw '
const ActiveClasses =
  'text-[var(--link-color)] dark:text-[var(--dark-link-color)]'
// const NormalClasses = ''
export default function FilterCardsProjects({ setType }: any) {
  const [uniqFiltersArray, setUniqFiltersArray] = useState<ITypesOfProject[]>(
    []
  )
  const elementsRef = useRef<LegacyRef<HTMLLIElement>[]>(
    uniqFiltersArray.map(() => createRef())
  )
  const All = useRef<HTMLLIElement | null>(null)
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
  function sortProjects(e: ITypesOfProject | ReactNode) {
    // let nameActiveFilter = e
    // console.log(elementsRef.current)

    // elementsRef.current.style.color = 'black'
    // const Commercial = useRef()
    // const Mine = useRef()
    // const Fun = useRef()
    // const Old = useRef()

    setType(e)
  }
  return (
    <ul className="flex flex-wrap justify-center gap-5 mb-16 motion-preset-expand  motion-delay-700  ">
      <li ref={All} className={BaseClasses} onClick={() => sortProjects('All')}>
        All
      </li>
      {uniqFiltersArray.map((e: ITypesOfProject, i) => {
        return (
          <li
            ref={elementsRef.current[i]}
            key={e}
            className={BaseClasses}
            onClick={() => sortProjects(e as ITypesOfProject | ReactNode)}
          >
            {e}
          </li>
        )
      })}
    </ul>
  )
}
