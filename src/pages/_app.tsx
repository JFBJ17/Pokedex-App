import { AppProps } from 'next/app'
import { Providers } from '../context/Providers'
import '../styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
