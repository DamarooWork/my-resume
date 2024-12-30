import close from '/Projects/React/my-resume/src/assets/icons/closeRed.png'

export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/90 top-0 right-0 left-0 bottom-0 cursor-pointer"
        onClick={onClose}
      />
      <img
        className="absolute top-10 right-20 w-[100%] max-w-[50px]  h-auto cursor-pointer z-20"
        src={close}
        alt="Кнопка закрыть"
        onClick={onClose}
      />
      {children}
      <div
        onClick={onClose}
        className="w-[100vw] h-[100vh]  fixed top-0 pt-[50vh] left-1/2 -translate-x-1/2   text-[var(--main-color)] dark:text-[var(--dark-main-color)] z-30"
      >
        <h2 className=" text-2xl text-center  font-bold z-10 ">{title}</h2>
      </div>
    </>
  )
}
