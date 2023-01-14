import Link from 'next/link'
import { Layout } from '../layouts/Layout'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export default function RegisterPage () {
  return (
    <Layout title='Registrarse'>
      <div className='px-4 mb-28'>
        <form className='px-2'>
          <div className='mb-3'>
            <Input fullWidth name='name' label='Nombres' />
          </div>
          <div className='mb-3'>
            <Input fullWidth name='surname' label='Apellidos' />
          </div>
          <div className='mb-3'>
            <Input fullWidth name='email' label='Correo' />
          </div>
          <div className='mb-3'>
            <Input
              fullWidth
              type='password'
              name='password'
              label='Contraseña'
            />
          </div>
          <div className='mb-5'>
            <Input
              fullWidth
              type='password'
              name='verifyPassword'
              label='Verificar contraseña'
            />
          </div>
          <Button text='Ingresar' fullWidth />
        </form>

        <div className='flex justify-center items-center mt-5'>
          <Link href='/login'>
            <a className='underline'>Ya tengo una cuenta</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
