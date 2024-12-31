import HeaderContactsPage from '../components/contacts/HeaderContactsPage'
import MainContacts from '../components/contacts/MainContacts'

export default function ContactsPage() {
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[80%]">
      <HeaderContactsPage />
      <MainContacts />
    </section>
  )
}
