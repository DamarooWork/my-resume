import { useEffect } from 'react'
import HeaderAbout from '../components/about/HeaderAbout'
import MainAbout from '../components/about/MainAbout'
import { useTranslation } from 'react-i18next'
export default function AboutPage() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('navigation.about')
  }, [localStorage.i18nextLng])
  return (
    <section className="min-h-[100vh] box-border m-auto pt-10 max-w-[80%]">
      <HeaderAbout />
      <MainAbout />
    </section>
  )
}
