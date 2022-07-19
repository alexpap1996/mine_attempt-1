import React from 'react'
import { useTranslation } from "react-i18next";
import { Grid, Typography } from '@mui/material';
import { GlobalState } from '../../contexts/Context'

const Row = ({text, amount = 0, sx = undefined}) => {
  return (
    <>
      <Grid item xs={10} sx={sx}>
        <Typography sx={{ fontWeight:'500'}}>{text}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography align='right'>{amount.toFixed(2)}€</Typography>
      </Grid>
    </>
  )
}

const CartTotals = () => {
  console.log('CartTotals render')
  const { t } = useTranslation()
  const { state } = GlobalState()
  const itemTotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const tip = state.tip
  const grandTotal = itemTotal + tip
  return <>
    <Grid container spacing={2} columns={12} sx={{px:3}}>
      <Row text={t('itemTotal')} amount={itemTotal}/>
      <Row text={t('tip')} amount={tip}/>
      <Row text={t('grandTotal')} amount={grandTotal}/>
    </Grid>
  </>
}

export default CartTotals
