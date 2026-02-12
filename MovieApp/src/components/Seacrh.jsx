function Search() {
	return (
		<>
			<form action='#'>
				<div className='search-wrapper'>
					<input type='text' placeholder='Write...' />
					<button type='submit' className='btn'>
						Search
					</button>
				</div>
			</form>
		</>
	)
}

export default Search
