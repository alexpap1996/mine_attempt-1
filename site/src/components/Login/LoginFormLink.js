import React from 'react'
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid"

// redirects to passed 'to' parameter
const LoginFormLink = ({text, xs = undefined, to = '/'}) => {
  return (
    <Grid item xs={xs}>
      <Link to={to} component={RouterLink} href="#" variant="body2">
        {text}
      </Link>
    </Grid>
  )
}

export default LoginFormLink