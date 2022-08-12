import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { GlobalState } from '../../contexts/Context';

const buttons = [
  {
    label: 'shops',
    to: '/shops',
    icon: ShoppingBasketIcon
  },
  {
    label: 'cart',
    to: '/cart',
    icon: LocalGroceryStoreIcon,
  },
]

const NavMainButtons = () => {
  const { state: { cart }} = GlobalState()
  const cartLength = cart.length || 0
  const { t } = useTranslation()
  const location = useLocation()
  
  return <>
    {buttons.map(button =>
      <Box key={button.to} sx={{ display: 'inline', marginRight: 2}}>
        <Button
          component={Link}
          to={button.to}
          size="medium"
          color="primary"
          variant={location.pathname.startsWith(button.to) ? "contained" : "text"}
          sx={{padding: '7px 10px'}}
          endIcon={<button.icon />}
        >
          {t(button.label) + (button.label === 'cart' ? ` (${cartLength})` : '')}
        </Button>
      </Box>
    )}
  </>
}

export default NavMainButtons