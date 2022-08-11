import React from "react"
import LoginFormLink from "./LoginFormLink"
import { useTranslation } from 'react-i18next'
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const SignupForm = ({ handleSignup }) => {
  const { t } = useTranslation()
  return (
    <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label={t('firstname')}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastname"
            label={t('lastname')}
            name="lastname"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            type="email"
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
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="emergencyphone"
            label={t('emergencynumber')}
            type="number"
            id="emergencyphone"
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
