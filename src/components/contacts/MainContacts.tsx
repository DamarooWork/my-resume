import { FadeInSection } from '../../hooks/FadeinSection'
import Contact from './Contact'
import { useTranslation } from 'react-i18next'

export default function MainContacts() {
  const { t } = useTranslation()
  // @ts-ignore
  const contacts: IContact[] = t('contactsPage.contacts', {
    returnObjects: true,
  })
  return (
    <main className="pt-8 grid  xl:grid-cols-[repeat(2,minmax(0,_1fr))] 2xl:grid-cols-[repeat(3,minmax(0,_1fr))] 3xl:grid-cols-[repeat(3,minmax(0,_1fr))] 4xl:grid-cols-[repeat(4,minmax(0,_1fr))]   gap-4 justify-items-center fade-effect">
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
