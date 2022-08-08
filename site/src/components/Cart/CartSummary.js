import React from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'
import { GlobalState } from '../../contexts/Context'

import { Box, Card, Divider, Button, Grid, Typography } from '@mui/material';

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

const CartSummary = ({hasCartItems = false}) => {
  const { t } = useTranslation()

  const minimumAmount = 10

  const { state } = GlobalState()
  const itemTotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const tip = state.tip
  const grandTotal = itemTotal + tip

  const buttonDisabled = minimumAmount > itemTotal

  return <>
    <Card sx={{ backgroundColor: 'white', py:2 }}>
      <CartTotals 
        hasCartItems={hasCartItems} 
        minimumAmount={minimumAmount}
        grandTotal={grandTotal}
        tip={tip}
        itemTotal={itemTotal}
      />
      <Box sx={{ pt: 1, display: 'flex', justifyContent:'center'}}>
        <Button
          // component={Link}
          // to={button.to}
          size="medium"
          color="primary"
          variant="contained"
          disabled={buttonDisabled}
        >
          {t("confirmOrder")}
        </Button>
      </Box>
    </Card>
  </>
}

export default CartSummary
