import Head from 'next/head'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { FaSun, FaMoon } from 'react-icons/fa'

import { Navbar } from '../components/base/Navbar'
import { ThemeContext } from '../context/ThemeContext'

import 'react-toastify/dist/ReactToastify.css'

interface Props {
  title: string
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  const { themeMode, setThemeMode } = useContext(ThemeContext)

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
      <header className='flex justify-between items-center bg-white dark:bg-slate-800 border-b-2 border-solid border-b-black dark:border-b-yellow-500 mb-5 p-2 shadow sticky top-0 z-50'>
        <h1 className='text-4xl dark:text-white font-bold'>{title}</h1>
        <span
          className='text-2xl'
          onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
        >
          {themeMode === 'dark' ? (
            <FaSun className='text-yellow-500' />
          ) : (
            <FaMoon className='text-blue-900' />
          )}
        </span>
      </header>
      <main>{children}</main>
      <ToastContainer theme='colored' />
    </>
  )
}
