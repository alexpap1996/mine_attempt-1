import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next'

const NavUserIcon = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  // TODO: logout session etc
  const handleLogout = useCallback(() => navigate('/login', {replace: true}), [navigate]);

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