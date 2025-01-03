import { useState } from 'react'
interface IHint {
  hint: string
}
export default function Hint({ children }: ReactNode, { hint }: IHint) {
  const [isHiddenHint, setHiddenHint] = useState(true)

  const classHint = () => {
    if (isHiddenHint) {
      return 'hidden '
    } else {
      return 'block absolute bottom-[-2rem] left-[50%] py-2 px-4 border-2 border-black rounded-2xl bg-white'
    }
  }
  return (
    <span className="relative">
      <div className={classHint()}>{hint}</div>

      <span
        onMouseEnter={() => setHiddenHint(false)}
        onMouseLeave={() => setHiddenHint(true)}
        className="cursor-pointer"
      >
        {children}
      </span>
    </span>
  )
}
