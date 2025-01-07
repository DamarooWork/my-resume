import HeaderContactsPage from '../components/contacts/HeaderContactsPage'
import MainContacts from '../components/contacts/MainContacts'

export default function ContactsPage() {
  return (
    <section className="h-[100vh] box-border m-auto pt-12 max-w-[80%]">
      <HeaderContactsPage />
      <MainContacts />
    </section>
  )
}
