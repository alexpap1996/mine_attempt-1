import React from 'react';
import { Link } from 'react-router-dom'

const WelcomeScreen = () => {
	return <>
		<div>
			<form>
				<div>
					<label for="username">Username</label>
					<input id="username"></input>
				</div>

				<div>
					<label for="password">Password</label>
					<input id="password"></input>
				</div>

				<button>Login</button>
			</form>
		</div>
		<Link to="/">Home</Link>
	</>
}

export default WelcomeScreen