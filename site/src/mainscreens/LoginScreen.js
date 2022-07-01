import React from 'react'
import { useTranslation } from "react-i18next";
import LoginForm from '../components/Login/LoginForm'
import LoginFormHeader from '../components/Login/LoginFormHeader'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const LoginScreen = () => {
	const { t } = useTranslation()

	const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
	}

  const headerText = t("signIn") //t("signUp")

	return <>
		<Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LoginFormHeader headerText={headerText}/>
            <LoginForm handleLogin={handleLogin} />
          </Box>
        </Grid>
    </Grid>
	</>
}

export default LoginScreen