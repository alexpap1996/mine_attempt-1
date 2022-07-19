import { Card, CardContent, Grid, TextField, MenuItem, FormControl, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';
import { useTranslation } from 'react-i18next';
import { GlobalState } from '../contexts/Context'

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
        <Grid xs={12} sm={8} md={8} item>
          <CartProductsList cartItems={cartItems}/>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <CartSummary />
        </Grid>
        <Grid xs={12} sm={3} md={3} item>
          <Card sx={{ backgroundColor: 'white'}}>
            <CardContent>
              <Typography component="div" variant="body1" sx={{pb: 1}}>
                {t('chooseTip')}
              </Typography>
              <FormControl fullWidth>
                <TextField 
                  value={tip}
                  onChange={handleTipChange}
                  sx={{ backgroundColor:'white'}}
                  select 
                  SelectProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value={0}>----</MenuItem>
                  <MenuItem value={0.5}>0.5€</MenuItem>
                  <MenuItem value={1}>1€</MenuItem>
                  <MenuItem value={2}>2€</MenuItem>
                </TextField>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >
	</>
}

export default CartScreen