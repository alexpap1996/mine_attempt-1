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
  'login'
]

// the navbar of the site
// contains buttons for navigation
// the profile icon for user specific navigation
// and the language selector
// has a different appearance in the paths that are in limitInPaths array
const Nav = () => {
  const location = useLocation()
  const baseDir = location.pathname.split('/')[1]
  const navIsLimited = limitInPaths.includes(baseDir)

  const appBarSx =  {borderBottom: ( navIsLimited ? 0 : 1 ), borderColor: '#eeeeee'}
  const appBarPos = navIsLimited ? "fixed" :"static"

	return <>
		<Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={0} position={appBarPos} sx={appBarSx}>
        <Toolbar sx={{ display: 'flex' }}>
          <Typography variant="h5" component="div" sx={{ marginRight: 2}}>
            Shops
          </Typography>

          <Box display="flex" justifyContent="center" sx={{ flexGrow: 1}}>
            {!navIsLimited && <NavMainButtons />}
          </Box>

          <Box>
            {!navIsLimited && <NavUserIcon />}
          </Box>
          <LanguageSelector sx={{ alignSelf: 'flex-end' }}/>
        </Toolbar>
      </AppBar>
    </Box>
	</>
}

export default Nav