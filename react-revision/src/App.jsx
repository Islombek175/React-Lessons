import { Link, Route, Routes } from 'react-router'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<nav>
				<div className='logo'>
					<h1>Islombek</h1>
				</div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/about'>About</Link>
					</li>

					<li>
						<Link to='/projects'>Projects</Link>
					</li>
				</ul>
			</nav>
			;
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/projects' element={<Projects></Projects>}></Route>
			</Routes>
		</>
	)
}

export default App
