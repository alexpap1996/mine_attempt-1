import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'
import { GlobalState } from '../../contexts/Context'
import { Box, Card, Button } from '@mui/material'
import { ENDPOINT } from '../../constants/routeConstants'
import Loading from '../../utils/Loading'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

// holds the totals of the cart and has button to create order
const CartSummary = ({ detailsMissing = '', paymentMethod}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { state, dispatch } = GlobalState()
  const [loading, setLoading] = useState(false)

  // randomly assigned as minimum value to send order, can be changed
  const minimumAmount = 10

  const user = state.user

  // the values of the cart totals
  const itemTotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const tip = state.tip
  const grandTotal = itemTotal + tip

  // create button is disabled if the order amount isn't above the minimum amount
  // or payment method details are missing
  const buttonDisabled = minimumAmount > itemTotal || !!detailsMissing

  const handleCreateOrder = async () => {
    setLoading(true)
    const products = state.cart.map(product => {
      return {
        productId: product._id,
        quantity: product.quantity
      }
    })

    // send callout to create order in db
    const res = await axios.post(ENDPOINT + '/api/orders/create', {
      email: state.user.email,
      paymentMethod,
      status: 'created',
      price: itemTotal,
      tip: tip,
      products: products
    })
    if (res.status===200) {
      // if order was created on db
      // update user with new order on the global state
      dispatch({
        type: "update_user",
        payload: {
          user: {
            ...user,
            orders: res.data.orders
          }
        }
      })
      // empty the cart
      dispatch({
        type: "remove",
        payload: null
      })
      // go to orders page
      navigate('/account/orders?order_created=true')
    } else {
      console.log(res)
    }
    setLoading(false)
    console.log(res)
  }

  return <>{
    !loading
      ? <Card sx={{ backgroundColor: 'white', py:2 }}>
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
    : <Loading />
    }
  </>
}

export default CartSummary
