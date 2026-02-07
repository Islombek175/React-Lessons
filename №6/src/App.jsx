import { Route, Routes } from 'react-router'
import './App.css'
import Card from './pages/Card'
import Home from './pages/Home'
import Products from './pages/Products'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/' element={<Card />}></Route>
				<Route path='/' element={<Products />}></Route>
			</Routes>
		</>
	)
}

export default App
