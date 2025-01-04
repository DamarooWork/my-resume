import HeaderPortfolio from '../components/portfolio/HeaderPortfolio'
import MainPortfolio from '../components/portfolio/MainPortfolio'

export default function PortfolioPage() {
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[80%]">
      <HeaderPortfolio />
      <MainPortfolio />
    </section>
  )
}
