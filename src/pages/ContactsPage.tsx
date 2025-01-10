import { useEffect } from 'react'
import HeaderContactsPage from '../components/contacts/HeaderContactsPage'
import MainContacts from '../components/contacts/MainContacts'
import { useTranslation } from 'react-i18next'

export default function ContactsPage() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('navigation.contacts')
  }, [localStorage.i18nextLng])
  return (
    <section className="h-[100vh] box-border m-auto pt-12 max-w-[90%] lg:max-w-[80%]">
      <HeaderContactsPage />
      <MainContacts />
    </section>
  )
}
