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
      className=" cursor-pointer h-[75px] w-auto fixed bottom-10 left-[300px] transition-transform ease-in  duration-150 will-change-transform hover:scale-110  active:scale-95"
      src={theme === 'dark' ? arrowDark : arrowLight}
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
    />
  )
}
