import GlobalThemeProvider from './ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const Providers: React.FC = ({ children }) => {
  const client = new QueryClient()
  return (
    <GlobalThemeProvider>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </GlobalThemeProvider>
  )
}
