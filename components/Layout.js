import Head from 'next/head';
import Header from './Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
	return (
		<>
			<Head>
				<title>Pokedex App</title>
				<meta
					name='description'
					content='Pokedex con información de los pokemones'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='container mx-auto p-8'>
				<ToastContainer theme='colored' />
				{children}
			</main>
		</>
	);
};

export default Layout;
