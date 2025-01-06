export default function Technology({ img, title }: ITechnology) {
  return (
    <section className=" m-auto">
      <div className="technology relative   cursor-pointer p-4 rounded-full w-52 h-52  flex shadow-xl hover:shadow-2xl ">
        <img
          className="absolute top-[10%] left-[10%]  rounded-full w-[80%] h-auto m-auto  animate-[spin_4s_linear_infinite] "
          src={img.src}
          alt={img.alt}
        />
        <h3 className=" absolute w-[80%] h-[100%] text-center  m-auto pt-[30%]  z-10 opacity-0 text-3xl font-bold">
          {title}
        </h3>
      </div>
    </section>
  )
}
