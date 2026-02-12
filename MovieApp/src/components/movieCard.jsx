function MovieCard(props) {
	const { title, image, year } = props

	console.log(props)
	return (
		<>
			<div className='card'>
				<img className='rasm' src={image} alt='image' />
				<div className='text'>
					<p>
						<strong> {title} </strong>
					</p>
					<p>({year})</p>
				</div>
			</div>
		</>
	)
}

export default MovieCard
