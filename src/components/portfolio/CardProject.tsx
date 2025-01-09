import { useNavigate } from 'react-router-dom'
import './style.css'

export default function CardProject({
  id,
  img,
  title,
  // link,
  // date,
  // description,
  // stackTitle,
  stack,
}: // categories,
// myRole
IProject) {
  const nav = useNavigate()
  function handleClickProject(path: string) {
    nav(path)
  }
  return (
    <section
      onClick={() => handleClickProject(id)}
      className="card-project group h-96 relative  flex flex-col justify-start  text-left cursor-pointer motion-preset-expand  motion-delay-0 rounded-2xl shadow-[0_0_15px_10px_rgba(30,27,75,0.2)] hover:shadow-[0_0_25px_10px_rgba(30,27,75,0.6)] dark:shadow-[0_0_15px_10px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_10px_25px_10px_rgba(255,255,255,0.6)] "
    >
      <div className=" w-full basis-60 overflow-hidden rounded-2xl rounded-b-none ">
        <div className="relative w-full h-full">
          <img
            className=" absolute w-full h-full object-cover  group-hover:scale-115   m-auto transition-all ease-in-out duration-500 will-change-transform"
            src={img.src}
            alt={img.alt}
          />
        </div>
      </div>
      <section className=" px-2 py-4 text-center ">
        <header className="mb-6">
          <h3 className="text-4xl">{title}</h3>
        </header>

        <footer className="">
          <ul className="flex flex-row gap-4  justify-center ">
            {stack.slice(0, 3).map((tech, i) => {
              return (
                <li
                  key={i}
                  className="border-2 border-[var(--main-color)] dark:border-[var(--dark-main-color)]  rounded-3xl py-2 px-4"
                >
                  {tech}
                </li>
              )
            })}
          </ul>
        </footer>
      </section>
    </section>
  )
}
