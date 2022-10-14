import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const initialTheme = localStorage.theme || 'dark'
    const initialcolorTheme = initialTheme === 'dark' ? 'light' : 'dark'

    setThemeMode(initialTheme)
    const root = window.document.documentElement
    root.classList.remove(initialcolorTheme)
    root.classList.add(initialTheme)
  }, [])

  useEffect(() => {
    if (themeMode) {
      const colorTheme = themeMode === 'light' ? 'dark' : 'light'

      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(themeMode)
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', themeMode)
      }
    }
  }, [themeMode])

  return { themeMode, setThemeMode }
}
