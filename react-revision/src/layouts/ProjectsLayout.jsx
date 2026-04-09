import { Link, Outlet } from 'react-router'

function ProjectsLayout() {
	return (
		<>
			<div>
				<Link to='/projects'>Back</Link>
			</div>
			<Outlet />
		</>
	)
}

export default ProjectsLayout
