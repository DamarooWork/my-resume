import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function Technology({ img, title }: ITechnology) {
  const { theme } = useContext(ThemeContext)
  return (
    <section className="m-auto fade-effect p-16">
      <div className="technology relative cursor-pointer p-4 rounded-full w-52 h-52  flex shadow-white hover:shadow-white shadow-lg hover:shadow-xl bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] transition-shadow ease-in-out duration-500">
        <img
          className="absolute top-[20%] left-[20%]   w-[60%] h-auto m-auto transition-all ease-linear duration-500  will-change-transform rounded-2xl "
          src={
            img.srcForTheme
              ? theme === 'dark'
                ? img.src
                : img.srcForTheme
              : img.src
          }
          alt={img.alt}
        />
        <h3 className="text-[0] absolute left-[10%] w-[80%] h-[100%] text-center  pt-[30%]  z-10 opacity-0  font-bold will-change-contents transition-all ease-linear duration-500  ">
          {title}
        </h3>
      </div>
    </section>
  )
}
