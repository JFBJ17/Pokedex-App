import GlobalThemeProvider from './ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'

export const Providers: React.FC = ({ children }) => {
  const client = new QueryClient()
  return (
    <GlobalThemeProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </GlobalThemeProvider>
  )
}
