import React from 'react'
import LanguageSelector from '../LanguageSelector'
import NavMainButtons from './NavMainButtons'
import NavUserIcon from './NavUserIcon'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


const Nav = () => {
	return <>
		<Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={0} position="static" sx={{borderBottom: 1, borderColor: '#eeeeee'}}>
        <Toolbar sx={{display: 'flex'}}>
          <Typography variant="h6" component="div" sx={{ marginRight: 2}}>
            Shops
          </Typography>

          <Box sx={{ flexGrow: 1}}>
            <NavMainButtons />
          </Box>

          <Box>
            <NavUserIcon />
          </Box>
          <LanguageSelector sx={{ alignSelf: 'flex-end' }}/>
        </Toolbar>
      </AppBar>
    </Box>
	</>
}

export default Nav