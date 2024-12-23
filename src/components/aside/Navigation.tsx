import LanguageChanger from './LanguageChanger'
import Links from './Links'

export default function Navigation() {
  // const classLink: string =
  //   'bg-white text-black py-2 px-4  rounded-lg  hover:cursor-pointer shadow-gray-200  transform-3d rotate-x-51 rotate-z-43 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl  active:bg-gray-100 '
  return (
    <aside className="z-40 fixed left-[20px] top-1/2  -translate-y-1/2  min-w-[--nav-width] border-l-4 border-[var(--main-color)]  px-5">
      <div className=" flex flex-col">
        <header className="text-3xl font-bold">Damaroo</header>
        <nav>
          <Links />
        </nav>
        <LanguageChanger />{' '}
      </div>
    </aside>
  )
}
