interface ILngs {
  [key: string]: ILng
}
interface ILng {
  nativeName: string
}
type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }
