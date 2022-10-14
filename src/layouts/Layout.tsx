import Head from 'next/head'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MainLayout } from '../styles/layout'

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
      <MainLayout>
        <ToastContainer theme='colored' />
        {children}
      </MainLayout>
    </>
  )
}
