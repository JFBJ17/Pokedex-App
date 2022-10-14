import { AppProps } from 'next/app'
import { Providers } from '../context/Providers'
import { GlobalStyle } from '../styles/globals'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  )
}
