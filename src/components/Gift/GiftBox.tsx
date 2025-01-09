import { useEffect, useState } from 'react'
import { giftData } from './giftData'
export default function GiftBox({ click }: GiftBoxClick) {
  const [isBoxClicked, setBoxClicked] = useState<boolean>(false)
  const [displayBoxStyle, setDisplayBoxStyle] = useState<string>(
    'fixed flex  bottom-10 right-10 cursor-pointer animate-bounce '
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
        className="w-[70px] h-auto absolute hover:animate-ping inline-flex opacity-70"
        src={giftData}
        alt="Gift"
      />
      <img className="w-[70px] h-auto" src={giftData} alt="Gift" />
    </div>
  )
}
