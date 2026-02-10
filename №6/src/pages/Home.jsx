import { useState } from 'react'

function Home() {
	const [count, setCount] = useState(0)

	return (
		<div className='container'>
			<h1>Home</h1>
			<div className='counter-wrapper'>
				<h3 className='count-title'>Count</h3>
				<div>{count}</div>
				<button onClick={() => setCount(count - 1)} className='decrement'>
					-1
				</button>
				<button onClick={() => setCount(count + 1)} className='increment'>
					+1
				</button>
			</div>
		</div>
	)
}

export default Home
