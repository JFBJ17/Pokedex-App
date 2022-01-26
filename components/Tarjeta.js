/* eslint-disable @next/next/no-img-element */
import {BsFillVolumeUpFill} from 'react-icons/bs';

const Tarjeta = ({pokemonData}) => {
	const detailInformation = () => {
		const msg = pokemonData.name || 'not defined';
		const utterance = new SpeechSynthesisUtterance(msg);
		utterance.lang = 'en-EN';
		utterance.rate = 0.6;
		utterance.pitch = 1;
		speechSynthesis.speak(utterance);
	};

	return (
		<div className='flex flex-col gap-8 p-11'>
			<h3 className='font-bold text-3xl capitalize'>
				#{pokemonData.id || '0'} {pokemonData.name || 'Nombre'}
			</h3>
			<div className='flex flex-col gap-8 mx-auto'>
				<div className='flex flex-col md:flex-row gap-12'>
					<img
						src={
							pokemonData.sprites
								? pokemonData.sprites.other.home.front_default
								: '/Incognito.png'
						}
						className='bg-gray-50 border border-gray-700'
						width={188}
						height={191}
						alt='pokemon'
					/>
					<div className='flex flex-col justify-center gap-4'>
						<p className='font-light'>
							Types:
							<span className='font-bold uppercase ml-2'>
								{pokemonData.types
									? pokemonData.types[0].type.name
									: 'No definido'}
							</span>
						</p>
						<p className='font-light'>
							Weight:{' '}
							<span className='font-bold ml-2'>
								{pokemonData.weight / 10 || 0} kg
							</span>
						</p>
						<p className='font-light'>
							Height:{' '}
							<span className='font-bold ml-2'>
								{pokemonData.height / 10 || 0} m
							</span>
						</p>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<span className='font-light'>HP:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[0].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[0].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[0].base_stat : '0'}%
							</div>
						</div>
					</div>

					<span className='font-light'>ATTACK:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[1].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[1].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[1].base_stat : '0'}%
							</div>
						</div>
					</div>

					<span className='font-light'>DEFENSE:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[2].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[2].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[2].base_stat : '0'}%
							</div>
						</div>
					</div>

					<span className='font-light'>SPECIAL-ATTACK:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[3].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[3].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[3].base_stat : '0'}%
							</div>
						</div>
					</div>

					<span className='font-light'>SPECIAL-DEFENSE:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[4].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[4].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[4].base_stat : '0'}%
							</div>
						</div>
					</div>

					<span className='font-light'>SPEED:</span>
					<div className='flex gap-4'>
						<div className='w-full flex items-center'>
							<div
								className='bg-yellow-400 text-xs font-medium p-0.5 leading-none rounded'
								role='progressbar'
								aria-valuenow={
									pokemonData.stats ? pokemonData.stats[5].base_stat : '0'
								}
								aria-valuemin={0}
								aria-valuemax={100}
								style={{
									width: `${
										pokemonData.stats ? pokemonData.stats[5].base_stat : '0'
									}%`,
								}}
							>
								{pokemonData.stats ? pokemonData.stats[5].base_stat : '0'}%
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				type='button'
				onClick={detailInformation}
				className='bg-yellow-400 hover:bg-yellow-500 py-1 px-3 rounded w-20'
			>
				<BsFillVolumeUpFill className='text-2xl mx-auto' />
			</button>
		</div>
	);
};

export default Tarjeta;
