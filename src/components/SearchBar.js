const SearchBar = ({ postcode, onInputChange, onSearch, onKeyPress }) => {
	return (
		<div className="relative max-w-xl mx-auto my-10">
			<div className="flex">
				<input
					type="text"
					tabIndex={1}
					placeholder="search by postcode: eg.SW1A 1AA"
					value={postcode}
					onChange={onInputChange}
					onKeyPress={onKeyPress}
					className="w-full h-10 px-5 pr-10 placeholder-gray-500 rounded-lg shadow hover:shadow-lg text-primary bg-primary focus:outline-none"
				/>
				<button onClick={onSearch} className="ml-2 px-4 h-10 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
