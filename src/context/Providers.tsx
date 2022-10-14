import GlobalThemeProvider from './ThemeContext'

export const Providers: React.FC = ({ children }) => {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>
}
