import './App.css'
import Car from './components/Car'
import Cat from './components/Cat'

function App() {
	return (
		<>
			<h1>Hello world!</h1>

			<Car
				name='Lamborghini Urus!'
				description="This is my teacher's lovely car."
			></Car>

			<Cat message='Meow Meow ~(≧∀≦)~'></Cat>
		</>
	)
}

export default App
