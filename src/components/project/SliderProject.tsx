import { useRef } from 'react'

const normal =
  ' cursor-pointer  flex-[1_1_2%]  transition-all ease-in-out duration-500 will-change-transform rounded-2xl '
const active =
  ' cursor-pointer  flex-[6_6_0%]   transition-all ease-in-out duration-500 will-change-transform rounded-2xl motion-preset-compress motion-duration-1000'

export default function SliderProject({ imagesSourses }: IProject) {
  const refs = useRef<(HTMLDivElement | null)[]>(
    new Array(imagesSourses.length)
  )

  function clearActiveSlides() {
    for (let i in refs.current) {
      if (refs.current[i]) {
        const normalRef = refs.current[i]
        normalRef.className = normal
      }
    }
  }
  function handleClick(i: number) {
    clearActiveSlides()
    if (refs.current[i]) refs.current[i].className = active
  }

  return (
    <>
      <section className="flex w-full gap-5 items-center h-80  rounded-3xl sm:mb-6  lg:mb-12 intersect-once intersect:motion-preset-expand ">
        {imagesSourses.map((image, i) => {
          return (
            <div
              ref={(image) => (refs.current[i] = image)}
              key={i}
              className={i === 0 ? active : normal}
            >
              <img
                className="w-full h-auto rounded-2xl "
                src={image}
                onClick={() => handleClick(i)}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}
