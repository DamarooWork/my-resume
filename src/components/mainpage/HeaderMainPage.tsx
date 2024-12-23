import { useTranslation } from 'react-i18next'
import './mainpage.css'
export default function HeaderMainPage() {
  const { t } = useTranslation()

  return (
    <>
      <header className="mainPage">
        <h1>{t('header.h1')}</h1>
      </header>
    </>
  )
}
