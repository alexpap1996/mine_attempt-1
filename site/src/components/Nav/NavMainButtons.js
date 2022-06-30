import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const buttons = [
  {
    label: 'shops',
    to: '/shop',
  },
  {
    label: 'cart',
    to: '/cart',
  },
]

const NavMainButtons = () => {
  const { t } = useTranslation()

  const location = useLocation()
  return <>
    {buttons.map(button =>
      <Box key={button.to} sx={{ display: 'inline', marginRight: 1}}>
        <Button
          component={Link}
          to={button.to}
          size="medium"
          color="primary"
          variant={button.to === location.pathname ? "contained" : "text"}
          sx={{padding: '5px'}}
        >
          {t(button.label)}
        </Button>
      </Box>
      
    )}
  </>
}

export default NavMainButtons