import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Login/Signup'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

const WelcomeScreen = () => {
  const location = useLocation()
  const isLogin = !location.pathname.startsWith('/login/signup')

	return <>
		<Grid container component="main" sx={{ height: '100vh' }}>
      {/* <CssBaseline /> */}
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
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

export default WelcomeScreen