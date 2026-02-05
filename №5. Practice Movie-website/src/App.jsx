import './App.css'
import Header from './components/Header'
import Search from './components/Search'

function App() {
	return (
		<>
			<Header></Header>
			<Search></Search>

			<section className='movies-wrapper'>
				<div className='box'>
					<img src='' alt='' />
					<p className='movie-title'></p>
					<span className='movie-date'></span>
				</div>
			</section>
		</>
	)
}

export default App
