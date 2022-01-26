import Image from 'next/image';

const Header = () => {
	return (
		<header className='bg-gray-50 dark:bg-gray-300 text-center py-3 border-b-2 border-gray-700 dark:border-yellow-400'>
			<Image src='/Logo.png' alt='Logo' width={182} height={61} />
		</header>
	);
};

export default Header;
