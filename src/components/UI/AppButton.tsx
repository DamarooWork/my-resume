import { useNavigate } from 'react-router-dom'

export default function AppButton({
  href,
  link_out,
  btnClasses,
  children,
}: IButtonProps) {
  const navigate = useNavigate()
  function handleClick() {
    if (href) {
      navigate(href)
    }
    if (link_out) {
     
        let win = window.open(link_out, '_blank')
        if (win != null) {
          win.focus()
        
      }
    }
  }
  return (
    <button className={btnClasses} onClick={() => handleClick()}>
      {children}
    </button>
  )
}
