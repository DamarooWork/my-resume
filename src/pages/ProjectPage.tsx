import { useTranslation } from 'react-i18next'
import HeaderProject from '../components/project/HeaderProject'
import MainProject from '../components/project/MainProject'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function ProjectPage() {
  const { t } = useTranslation()
  //@ts-ignore
  const projects: IProject[] = t('portfolioPage.projects', {
    returnObjects: true,
  })
  let params = useParams()
  const project = projects.filter(
    (project) => project.id === params.portfolioName
  )[0]
  useEffect(() => {
    document.title = project.title
  }, [localStorage.i18nextLng])
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[60%]">
      <HeaderProject />
      <MainProject />
    </section>
  )
}
