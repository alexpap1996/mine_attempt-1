import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';
import CartPaymentInfo from '../components/Cart/CartPaymentInfo';
import { GlobalState } from '../contexts/Context'
import CartTipSelector from '../components/Cart/CartTipSelector';

const CartScreen = () => {
  const { dispatch, state: { cart, tip } } = GlobalState()

	const cartItems = cart
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
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={12} item>
              <CartProductsList cartItems={cartItems}/>
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
              <CartPaymentInfo cartItems={cartItems} hasCartItems={cartItems.length}/>
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
              <CartTipSelector tip={tip} handleTipChange={handleTipChange} hasCartItems={cartItems.length} />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <CartSummary hasCartItems={cartItems.length}/>
        </Grid>
      </Grid>
    </Container >
	</>
}

export default CartScreen