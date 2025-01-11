import { useContext, useState } from 'react'

import arrowDark from '/Projects/React/my-resume/src/assets/icons/others/arrowDark.png'
import arrowLight from '/Projects/React/my-resume/src/assets/icons/others/arrowLight.png'
import { ThemeContext } from '../../hooks/ThemeContext'

export default function ScrollButton() {
  const [visible, setVisible] = useState(false)
  const { theme } = useContext(ThemeContext)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <img
      className=" cursor-pointer h-[50px] lg:h-[60px] 2xl:h-[75px] w-auto fixed bottom-10 left-5  lg:left-[var(--scroll-to-top-position)] transition-transform ease-in  duration-150 will-change-transform hover:scale-110  active:scale-95 shadow-[0_2px_5px_2px_rgba(30,27,75,0.1)] hover:shadow-[0_5px_10px_5px_rgba(30,27,75,0.2)] dark:shadow-[0_2px_5px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_5px_10px_5px_rgba(255,255,255,0.2)] rounded-full motion-opacity-in-0 motion-translate-y-in-100 "
      src={theme === 'dark' ? arrowDark : arrowLight}
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
    />
  )
}
