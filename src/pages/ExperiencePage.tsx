import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderExperience from '../components/experience/HeaderExperience'
import MainExperience from '../components/experience/MainExperience'

export default function ExperiencePage() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('navigation.experience')
  }, [localStorage.i18nextLng])
  return (
    <section className="h-[100vh] box-border m-auto pt-12 max-w-[90%] lg:max-w-[80%]">
      <HeaderExperience />
      <MainExperience />
    </section>
  )
}
