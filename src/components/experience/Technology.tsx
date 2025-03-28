import { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function Technology({ img, title, link }: ITechnology) {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      className={` p-12   motion-scale-in-[0] motion-translate-x-in-[-29%] motion-translate-y-in-[8%] motion-opacity-in-[0%] motion-rotate-in-[360deg] motion-duration-[0.74s]/opacity motion-ease-spring-bouncy `}
    >
      <a
        href={link}
        target="_blank"
        className=" group block technology relative cursor-pointer p-4 rounded-full h-60 w-60 3xl:w-72 3xl:h-72 shadow-[0_0_15px_10px_rgba(30,27,75,0.2)] hover:shadow-[0_0_25px_10px_rgba(30,27,75,0.6)] dark:shadow-[0_0_15px_10px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_10px_25px_10px_rgba(255,255,255,0.6)]  bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] transition-shadow ease-in-out duration-500 m-auto "
      >
        <img
          className="absolute top-[20%] left-[20%] w-[60%] h-auto m-auto transition-all ease-linear duration-500  will-change-transform rounded-2xl group-hover:motion-preset-spin motion-duration-1500"
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
      </a>
    </section>
  )
}
