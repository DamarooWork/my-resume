import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderPortfolio from '../components/portfolio/HeaderPortfolio'
import MainPortfolio from '../components/portfolio/MainPortfolio'

export default function PortfolioPage() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('navigation.portfolio')
  }, [localStorage.i18nextLng])
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[80%]">
      <HeaderPortfolio />
      <MainPortfolio />
    </section>
  )
}
