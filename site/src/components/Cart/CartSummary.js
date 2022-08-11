import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'
import { GlobalState } from '../../contexts/Context'
import { Box, Card, Button, Snackbar, Alert } from '@mui/material'
import { ENDPOINT } from '../../constants/routeConstants'
import Loading from '../../utils/Loading'
import axios from 'axios'

const CartSummary = ({ detailsMissing = '', paymentMethod}) => {
  const { t } = useTranslation()
  const { state, dispatch } = GlobalState()
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  const closeHandler = () => {
    setModalOpen(false)
  }

  const minimumAmount = 10


  const user = state.user
  const itemTotal = state.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const tip = state.tip
  const grandTotal = itemTotal + tip

  const buttonDisabled = minimumAmount > itemTotal || !!detailsMissing

  const handleCreateOrder = async () => {
    setLoading(true)
    const products = state.cart.map(product => {
      return {
        productId: product._id,
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
    if (res.status===200) {
      dispatch({
        type: "update_user",
        payload: {
          user: {
            ...user,
            orders: [res.orders]
          }
        }
      })
      dispatch({
        type: "remove",
        payload: null
      })
      setModalOpen(true)
    } else {
      
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
    <Snackbar open={modalOpen} autoHideDuration={6000} onClose={closeHandler} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={closeHandler} severity="success" sx={{ width: '100%' }}>
        Order Created!
      </Alert>
    </Snackbar>
  </>
}

export default CartSummary
