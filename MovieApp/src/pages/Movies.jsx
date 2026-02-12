import harry_potter_1 from '../assets/movies-images/harry_potter_1.jpg'
import harry_potter_2 from '../assets/movies-images/harry_potter_2.jpg'
import harry_potter_3 from '../assets/movies-images/harry_potter_3.jpg'
import harry_potter_4 from '../assets/movies-images/harry_potter_4.jpg'
import MovieCard from '../components/movieCard'

function Movies() {
	return (
		<>
			<div className='movies-wrapper'>
				<div className='cards'>
					<MovieCard
						title={"Harry Potter and the Sorcerer's Stone"}
						year={2001}
						image={harry_potter_1}
					/>
					<MovieCard
						title={'Harry Potter and the Chamber of Secrets'}
						year={2002}
						image={harry_potter_2}
					/>
					<MovieCard
						title={'Harry Potter and the Prisoner of Azkaban'}
						year={2004}
						image={harry_potter_3}
					/>
					<MovieCard
						title={'Harry Potter and the Goblet of Fire'}
						year={2005}
						image={harry_potter_4}
					/>
				</div>
			</div>
		</>
	)
}

export default Movies
