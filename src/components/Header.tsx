import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Image src='/Logo.png' alt='Logo' width={182} height={61} />
    </header>
  )
}

export default Header
