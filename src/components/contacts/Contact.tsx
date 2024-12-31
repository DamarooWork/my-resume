export default function Contact({ title, linkHref, content, img }: IContact) {
  return (
    <>
      {linkHref ? (
        <a
          className="max-w-[30vw] min-w-[15vw] gradient-bg motion-reduce:gradient-bg border-0 rounded-3xl py-4 px-6 shadow-3xl hover:scale-[101%] active:scale-[99%]"
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
        <section className="flex flex-col justify-between items-center max-w-[30vw] min-w-[15vw] gradient-bg motion-reduce:gradient-bg border-0 rounded-3xl py-4 px-6 shadow-3xl  ">
          <img className="w-[40px] h-auto" src={img.src} alt={img.alt} />

          <h2 className="text-[2rem]">{title}</h2>

          <p className="text-[1.5rem]">{content}</p>
        </section>
      )}
    </>
  )
}
