import React from "react"
import LoginFormLink from "./LoginFormLink"
import { useTranslation } from 'react-i18next'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"

const LoginForm = ({ handleLogin }) => {
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
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
        }}
      >
        {t("signIn")}
      </Button>
      <Grid container>
        <LoginFormLink text={t("forgotPassword")} xs={true} />
        <LoginFormLink text={`${t("dontHaveAnAccount")} ${t("signUp")}`} to='/login/signup'/>
      </Grid>
    </Box>
  )
}

export default LoginForm
