import { useTranslation } from 'react-i18next'
import { useContext, useState } from 'react'
import copyIconDark from '/Projects/React/my-resume/src/assets/icons/contacts/copyIconDark.png'
import copyIconLight from '/Projects/React/my-resume/src/assets/icons/contacts/copyIconLight.png'
import downloadDark from '/Projects/React/my-resume/src/assets/icons/contacts/downloadDark.png'
import downloadLight from '/Projects/React/my-resume/src/assets/icons/contacts/downloadLight.png'
import openLinkDark from '/Projects/React/my-resume/src/assets/icons/contacts/openLinkDark.png'
import openLinkLight from '/Projects/React/my-resume/src/assets/icons/contacts/openLinkLight.png'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function Contact({
  title,
  linkHref,
  content,
  img,
  download,
}: IContact) {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [contentValue, setContentValue] = useState(content)
  function handleCopyText(content: string) {
    navigator.clipboard.writeText(content)
    if (contentValue !== t('contactsPage.copyText')) {
      setContentValue(t('contactsPage.copyText'))
      setTimeout(() => {
        setContentValue(content)
      }, 3000)
      clearTimeout
    }
  }
  return (
    <>
      {download && linkHref ? (
        <a
          className="max-w-[30vw] min-w-[15vw] bg-[var(--section-color)] dark:bg-[var(--dark-section-color)]   border-0 rounded-3xl py-4 px-6  transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%] will-change-transform"
          href={linkHref}
          download
        >
          <section className="relative flex flex-col justify-between items-center">
            <img
              className="w-[40px] h-auto"
              src={
                img.srcWhite
                  ? theme === 'dark'
                    ? img.src
                    : img.srcWhite
                  : img.src
              }
              alt={img.alt}
            />
            <h3 className="text-[2rem] ">{title}</h3>
            <p className="text-[1.5rem]">{content}</p>
            <img
              className="absolute top-0 right-0 w-6 h-auto"
              src={theme === 'dark' ? downloadDark : downloadLight}
              alt="Download icon"
            />
          </section>
        </a>
      ) : linkHref ? (
        <a
          className="max-w-[30vw]  min-w-[15vw] bg-[var(--section-color)] dark:bg-[var(--dark-section-color)]  border-0 rounded-3xl py-4 px-6 transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%] will-change-transform"
          href={linkHref}
          target="_blank"
        >
          <section className="relative flex flex-col justify-between items-center">
            <img
              className="w-[40px] h-auto"
              src={
                img.srcWhite
                  ? theme === 'dark'
                    ? img.src
                    : img.srcWhite
                  : img.src
              }
              alt={img.alt}
            />
            <h3 className="text-[2rem]">{title}</h3>
            <p className="text-[1.5rem]">{content}</p>
            <img
              className="absolute top-0 right-0 w-5 h-auto"
              src={theme === 'dark' ? openLinkDark : openLinkLight}
              alt="Open link icon"
            />
          </section>
        </a>
      ) : (
        <section
          className=" relative max-w-[30vw] min-w-[15vw] flex flex-col justify-between items-center   bg-[var(--section-color)] dark:bg-[var(--dark-section-color)]   transition ease-in  duration-300  border-0 rounded-3xl py-4 px-6 cursor-pointer hover:scale-[105%] active:scale-[100%] will-change-transform "
          onClick={() => handleCopyText(content)}
        >
          <img
            className="w-[40px] h-auto"
            src={
              img.srcWhite
                ? theme === 'dark'
                  ? img.src
                  : img.srcWhite
                : img.src
            }
            alt={img.alt}
          />
          <h3 className="text-[2rem]">{title}</h3>
          <img
            className="absolute top-[1rem] right-[1.5rem] w-5 h-auto "
            src={theme === 'dark' ? copyIconDark : copyIconLight}
            alt="Copy icon"
          />
          <p className="text-[1.5rem]">{contentValue}</p>
        </section>
      )}
    </>
  )
}
