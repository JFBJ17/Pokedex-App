import { AppProps } from 'next/app'
import { Providers } from '../context/Providers'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
