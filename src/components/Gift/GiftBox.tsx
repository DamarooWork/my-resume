import { useEffect, useState } from 'react'

export default function GiftBox({ click }: GiftBoxClick) {
  const [isBoxClicked, setBoxClicked] = useState<boolean>(false)
  const [displayBoxStyle, setDisplayBoxStyle] = useState<string>(
    'fixed flex  bottom-14 right-14 cursor-pointer transition ease-in  duration-150 hover:scale-125 active:scale-115 animate-bounce'
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
      <img className='w-[70px] h-auto' src="src/assets/images/gift.png" alt="Gift" />
      <img className='w-[70px] h-auto absolute hover:animate-ping inline-flex opacity-70' src="src/assets/images/gift.png" alt="Gift" />
    
    </div>
  )
}
