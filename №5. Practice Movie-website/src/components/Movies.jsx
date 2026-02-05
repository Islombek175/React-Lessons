function Movies({ movies }) {
	return (
		<>
			<div className='movies-wrapper'>
				{movies.map(movie => (
					<div className='movie-card' key={movie.id}>
						<img src={movie.poster} alt={movie.title} className='movie-image' />

						<div className='movie-info'>
							<h3 className='movie-title'>{movie.title}</h3>
							<p className='movie-date'>{movie.releaseDate}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Movies
