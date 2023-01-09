import { useState } from 'react'

import { Layout } from '../layouts/Layout'
import { Button } from '../ui/Button'
import { Dropzone } from '../ui/Dropzone'
import { Input } from '../ui/Input'

export default function UserPage () {
  const [files, setFiles] = useState([])

  return (
    <Layout title='Usuario'>
      <div className='flex justify-end px-2'>
        <Button text='Actualizar' />
      </div>
      <div className='px-2 grid grid-cols-1 gap-5 mb-28'>
        <div className='row-[2]'>
          <Dropzone files={files} setFiles={setFiles} />
        </div>
        <div className='row-[1] space-y-2'>
          <div>
            <Input fullWidth label='Nombres' />
          </div>
          <div>
            <Input fullWidth label='Apellidos' />
          </div>
          <div>
            <Input fullWidth label='Correo' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
