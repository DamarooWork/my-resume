import Contact from './Contact'
import ContactsJson from './contacts.json'
const Contacts: IContact[] = ContactsJson

export default function MainContacts() {
  return (
    <main className="grid grid-cols-3  justify-items-center">
      {Contacts.map((contact) => {
        return (
          <Contact
            key={contact.title}
            title={contact.title}
            linkHref={contact.linkHref}
            content={contact.content}
            img={contact.img}
          />
        )
      })}
    </main>
  )
}
