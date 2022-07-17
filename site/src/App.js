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
import ProductListScreen from './mainscreens/ProductListScreen'

const App = () => {
  const theme = useTheme()
  console.log(theme.palette)
  return (
    //this needs some work for the body to be full screen
    <Box>
      <BrowserRouter>
        <Box sx={{display: 'flex', flexDirection:'column'}} height="100vh">
          <Box sx={{ flexGrow: 0 }}>
            <Nav/>
          </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.backgroundColor}}>
            <Routes>
              <Route path='/account/profile' element={<ProfileScreen />} />
              <Route path='/account/orders' element={<OrdersScreen />} />
              <Route path='/login/*' element={<LoginScreen />} />
              <Route path='/shops/*' element={<ShopsScreen />} />
              <Route path='/shop/*' element={<ProductListScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App;
