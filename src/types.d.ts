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
interface IImgContact {
  src: string
  alt: string
  srcWhite?: string
}
interface IContact {
  title: string
  linkHref?: string
  content: string
  img: IImgContact
  download?: boolean
}
interface IProfExp {
  position: string
  job: string
  linkJob: string
  workDoneTitle: string
  workDone: string
  description: string
  date: {
    start: string
    end: string
  }
  stack: string[]
}
interface ITechnology {
  title: string
  img: {
    src: string
    srcForTheme?: string
    alt: string
  },
  link: string
}
type ITypesOfProject = 'Commercial' | 'Mine' | 'Fun' | 'Old' | 'All'
interface IProject {
  id: string
  img: {
    src: string
    alt: string
  }
  title: string
  link: string
  date: string
  description: string
  stackTitle: string
  stack: ITypeOfProjects[]
  categories: string[]
  myRole: string
}
