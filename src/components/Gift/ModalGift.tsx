import { useEffect } from 'react'
import close from '/Projects/React/my-resume/src/assets/icons/Others/closeRed.png'

export default function ModalGift({ children, title, onClose }: ModalProps) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <>
      <div
        className="z-20 fixed bg-black/90 top-0 right-0 left-0 bottom-0 cursor-pointer"
        onClick={onClose}
      />
      <img
        className="z-30 fixed top-10 right-10 w-[100%] max-w-[50px]  h-auto will-change-contents hover:scale-110 active:scale-95 cursor-pointer transition-transform ease-in duration-150 motion-preset-pop "
        src={close}
        alt="Кнопка закрыть"
        onClick={onClose}
      />
      {children}
      <div
        onClick={onClose}
        className="z-30 w-[100vw] h-[100vh]  fixed top-0 left-1/2 -translate-x-1/2   text-[var(--main-dark-color)] dark:text-[var(--dark-main-color)] cursor-pointer"
      >
        <h2 className=" block mt-[40vh] text-4xl text-center  font-bold motion-scale-in-[0.18] motion-translate-x-in-[200%] motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-rotate-in-[-47deg] motion-blur-in-[5px] motion-duration-[1.13s]/scale motion-duration-[1.13s]/translate motion-duration-[1.35s]/rotate motion-ease-spring-bouncy  ">
          {title}
        </h2>
      </div>
    </>
  )
}
