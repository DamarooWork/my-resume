import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)
export const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [])
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
