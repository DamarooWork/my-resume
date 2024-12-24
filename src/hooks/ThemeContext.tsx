import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)
export const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [])
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }}>{children}</ThemeContext.Provider>
  )
}
