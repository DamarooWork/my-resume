import { useContext, useEffect, useState } from 'react'
import giftLight from '/images/others/giftLight.png'
import giftDark from '/images/others/giftDark.png'
import { ThemeContext } from '../../hooks/ThemeContext'
export default function GiftBox({ click }: GiftBoxClick) {
  const { theme } = useContext(ThemeContext)
  const [isBoxClicked, setBoxClicked] = useState<boolean>(false)
  const [displayBoxStyle, setDisplayBoxStyle] = useState<string>(
    'fixed flex  bottom-10 right-5 lg:right-10 cursor-pointer motion-preset-oscillate motion-duration-2000'
  )

  function handleClick() {
    setDisplayBoxStyle('hidden transition ease-in  duration-300')
    click()
  }
  useEffect(() => {
    if (isBoxClicked) {
      handleClick()
    }
  }, [isBoxClicked])
  return (
    <div className={displayBoxStyle} onClick={() => setBoxClicked(true)}>
      <img
        className="w-[50px] lg:w-[70px] h-auto absolute hover:animate-ping inline-flex opacity-70"
        src={theme === 'dark' ? giftDark : giftLight}
        alt="Gift"
      />
      <img
        className="w-[50px] lg:w-[70px] h-auto"
        src={theme === 'dark' ? giftDark : giftLight}
        alt="Gift"
      />
    </div>
  )
}
