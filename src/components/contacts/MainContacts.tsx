import Contact from './Contact'
import { useTranslation } from 'react-i18next'
// const Contacts: IContact[] = ContactsJson

export default function MainContacts() {
  const { t } = useTranslation()
  // @ts-ignore
  const contacts: IContact[] = t('contactsPage.contacts', {
    returnObjects: true,
  })
  return (
    <main className="pt-5 grid grid-cols-3 gap-12 justify-items-center fade-effect">
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.title}
            title={contact.title}
            linkHref={contact.linkHref}
            content={contact.content}
            img={contact.img}
            download={contact.download}
          />
        )
      })}
    </main>
  )
}
