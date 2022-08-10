import React from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'
import { GlobalState } from '../../contexts/Context'
import { Box, Card, Button } from '@mui/material'
import { ENDPOINT } from '../../constants/routeConstants'
import axios from 'axios'

const CartSummary = ({ detailsMissing = '', paymentMethod}) => {
  const { t } = useTranslation()

  const minimumAmount = 10

  const { state } = GlobalState()
  const itemTotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const tip = state.tip
  const grandTotal = itemTotal + tip

  const buttonDisabled = minimumAmount > itemTotal || !!detailsMissing

  const handleCreateOrder = async () => {
    const products = state.cart.map(product => {
      return {
        productId: product.id,
        quantity: product.quantity
      }
    })

    const res = await axios.post(ENDPOINT + '/api/orders/create', {
      email: state.user.email,
      paymentMethod,
      status: 'created',
      price: itemTotal,
      tip: tip,
      products: products
    })
    console.log(res)
  }

  return <>
    <Card sx={{ backgroundColor: 'white', py:2 }}>
      <CartTotals 
        hasCartItems={!!state.cart.length} 
        minimumAmount={minimumAmount}
        grandTotal={grandTotal}
        tip={tip}
        itemTotal={itemTotal}
      />
      <Box sx={{ pt: 1, display: 'flex', justifyContent:'center'}}>
        <Button
          onClick={handleCreateOrder}
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
