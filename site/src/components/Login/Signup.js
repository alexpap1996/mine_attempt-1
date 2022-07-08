import React from "react"

import { useTranslation } from "react-i18next"
import LoginFormHeader from "./LoginFormHeader"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import SignupForm from "./SignupForm"

const Signup = () => {
  const { t } = useTranslation()


  const headerText = t("signUp")

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
          <SignupForm />
        </Box>
      </Grid>
    </>
  )
}

export default Signup
