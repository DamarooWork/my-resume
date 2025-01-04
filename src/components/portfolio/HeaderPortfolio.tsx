import { useTranslation } from 'react-i18next'

export default function HeaderPortfolio() {
  const { t } = useTranslation()
  return (
    <header>
      <h1 className="text-[4rem] text-center mb-20">{t('portfolioPage.h1')}</h1>
    </header>
  )
}
