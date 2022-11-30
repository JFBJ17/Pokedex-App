import { Button } from '../ui/Button'
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { Input } from '../ui/Input'

export default function UI () {
  return (
    <div className='mt-5 px-5'>
      {/* <Button
        variant='translucent'
        size='large'
        color='primary'
        startIcon={<FaArrowRight />}
      /> */}
      <Input placeholder='Placeholder' type='password' fullWidth hiddenLabel />
    </div>
  )
}
