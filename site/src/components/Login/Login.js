import React from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";
import LoginFormHeader from "./LoginFormHeader";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Login = () => {
  const { t } = useTranslation();

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })
  }

  const headerText = t("signIn");

  return (
    <>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginFormHeader headerText={headerText} />
          <LoginForm handleLogin={handleLogin} />
        </Box>
      </Grid>
    </>
  )
};

export default Login
