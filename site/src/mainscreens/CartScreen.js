import { Grid, Container } from '@mui/material';
import React, { useState } from 'react';
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';
import CartPaymentInfo from '../components/Cart/CartPaymentInfo';
import { GlobalState } from '../contexts/Context'
import CartTipSelector from '../components/Cart/CartTipSelector';

const paymentMethodInit = {
  type: 'cash',
  details: {
    cardnumber: '',
    cardname: '',
    cvv: '',
    expirydate: ''
  }
}
const CartScreen = () => {
  const { dispatch, state: { cart, tip } } = GlobalState()
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodInit)
  const [paymentDetailsMissing, setPaymentDetailsMissing] = useState('')

	const cartItems = cart
  const handleTipChange = (event) => {
    dispatch({
      type: 'tip',
      payload: event.target.value
    })
  }

  const validatePaymentMethod = (payMethod) => {
    if (payMethod.type === 'cash') return true
    else {
      const details = paymentMethod.details
      let isOk = true
      if (details.cardnumber.length !== 16) isOk = false
      if (details.cardname.length === 0) isOk = false
      if (details.expirydate.length !== 5) isOk = false
      if (details.cvv.length !== 3) isOk = false
      return isOk
    }
  }

  const handlePaymentMethodChange = (payMethod) => {
    setPaymentMethod(payMethod)
    if (validatePaymentMethod(paymentMethod)) {
      setPaymentDetailsMissing('')
    } else {
      setPaymentDetailsMissing('Missing details')
    }
  }
  
	return <>
    <Container > 
      <Grid container component="section" spacing={2} sx={{ marginTop:'unset', mb:2 }}>
        <Grid xs={12} sm={12} md={8} item>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={12} item>
              <CartProductsList cartItems={cartItems}/>
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
              <CartTipSelector tip={tip} handleTipChange={handleTipChange} hasCartItems={cartItems.length} />
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
              <CartPaymentInfo hasCartItems={cartItems.length} handlePaymentMethodChange={handlePaymentMethodChange} detailsMissing={paymentDetailsMissing}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <CartSummary hasCartItems={cartItems.length} detailsMissing={paymentDetailsMissing} paymentMethod={paymentMethod.type}/>
        </Grid>
      </Grid>
    </Container >
	</>
}

export default CartScreen