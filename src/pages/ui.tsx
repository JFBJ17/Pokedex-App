import { Button } from '../ui/Button'
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { Input } from '../ui/Input'
import { Pagination } from '../ui/Pagination'
import { Card } from '../components/base/Card'

export default function UI () {
  return (
    <div className='mt-5 px-5'>
      {/* <Button
        variant='translucent'
        size='large'
        color='primary'
        startIcon={<FaArrowRight />}
      /> */}
      {/* <Input placeholder='Placeholder' type='password' fullWidth hiddenLabel /> */}
      {/* <Pagination /> */}
      <Card
        img_url='https://picsum.photos/300/175'
        name='pokemon'
        order={23}
        pokemonType={['Water', 'Grass']}
      />
    </div>
  )
}
