import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Login/Signup'
import Grid from '@mui/material/Grid';

// used for login and signup
// if path startsWith /login/signup we render the Signup component
// else we render the Login component
const LoginScreen = () => {
  const location = useLocation()
  const isLogin = !location.pathname.startsWith('/login/signup')

	return <>
		<Grid container component="main" sx={{ height: '100vh' }}>
			<Grid item xs={false}	sm={4} md={7}	sx={{
					backgroundImage: 'url(https://www.halkidiki.com/meltemi-rooms-sithonia/photos/images/meltemi-rooms-sithonia-172.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) => t.palette.grey[50],
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			{isLogin ? <Login /> : <Signup />}
    	</Grid>
	</>
}

export default LoginScreen