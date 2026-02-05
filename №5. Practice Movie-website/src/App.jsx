import './App.css'
// COMPONENTS

import Header from './components/Header'
import Movies from './components/Movies'
import Search from './components/Search'

const movies = [
	{
		id: 1,
		title: "Harry Potter and the Sorcerer's Stone",
		releaseDate: '2001',
		poster: '../public/movies/harry_potter_1.jpg',
	},
	{
		id: 2,
		title: 'Harry Potter and the Chamber of Secrets',
		releaseDate: '2002',
		poster: '../public/movies/harry_potter_2.jpg',
	},
	{
		id: 3,
		title: 'Harry Potter and the Prisoner of Azkaban',
		releaseDate: '2004',
		poster: '../public/movies/harry_potter_3.jpg',
	},
	{
		id: 4,
		title: 'Harry Potter and the Goblet of Fire',
		releaseDate: '2005',
		poster: '../public/movies/harry_potter_4.jpg',
	},
]

function App() {
	return (
		<>
			<Header></Header>

			<Search></Search>

			<Movies movies={movies} />
		</>
	)
}

export default App
