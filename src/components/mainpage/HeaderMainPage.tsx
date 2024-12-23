import { useTranslation } from 'react-i18next'

export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="">
        <h1>{t('header.h1')}</h1>
      </header>
    </>
  )
}
