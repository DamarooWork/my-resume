import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext'
import { Spin as Hamburger } from 'hamburger-react'
import Navigation from './Navigation'
import FooterAsideButtons from './FooterButtons'
import { useClickOutside } from '../../hooks/useClickOutside'
export default function Burger() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext)
  const ref = useRef<HTMLElement>(null)
  useClickOutside(ref, () => setOpen(false))
  return (
    <section ref={ref} className="relative">
      {isOpen ? (
        <div className="flex gap-5 flex-col  fixed top-0 right-0 p-[65px_20px_20px]    bg-white/50  dark:bg-black/50 rounded-bl-2xl">
          <Navigation />
          <FooterAsideButtons />
        </div>
      ) : null}
      <Hamburger
        color={
          theme === 'dark' ? 'var(--main-dark-color)' : 'var(--main-color)'
        }
        toggled={isOpen}
        toggle={setOpen}
      />
    </section>
  )
}
