import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode'
import { theme } from '../styles/theme'

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
      <ThemeProvider theme={themeMode === 'dark' ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default GlobalThemeProvider
