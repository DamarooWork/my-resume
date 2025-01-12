import { useNavigate } from 'react-router-dom'

export default function AppButton({
  href,
  link_out,
  btnClasses,
  download = false,
  children,
}: IButtonProps) {
  const navigate = useNavigate()
  function handleClick() {
    if (href) {
      navigate(href)
    }
    if (link_out) {
      if (download) {
        const pdfUrl = link_out
        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = 'resume.pdf' // specify the filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        let win = window.open(link_out, '_blank')
        if (win != null) {
          win.focus()
        }
      }
    }
  }
  return (
    <button className={btnClasses} onClick={() => handleClick()}>
      {children}
    </button>
  )
}
