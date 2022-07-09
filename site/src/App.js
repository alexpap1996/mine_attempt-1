import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import HomeScreen from './mainscreens/HomeScreen'
import CartScreen from './mainscreens/CartScreen'
import ShopsScreen from './mainscreens/ShopsScreen'
import ProfileScreen from './mainscreens/ProfileScreen'
import OrdersScreen from './mainscreens/OrdersScreen'
import Nav from './components/Nav/Nav'
import LoginScreen from './mainscreens/LoginScreen'

const App = () => {
  const theme = useTheme()
  console.log(theme.palette)
  return (
    <BrowserRouter>
      <Nav/>
      <Box sx={{ backgroundColor: theme.palette.background}}>
        <Routes>
          <Route path='/account/profile' element={<ProfileScreen />} />
          <Route path='/account/orders' element={<OrdersScreen />} />
          <Route path='/login/*' element={<LoginScreen />} />
          <Route path='/shop/*' element={<ShopsScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
