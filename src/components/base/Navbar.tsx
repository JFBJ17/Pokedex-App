import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav className='bg-gray-200 fixed bottom-0 inset-x-0 z-50'>
      {/* <Image src='/Logo.png' alt='Logo' width={182} height={61} /> */}
      <ul className='flex justify-between px-5'>
        <li className='flex flex-col justify-center items-center hover:text-blue-500'>
          <Link href='/favorites' passHref>
            <>
              <FaRegHeart className='text-2xl' />
              Favoritos
            </>
          </Link>
        </li>
        <li className='relative -top-7'>
          <Link href='/' passHref>
            <Image
              src='/img/pokeball.png'
              alt='pokeball'
              width={68}
              height={68}
            />
          </Link>
        </li>
        <li className='flex flex-col justify-center items-center hover:text-blue-500'>
          <Link href='/user' passHref>
            <>
              <FaRegUser className='text-2xl' />
              Usuario
            </>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
