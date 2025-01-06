import FooterAsideButtons from './FooterButtons'
import HeaderAside from './HeaderAside'
import Navigation from './Navigation'

export default function AsideComponent() {
  // const classLink: string =
  //   'bg-white text-black py-2 px-4  rounded-lg  hover:cursor-pointer shadow-gray-200  transform-3d rotate-x-51 rotate-z-43 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl  active:bg-gray-100 '
  return (
    <aside className=" z-1000 bg-inherit dark:bg-inherit fixed left-0 top-1/2  -translate-y-1/2  min-w-[--nav-width]  border-r-2 border-[var(--neutral-color)] dark:border-[var(--hover-bg-dark-color)] asideBorder ">
      <div className="h-[100vh] px-5 py-10 flex flex-col justify-between items-center w-[var(--nav-width)]">
        <HeaderAside />

        <Navigation />

        <FooterAsideButtons />
      </div>
    </aside>
  )
}
