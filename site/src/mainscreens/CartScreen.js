import { Card, CardContent, Grid, TextField, MenuItem, FormControl, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';
import { useTranslation } from 'react-i18next';
import { GlobalState } from '../contexts/Context'
import CartTipSelector from '../components/Cart/CartTipSelector';

const CartScreen = () => {
  const { dispatch, state: { cart, tip } } = GlobalState()

	const cartItems = cart
  const { t } = useTranslation()
  const handleTipChange = (event) => {
    dispatch({
      type: 'tip',
      payload: event.target.value
    })
  }

	return <>
    <Container > 
      <Grid container component="section" spacing={2} style={{ marginTop:'unset' }}>
        <Grid xs={12} sm={12} md={8} item>
          <CartProductsList cartItems={cartItems}/>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <CartSummary hasCartItems={cartItems.length}/>
        </Grid>
        <Grid xs={12} sm={12} md={3} item>
          <CartTipSelector tip={tip} handleTipChange={handleTipChange} hasCartItems={cartItems.length} />
        </Grid>
      </Grid>
    </Container >
	</>
}

export default CartScreen