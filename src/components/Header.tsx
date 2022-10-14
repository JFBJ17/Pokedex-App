import Image from 'next/image'
import { HeaderMain } from '../styles/header'

const Header = () => {
  return (
    <HeaderMain>
      <Image src='/Logo.png' alt='Logo' width={182} height={61} />
    </HeaderMain>
  )
}

export default Header
