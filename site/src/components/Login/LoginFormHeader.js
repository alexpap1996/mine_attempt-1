import React from 'react'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

// a generic header
// an avatar with a text that comes from the parent
const LoginFormHeader = ({ headerText }) => {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {headerText}
      </Typography>
    </>
  )
}

export default LoginFormHeader