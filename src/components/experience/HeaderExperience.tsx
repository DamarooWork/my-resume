import { useTranslation } from 'react-i18next'

export default function HeaderExperience() {
  const { t } = useTranslation()
  return (
    <header className="fade-effect-top">
      <h1 className="text-[4rem] text-center">{t('experiencePage.h1')}</h1>
    </header>
  )
}
