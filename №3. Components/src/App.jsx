import './App.css'
import Car from './components/Car'
import Welcome from './components/Welcome'

function App() {
	return (
		<>
			<div>
				<h1>WELCOME</h1>
				<Welcome lang={'Python'} />
				<Welcome lang={'Asembler'} />
			</div>
			<br />
			<tr></tr>
			<div>
				<h1>CAR</h1>
				<Car
					title={'BMW'}
					descr={
						'BMW M5 (в кузове F90) — это высокопроизводительный седан бизнес-класса, производимый подразделением BMW M GmbH. Он оснащен 4,4-литровым двигателем V8 с двойным турбонаддувом мощностью до 625–635 л.с. в версиях Competition/CS, системой полного привода xDrive с возможностью отключения передней оси и способен разгоняться до 100 км/ч всего за 3,0–3,3 секунды. '
					}
				/>
			</div>
		</>
	)
}

export default App
