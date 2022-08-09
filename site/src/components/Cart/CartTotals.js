import React from 'react'
import { useTranslation } from "react-i18next";
import { Grid, Typography, Divider } from '@mui/material';

const Row = ({text, amount = 0, sx = undefined, fontWeight = 500}) => {
  return (
    <>
      <Grid item xs={10} sx={sx}>
        <Typography sx={{ fontWeight }}>{text}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography align='right'>{amount.toFixed(2)}€</Typography>
      </Grid>
    </>
  )
}

const CartTotals = ({hasCartItems = false, minimumAmount = 0, tip = 0, itemTotal = 0, amount = 0, grandTotal = 0}) => {
  const opacity = hasCartItems ? 1 : 0.15
  const { t } = useTranslation()

  return <>
    <Grid container spacing={2} columns={12} sx={{px:3, opacity}}>
      <Row text={t('itemTotal')} amount={itemTotal}/>
      <Row text={t('tip')} amount={tip}/>
      <Row text={t('grandTotal')} amount={grandTotal}/>
    </Grid>
    <Divider sx={{ mt: 1}}/>
    <Grid container spacing={2} columns={12} sx={{px:3, opacity, pt:1}}>
      <Row text={t('minimumAmount')} amount={minimumAmount} fontWeight={400}/>
      {
        minimumAmount > itemTotal &&
          <Typography component="p" variant="body2" sx={{mx:2, mt:1, color:'#ff9966'}}>
            {t('minimumAmountNotPassed')}
          </Typography>
      }
    </Grid>
    <Divider sx={{ mt: 1}}/>
  </>
}

export default CartTotals
