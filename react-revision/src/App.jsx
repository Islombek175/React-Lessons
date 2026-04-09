import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Layout from './layouts/Layout'
import ProjectsLayout from './layouts/ProjectsLayout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Stopwatch from './pages/Stopwatch'
import ToDoApp from './pages/ToDoApp'

function App() {
	return (
		<>
			<Header></Header>

			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/projects' element={<ProjectsLayout />}>
						<Route path='/projects/todo' element={<ToDoApp />}></Route>
						<Route path='/projects/stopwatch' element={<Stopwatch />}></Route>
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
