export default function Contact({ title, linkHref, content, img }: IContact) {
  return (
    <>
      {linkHref ? (
        <a
          className="max-w-[30vw] dark:bg-[var(--hover-bg-color)]  bg-[var(--main-dark-color)] dark:text-[var(--main-color)] min-w-[15vw]  border-0 rounded-3xl py-4 px-6 shadow-3xl hover:scale-[105%] active:scale-[100%]"
          href={linkHref}
          target="_blank"
        >
          <section className="flex flex-col justify-between items-center">
            <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

            <h2 className="text-[2rem]">{title}</h2>

            <p className="text-[1.5rem]">{content}</p>
          </section>
        </a>
      ) : (
        <section className="flex flex-col justify-between items-center   bg-[var(--main-dark-color)] dark:bg-[var(--hover-bg-color)] dark:text-[var(--main-color)] max-w-[30vw] min-w-[15vw]  border-0 rounded-3xl py-4 px-6 shadow-3xl  ">
          <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

          <h2 className="text-[2rem]">{title}</h2>

          <p className="text-[1.5rem]">{content}</p>
        </section>
      )}
    </>
  )
}
