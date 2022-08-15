import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next'
import { GlobalState } from '../../contexts/Context';

// icon that when clicked renders a list of options
// 1. my profile
// 2. my order
// 3. logout
const NavUserIcon = () => {
  const { t } = useTranslation()
  const { dispatch } = GlobalState()
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // handles the opening of the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  // handles the closing of the menu
  const handleClose = () => {
    setAnchorEl(null);
  }

  // logs out the user by erasing them from the state and the session
  // and also redirects them to login screen
  const handleLogout = () => {
    console.log('handle logout')
    dispatch({
      type: 'logout'
    })
    navigate('/login', {replace: true})
  }

  return <>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to="/account/profile" onClick={handleClose}>{t('profile')}</MenuItem>
      <MenuItem component={Link} to="/account/orders" onClick={handleClose}>{t('myOrders')}</MenuItem>
      <MenuItem onClick={handleLogout}>{t('logout')}</MenuItem>
    </Menu>
  </>
}

export default NavUserIcon