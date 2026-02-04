import cat from '/images/cat.jpg'

function Cat(props) {
	const {message} = props
	return (
		<>
			<div className='box'>
				<h1 style={{ color: 'cyan' }}>I love cats ᓚᘏᗢ</h1>

				<img src={cat} alt='' width={400} />

				<h3 style={{ color: 'yellow' }}>{message}</h3>
			</div>
		</>
	)
}

export default Cat
