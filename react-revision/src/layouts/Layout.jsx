import { Outlet } from 'react-router'

function Layout() {
	return (
		<>
			<div className='container'>
				<Outlet></Outlet>
			</div>
		</>
	)
}

export default Layout
