import React from 'react'
import { useLocation } from 'react-router-dom'
import LanguageSelector from '../LanguageSelector'
import NavMainButtons from './NavMainButtons'
import NavUserIcon from './NavUserIcon'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const limitInPaths = [
  '/login'
]


const Nav = () => {
  const location = useLocation()
  const navIsLimited = limitInPaths.includes(location.pathname)

  const appBarSx =  {borderBottom: ( navIsLimited ? 0 : 1 ), borderColor: '#eeeeee'}
  const appBarPos = navIsLimited ? "fixed" :"static"

	return <>
		<Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={0} position={appBarPos} sx={appBarSx}>
        <Toolbar sx={{ display: 'flex' }}>
          <Typography variant="h5" component="div" sx={{ marginRight: 2}}>
            Shops
          </Typography>

          <Box sx={{ flexGrow: 1}}>
            {!navIsLimited && <NavMainButtons />}
          </Box>

          <Box>
            {!navIsLimited && <NavUserIcon  />}
          </Box>
          <LanguageSelector sx={{ alignSelf: 'flex-end' }}/>
        </Toolbar>
      </AppBar>
    </Box>
	</>
}

export default Nav