import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import LoginForm from "./LoginForm"
import LoginFormHeader from "./LoginFormHeader"
import { Box, Paper, Grid } from "@mui/material"
import axios from 'axios'
import { ENDPOINT } from '../../constants/routeConstants'
import { GlobalState } from '../../contexts/Context'
import { useNavigate } from "react-router-dom"
import Loading from "../../utils/Loading"

// Login logic used on Login Screen
// handles the email and password and if they are correct logs in the user
// if not, shows appropriate error text
const Login = () => {
  const { t } = useTranslation()
  const { dispatch } = GlobalState()
  const navigate = useNavigate()
  const headerText = t("signIn")
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    try {
      // callout with the form input values
      const res = await axios.post(ENDPOINT + '/api/user/login', {
        email: data.get("email"),
        password: data.get("password")
      })
      // if all is ok save the logged in user on global state
      // and renavigates to home directory
      // if there is an error it displays the error
      if (res.status === 200) {
        dispatch({
          type: 'login',
          payload: { user: res.data, persist: !!data.get("rememberMe") }
        })
        navigate('/')
      } else {
        setLoginError(t('wrongEmail'))
      }
    } catch (e) {
      setLoginError(e.response?.data?.message || t('error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!loading ?
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center", }} >
            <LoginFormHeader headerText={headerText} />
            <LoginForm handleLogin={handleLogin} loginError={loginError} />
          </Box>
        </Grid>
        : <Loading />
      }
    </>
  )
}

export default Login
