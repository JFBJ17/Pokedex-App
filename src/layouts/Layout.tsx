import Head from 'next/head'
import { Navbar } from '../components/base/Navbar'
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
      <Navbar />
      <main>
        <ToastContainer theme='colored' />
        {children}
      </main>
    </>
  )
}
