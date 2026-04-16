import { useState } from 'react'

function Stopwatch() {
	const [timer, setTimer] = useState(false)
	const [time, setTime] = useState(0)

	const runTimer = () => {
		console.log('clicked...')
		setTimer(!timer)
		setInterval(() => {
			setTime(prev => prev + 1)
		}, 100)
	}

	const reset = () => {
		console.log('clicked...')
		setTimer(false)
		setTime(0)
		clearInterval()
	}

	return (
		<>
			<div className='container'>
				<h1> Stopwatch</h1>

				<h1 className='timer'>00:00:00</h1>
				<h1 className='timer'>{time}</h1>
				<button
					onClick={runTimer}
					className={`btn ${timer ? 'btn-stop' : 'btn-start'}`}
				>
					{timer ? 'Stop' : 'Start'}
				</button>
				<button onClick={reset} className='btn btn-reset'>
					Reset
				</button>
			</div>
		</>
	)
}

export default Stopwatch
