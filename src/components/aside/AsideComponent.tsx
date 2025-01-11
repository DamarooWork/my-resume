import { useEffect, useState } from 'react'
import FooterAsideButtons from './FooterButtons'
import HeaderAside from './HeaderAside'
import Navigation from './Navigation'
import Burger from './Burger'

export default function AsideComponent() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <aside className="z-10 bg-[var(--section-color)] dark:bg-[var(--dark-section-color)] lg:bg-inherit dark:lg:bg-inherit  fixed top-0 left-0 lg:left-0 lg:top-1/2  lg:-translate-y-1/2  lg:min-w-[--nav-width] border-b-2  lg:border-r-2 border-[var(--neutral-color)] dark:border-[var(--hover-bg-dark-color)]">
      <ul className="w-[100vw] lg:w-[var(--nav-width)] h-[var(--nav-height)] lg:h-[100vh] px-12 py-4 lg:px-0  xl:py-10 flex  lg:flex-col justify-between items-center ">
        <li>
          <HeaderAside />
        </li>
        {isMobile ? (
          <li>
            <Burger />
          </li>
        ) : (
          <>
            <li>
              <Navigation />
            </li>
            <li>
              <FooterAsideButtons />
            </li>
          </>
        )}
      </ul>
    </aside>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.')
}

function componentWillUnmount() {
  throw new Error('Function not implemented.')
}
