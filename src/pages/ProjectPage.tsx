import { useTranslation } from 'react-i18next'
import HeaderProject from '../components/project/HeaderProject'
import MainProject from '../components/project/MainProject'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AppButton from '../components/UI/AppButton'
import arrowLeftDark from '../assets/icons/project/arrowLeftDark.png'
import arrowLeftLight from '../assets/icons/project/arrowLeftLight.png'
import { ThemeContext } from '../hooks/ThemeContext'
export default function ProjectPage() {
  const { theme } = useContext(ThemeContext)
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
    <section className="h-[100vh] box-border m-auto py-12 max-w-[60%]">
      <AppButton
        href="/portfolio"
        btnClasses="fixed top-20 left-[var(--scroll-to-top-position)] rounded-2xl  border-[var(--hover-bg-color)] py-2 px-4  text-lg transition ease-in-out  duration-150 will-change-transform hover:scale-[105%] active:scale-[95%] shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)] motion-opacity-in-0 motion-translate-x-in-100"
      >
        <div className="flex flex-row gap-2 items-center">
          <img
            className="w-8 h-auto"
            src={theme === 'dark' ? arrowLeftDark : arrowLeftLight}
            alt="Left arrow"
          />
          <span>{t('project.btnBackToProjects')}</span>
        </div>
      </AppButton>
      <HeaderProject />
      <MainProject />
    </section>
  )
}
