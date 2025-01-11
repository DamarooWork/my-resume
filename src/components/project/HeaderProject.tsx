import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

export default function HeaderProject() {
  const { t } = useTranslation()
  //@ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })

  let params = useParams()

  const project = projects.filter(
    (project) => project.id === params.portfolioName
  )[0]

  return (
    <header className="fade-effect-top  relative lg:w-[80%] lg:mx-[10%] ">
      <h1 className="text-6xl text-center mb-12">{project.title}</h1>
    </header>
  )
}
