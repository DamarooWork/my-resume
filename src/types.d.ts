interface ILngs {
  [key: string]: ILng
}
interface ILng {
  nativeName: string
}
type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }

type ReactText = string | number
type ReactChild = ReactElement | ReactText

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined
type Children = {
  children: ReactNode
}
interface IButtonProps {
  children: ReactNode
  href?: string
  link_out?: string
  btnClasses: string
  download?: boolean
}
interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}
interface GiftBoxClick {
  click: () => void
}
