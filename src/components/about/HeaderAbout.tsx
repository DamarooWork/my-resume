import { useTranslation } from 'react-i18next'

export default function HeaderAbout() {
  const { t } = useTranslation()
  return (
    <header>
      <h1 className="text-[4rem] text-center mb-20">{t('HeaderAbout.h1')}</h1>
    </header>
  )
}
