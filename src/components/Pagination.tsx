import React from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';

const Pagination = ({searcher, pagination, setPagination}) => {
	const previusPage = () => {
		if (pagination > 1) {
			setPagination(--pagination);
			searcher(pagination);
		}
	};

	const nextPage = () => {
		if (pagination >= 0) {
			setPagination(++pagination);
			searcher(pagination);
		}
	};

	return (
		<div className='flex w-full gap-5'>
			<button
				className='flex justify-center items-center w-16 h-8 bg-gray-50 hover:bg-gray-100 rounded border border-gray-700'
				onClick={previusPage}
			>
				<FaAngleDoubleLeft />
			</button>
			<div className='shrink w-full h-8 flex justify-center items-center bg-gray-50 rounded border border-gray-700'>
				{pagination}
			</div>
			<button
				className='flex justify-center items-center w-16 h-8 bg-gray-50 hover:bg-gray-100 rounded border border-gray-700'
				onClick={nextPage}
			>
				<FaAngleDoubleRight />
			</button>
		</div>
	);
};

export default Pagination;
