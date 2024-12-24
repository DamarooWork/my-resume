interface ILngs {
  [key: string]: ILng
}
interface ILng {
  nativeName: string
}
type Theme = string
type ThemeContext = { theme: Theme; toggleTheme: () => void }
