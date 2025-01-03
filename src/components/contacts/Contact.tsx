import { useTranslation } from 'react-i18next'
import downloadIcon from '/Projects/React/my-resume/src/assets/icons/contacts/download.png'
import openLinkIcon from '/Projects/React/my-resume/src/assets/icons/contacts/open-link.png'
import copyIcon from '/Projects/React/my-resume/src/assets/icons/contacts/copy-link-icon.png'
import { Suspense, useState } from 'react'
import AppLoading from '../UI/AppLoading'

export default function Contact({
  title,
  linkHref,
  content,
  img,
  download,
}: IContact) {
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
    <Suspense fallback={<AppLoading />}>
      {download && linkHref ? (
        <a
          className="max-w-[30vw] min-w-[15vw] dark:bg-[var(--hover-bg-color)]  bg-[var(--neutral-color)] dark:text-[var(--main-color)]   border-0 rounded-3xl py-4 px-6  transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%] will-change-transform"
          href={linkHref}
          download
        >
          <section className="relative flex flex-col justify-between items-center">
            <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

            <h2 className="text-[2rem] ">{title}</h2>

            <p className="text-[1.5rem]">{content}</p>
            <img
              className="absolute top-0 right-0 w-6 h-auto"
              src={downloadIcon}
              alt="Download icon"
            />
          </section>
        </a>
      ) : linkHref ? (
        <a
          className="max-w-[30vw]  min-w-[15vw] dark:bg-[var(--hover-bg-color)]  bg-[var(--neutral-color)] dark:text-[var(--main-color)]  border-0 rounded-3xl py-4 px-6 transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%] will-change-transform"
          href={linkHref}
          target="_blank"
        >
          <section className="relative flex flex-col justify-between items-center">
            <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

            <h2 className="text-[2rem]">{title}</h2>

            <p className="text-[1.5rem]">{content}</p>
            <img
              className="absolute top-0 right-0 w-5 h-auto"
              src={openLinkIcon}
              alt="Open link icon"
            />
          </section>
        </a>
      ) : (
        <section
          className="relative max-w-[30vw] min-w-[15vw] flex flex-col justify-between items-center   bg-[var(--neutral-color)] dark:bg-[var(--hover-bg-color)] dark:text-[var(--main-color)]  transition ease-in  duration-300  border-0 rounded-3xl py-4 px-6 cursor-pointer hover:scale-[105%] active:scale-[100%] will-change-transform"
          onClick={() => handleCopyText(content)}
        >
          <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

          <h2 className="text-[2rem]">{title}</h2>

          <img
            className="absolute top-[1rem] right-[1.5rem] w-5 h-auto opacity-60"
            src={copyIcon}
            alt="Copy icon"
          />
          <p className="text-[1.5rem]">{contentValue}</p>
        </section>
      )}
    </Suspense>
  )
}
