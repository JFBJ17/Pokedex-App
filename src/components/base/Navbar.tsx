import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav className='bg-gray-200 fixed bottom-0 inset-x-0 z-50'>
      {/* <Image src='/Logo.png' alt='Logo' width={182} height={61} /> */}
      <ul className='flex justify-between px-5'>
        <li className='flex justify-center items-center hover:text-blue-500'>
          <Link href='/favorites'>
            <a className='flex flex-col justify-center items-center'>
              <FaRegHeart className='text-2xl' />
              Favoritos
            </a>
          </Link>
        </li>
        <li className='relative -top-7'>
          <Link href='/'>
            <a>
              <Image
                src='/img/pokeball.png'
                alt='pokeball'
                width={68}
                height={68}
              />
            </a>
          </Link>
        </li>
        <li className='flex flex-col justify-center items-center hover:text-blue-500'>
          <Link href='/user'>
            <a className='flex flex-col justify-center items-center'>
              <FaRegUser className='text-2xl' />
              Usuario
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
