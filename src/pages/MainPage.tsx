import HeaderMainPage from '../components/mainpage/HeaderMainPage'
import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'
export default function MainPage() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('siteTitle')
  }, [localStorage.i18nextLng])
  return (
    <main className="max-h-[100vh] lg:h-[100vh] box-border ">
      <section className="lg:h-[100vh] m-auto max-w-[90%] lg:max-w-[80%]  flex  xl:items-center ">
        <HeaderMainPage />
      </section>
    </main>
  )
}
