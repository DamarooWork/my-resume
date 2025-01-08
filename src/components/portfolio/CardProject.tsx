import { useNavigate } from 'react-router-dom'
import './style.css'

export default function CardProject({
  id,
  img,
  title,
  link,
  date,
  description,
  stackTitle,
  stack,
  categories,
  myRole,
}: IProject) {
  const nav = useNavigate()
  function handleClickProject(path: string) {
    nav(path)
  }
  return (
    <section
      onClick={() => handleClickProject(id)}
      className="card-project h-96 relative  flex flex-col justify-start gap-2 text-left cursor-pointer "
    >
      <div className="group w-full h-96 overflow-hidden rounded-2xl shadow-md">
        <div className="relative w-full h-full">
          <img
            className=" absolute inset-0 w-full h-full object-cover  group-hover:scale-110   m-auto transition-all ease-in-out duration-500"
            src="src\assets\images\tretyakovskaya.JPG"
          />
        </div>
      </div>

      <h3 className="text-4xl">{title}</h3>
      <ul className="flex flex-row flex-wrap gap-4">
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
    </section>
  )
}
