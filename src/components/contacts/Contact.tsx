import downloadIcon from '/Projects/React/my-resume/src/assets/icons/Contacts/download.png'
import openLinkIcon from '/Projects/React/my-resume/src/assets/icons/Contacts/open-link.png'

export default function Contact({
  title,
  linkHref,
  content,
  img,
  download,
}: IContact) {
  return (
    <>
      {download && linkHref ? (
        <a
          className="max-w-[30vw] min-w-[15vw] dark:bg-[var(--hover-bg-color)]  bg-[var(--neutral-color)] dark:text-[var(--main-color)]   border-0 rounded-3xl py-4 px-6  transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%]"
          href={linkHref}
          download
        >
          <section className="relative flex flex-col justify-between items-center">
            <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

            <h2 className="text-[2rem]">{title}</h2>

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
          className="max-w-[30vw]  min-w-[15vw] dark:bg-[var(--hover-bg-color)]  bg-[var(--neutral-color)] dark:text-[var(--main-color)]  border-0 rounded-3xl py-4 px-6 transition ease-in  duration-300 hover:scale-[105%] active:scale-[100%]"
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
        <section className="max-w-[30vw] min-w-[15vw] flex flex-col justify-between items-center   bg-[var(--neutral-color)] dark:bg-[var(--hover-bg-color)] dark:text-[var(--main-color)]  transition ease-in  duration-300  border-0 rounded-3xl py-4 px-6  ">
          <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

          <h2 className="text-[2rem]">{title}</h2>

          <p className="text-[1.5rem]">{content}</p>
        </section>
      )}
    </>
  )
}