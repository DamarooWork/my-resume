import { useTranslation } from 'react-i18next'

export default function HeaderExperience() {
  const { t } = useTranslation()
  return (
    <header>
      <h1 className="text-[4rem] text-center mb-12">
        {t('experiencePage.h1')}
      </h1>
    </header>
  )
}
