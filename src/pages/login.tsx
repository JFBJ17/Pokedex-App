import Link from 'next/link'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Layout } from '../layouts/Layout'

export default function LoginPage () {
  return (
    <Layout title='Iniciar sesión'>
      <div className='px-4 mb-28'>
        <form className='px-2'>
          <div className='mb-3'>
            <Input fullWidth name='email' label='Correo' />
          </div>
          <div className='mb-5'>
            <Input
              fullWidth
              type='password'
              name='password'
              label='Contraseña'
            />
          </div>
          <Button text='Ingresar' fullWidth />
        </form>
        <div className='my-4 font-normal text-xs'>
          <div className="text-black dark:text-white flex items-center before:mr-4 before:content-[''] before:block before:w-full before:h-[1px] before:bg-gray-300 after:ml-4 after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-300">
            O
          </div>
        </div>

        <div className='space-y-4'>
          <Button
            text='Facebook'
            color='info'
            endIcon={<FaFacebook />}
            fullWidth
          />
          <Button
            text='Google'
            color='danger'
            endIcon={<FaGoogle />}
            fullWidth
          />
          <div className='flex justify-center items-center'>
            <Link href='/register'>
              <a className='underline'>Crear cuenta</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
