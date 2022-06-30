import React from 'react';
import { Link } from 'react-router-dom'

const HomeScreen = () => {
	return <>
		<div>This is the homescreen component</div>
		<div>
			<Link to="/login">Login screen</Link>
			<Link to="/cart">Cart screen</Link>
		</div>
	</>
}

export default HomeScreen