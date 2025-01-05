import { useTranslation } from 'react-i18next'

export default function HeaderAbout() {
  const { t } = useTranslation()
  return (
    <header>
      <h1 className="text-[4rem] text-center mb-12">{t('aboutPage.h1')}</h1>
    </header>
  )
}
