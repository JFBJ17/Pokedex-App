import React from 'react';

const InputSearch = ({handleChange, handleSearch}) => {
	return (
		<div className='flex w-full'>
			<input
				className='w-full focus:outline-none rounded-l border border-gray-700 bg-gray-50 focus:bg-gray-100 px-2'
				onChange={handleChange}
				type='search'
			/>
			<button
				className='bg-yellow-400 hover:bg-yellow-500 py-1 px-3 rounded-r'
				type='button'
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	);
};

export default InputSearch;
