function Car(props) {
	const { name, description } = props
	return (
		<>
			<h1>{name}</h1>
			<p>{description}</p>
		</>
	)
}

export default Car
