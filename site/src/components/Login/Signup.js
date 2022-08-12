import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import LoginFormHeader from "./LoginFormHeader"
import Loading from '../../utils/Loading'
import SignupForm from "./SignupForm"
import axios from 'axios'
import { Grid, Paper, Box } from "@mui/material"
import { ENDPOINT } from '../../constants/routeConstants'
import { GlobalState } from '../../contexts/Context'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { t } = useTranslation()
  const { dispatch } = GlobalState()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [signUpError, setSignupError] = useState('')
  
  const headerText = t("signUp")

  // takes the values from the SignupForm and creates an object that holds the user info
  // passes that object to the server
  // if server responds 200 then we know the user is succesfully created and we log in
  // else there was an error
  const handleSignup = async (event) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)

    try {
      const res = await axios.post(ENDPOINT + '/api/user/create', {
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        email: data.get("email"),
        password: data.get("password"),
        emergencyphone: data.get("emergencyphone")
      })
      if (res.status === 200) {
        dispatch({
          type: 'login',
          payload: { user: res.data, persist: false }
        })
        navigate('/')
      } else {
        setSignupError('error')
      }
    } catch (e) {
      setSignupError(e.response?.data?.message || 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!loading
        ? <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              <SignupForm handleSignup={handleSignup} signUpError={signUpError}/>
            </Box>
          </Grid>
        : <Loading />
      }

    </>
  )
}

export default Signup
