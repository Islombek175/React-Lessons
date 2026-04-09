import { Link } from 'react-router'

function Projects() {
	return (
		<>
			<h1 className='title'>Projects</h1>
			<ul>
				<li>
					<Link to='/projects/stopwatch'>1. Stopwatch</Link>
				</li>
				<li>
					<Link to='/projects/todo'>2. To Do App</Link>
				</li>
			</ul>
		</>
	)
}

export default Projects
