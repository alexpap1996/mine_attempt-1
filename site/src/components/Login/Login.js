import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";
import LoginFormHeader from "./LoginFormHeader";
import { Box, Paper, Grid, Typography } from "@mui/material";
import axios from 'axios'
import { GlobalState } from '../../contexts/Context'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const { dispatch } = GlobalState()
  const navigate = useNavigate();
  const headerText = t("signIn");
  const [loginError, setLoginError] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await axios.post('/api/user/login', {
      username: data.get("email"),
      password: data.get("password")
    })
    if (res.status === 200) {
      dispatch({
        type: 'login',
        payload: { user: res.data, persist: !!data.get("rememberMe") }
      })
      navigate('/')
    } else {
      setLoginError(t('wrongEmail'))
    }
  }

  return (
    <>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center", }} >
          <LoginFormHeader headerText={headerText} />
          <LoginForm handleLogin={handleLogin} loginError={loginError} />
        </Box>
      </Grid>
    </>
  )
};

export default Login
