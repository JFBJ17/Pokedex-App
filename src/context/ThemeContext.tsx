import { createContext } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

interface ThemeContextValue {
  themeMode: 'light' | 'dark'
  setThemeMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue
)

const GlobalThemeProvider: React.FC = ({ children }) => {
  const { themeMode, setThemeMode } = useDarkMode()
  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default GlobalThemeProvider
