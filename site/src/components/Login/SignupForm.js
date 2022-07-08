import React from "react"
import LoginFormLink from "./LoginFormLink"
import { useTranslation } from 'react-i18next'
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const SignupForm = ({ handleLogin }) => {
  const { t } = useTranslation()
  const handleSubmit = () => {}
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label={t('firstname')}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label={t('lastname')}
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label={t('emailAddress')}
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label={t('password')}
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {t('signUp')}
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <LoginFormLink 
            to='/login' 
            text={`${t('alreadyHaveAnAccount')} ${t('signIn')}`}
          ></LoginFormLink>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignupForm
