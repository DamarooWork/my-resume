export default function Technology({ img, title }: ITechnology) {
  return (
    <section className="m-auto">
      <div className="technology relative   cursor-pointer p-4 rounded-full w-52 h-52  flex shadow-xl hover:shadow-2xl bg-[var(--section-color)] dark:bg-[var(--dark-section-color)]">
        <img
          className="absolute top-[20%] left-[20%]   w-[60%] h-auto m-auto transition-all ease-linear duration-500  will-change-transform "
          src={img.src}
          alt={img.alt}
        />
        <h3 className="text-[0] absolute left-[10%] w-[80%] h-[100%] text-center  pt-[30%]  z-10 opacity-0  font-bold will-change-contents">
          {title}
        </h3>
      </div>
    </section>
  )
}
