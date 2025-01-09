import { useTranslation } from 'react-i18next'
import CardsProjects from './CardsProjects'

export default function MainPortfolio() {
  const { t } = useTranslation()
  return (
    <main className="">
      <section className="flex flex-col justify-start items-center text-center mb-16">
        <h2 className="text-5xl mb-8 motion-preset-expand motion-duration-1000 motion-delay-200">
          {t('portfolioPage.h2')}
        </h2>
        <p className="text-3xl motion-preset-expand motion-duration-1000 motion-delay-500 ">
          {t('portfolioPage.info')}
        </p>
      </section>
      <CardsProjects />
    </main>
  )
}
