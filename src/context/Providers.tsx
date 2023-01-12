import GlobalThemeProvider from './ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SkeletonTheme } from 'react-loading-skeleton'

export const Providers: React.FC = ({ children }) => {
  const client = new QueryClient()
  return (
    <GlobalThemeProvider>
      <SkeletonTheme baseColor='#e2dace' highlightColor='#aaa8a8'>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SkeletonTheme>
    </GlobalThemeProvider>
  )
}
