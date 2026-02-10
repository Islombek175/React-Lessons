import { Link, Route, Routes } from 'react-router'
import './App.css'
import Card from './pages/Card'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Payment from './pages/Payment'
import Products from './pages/Products'
import Shop from './pages/Shop'
function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/Products'>Products</Link>
					</li>
					<li>
						<Link to='/Shop'>Shop</Link>
					</li>
					<li>
						<Link to='/Card'>Card</Link>
					</li>
					<li>
						<Link to='/Payment'>Payment</Link>
					</li>
					<li>
						<Link to='/Contacts'>Contacts</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/Products' element={<Products></Products>}></Route>
				<Route path='/Card' element={<Card></Card>}></Route>
				<Route path='/Contacts' element={<Contacts></Contacts>}></Route>
				<Route path='/Products' element={<Products></Products>}></Route>
				<Route path='/Payment' element={<Payment></Payment>}></Route>
				<Route path='/Shop' element={<Shop></Shop>}></Route>
			</Routes>
		</>
	)
}

export default App
