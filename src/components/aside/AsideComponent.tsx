import FooterAsideButtons from './FooterButtons'
import HeaderAside from './HeaderAside'
import Navigation from './Navigation'

export default function AsideComponent() {
  return (
    <aside className="z-50 bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] lg:bg-inherit dark:lg:bg-inherit  fixed top-0 left-0 lg:left-0 lg:top-1/2  lg:-translate-y-1/2  lg:min-w-[--nav-width] border-b-2  lg:border-r-2 border-[var(--neutral-color)] dark:border-[var(--hover-bg-dark-color)]">
      <div className="w-[100vw] lg:w-[var(--nav-width)] h-[var(--nav-height)] lg:h-[100vh] px-5 py-2 xl:py-10 flex  lg:flex-col justify-between items-center ">
        <HeaderAside />

        <Navigation />

        <FooterAsideButtons />
      </div>
    </aside>
  )
}
