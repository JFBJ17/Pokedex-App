import Head from 'next/head'
import Header from '../components/base/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokedex App</title>
        <meta
          name='description'
          content='Pokedex con información de los pokemones'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <ToastContainer theme='colored' />
        {children}
      </main>
    </>
  )
}
