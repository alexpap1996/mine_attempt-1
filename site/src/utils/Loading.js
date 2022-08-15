import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Loading spinner that overlays the entire screen so the screen is not usable when it's used
const Loading = () => {
  console.log('Loading')
  return (
    <Backdrop
      open
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading;