import React from "react"
import LoginFormLink from "./LoginFormLink"
import { useTranslation } from 'react-i18next'
import { Grid, Checkbox, Typography, FormControlLabel, TextField, Button, Box } from "@mui/material";

// login inputs
// 1. email -> email of the user
// 2. password -> password of the user
// 3. rememberMe -> if checked saves the user so they don't have to login again after closing the page
// 4. button to submit the above inputs
// 5. LoginFormLink component -> redirects to Signup page
const LoginForm = ({ handleLogin, loginError }) => {
  const { t } = useTranslation()
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleLogin}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={t("emailAddress")}
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t("password")}
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={t("rememberMe")}
        name="rememberMe"
      />
      
      <Typography component="div" variant="body1" sx={{color: 'red', mt:1}}>{t(loginError)}</Typography>
      
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} >
        {t("signIn")}
      </Button>
      <Grid container>
        <LoginFormLink text={`${t("dontHaveAnAccount")} ${t("signUp")}`} to='/login/signup'/>
      </Grid>
    </Box>
  )
}

export default LoginForm
