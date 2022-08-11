import React, { useState } from 'react'
import { ListItem, ListItemButton, Grid, Typography, Divider, Modal, Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { ENDPOINT } from '../../constants/routeConstants'
import OrderProductsModal from './OrderProductsModal'

const OrderListItem = ({order}) => {
  const { i18n, t } = useTranslation()
  const currLang = i18n.language
  const [modalProducts, setModalProducts] = useState([])
  const [modalMode, setModalMode] = useState('normal')

  const date = new Date(order.creationDate)
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const timeOptions = { hour: '2-digit', minute: '2-digit'}
  const locale = currLang === 'gr' ? 'el-GR' : 'en-US'

  const displayPrice = Number.parseInt(order.price || 0).toFixed(2)
  const displayDate = date.toLocaleDateString(locale, dateOptions)
  const displayTime = date.toLocaleTimeString(locale, timeOptions)

  const status = order.status
  const rated = status === 'rated'

  const getOrderProducts = async (productIds) => {
    const res = await axios.post(ENDPOINT + '/api/orders/products/', {
      productIds
    })
    if (res.status === 200) {
      return res.data
    }
  }

  const onClickOrderHandler = async () => {
    setModalMode('normal')
    getProducts()
  }

  const unsetModalProducts = () => {
    setModalProducts([])
  }

  const onClickRateProducts = () => {
    setModalMode('rate')
    getProducts()
  }

  const getProducts = async () => {
    const idsToQuantities = order.products.reduce((acc, product) => {
      acc[product.productId] = product.quantity
      return acc
    }, {})

    const data = await getOrderProducts(Object.keys(idsToQuantities))
    const dataWithQuantity = data.map(prod => {
      return {
        ...prod,
        quantity: idsToQuantities[prod._id]
      }
    })
    setModalProducts(dataWithQuantity)
  }

  return (<>
    <ListItem sx={{padding:'0', display: 'flex'}}>
      <ListItemButton onClick={onClickOrderHandler} component="a" sx={{p:2, mr:1}}>
        <Grid container>
          <Grid item xs={9}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography component="span" variant="body1">
                {displayDate}
              </Typography>
              <Typography component="span" variant="body2">
                {displayTime}
              </Typography>
            </Box>
            
          </Grid>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <Typography sx={{ textAlign:'right' }}>
              {displayPrice}€
            </Typography>
          </Grid>
        </Grid>
      </ListItemButton>
      <Box sx={{width:'20%', display: 'flex', alignItems:'stretch'}}>
        <Button disabled={rated} onClick={onClickRateProducts} variant="outlined" sx={{width:'100%'}}>
          {t(rated ? 'rated' : 'rateProducts')}
        </Button>
      </Box>
      
    </ListItem>

    <OrderProductsModal products={modalProducts} unsetModalProducts={unsetModalProducts} modalMode={modalMode} orderId={order._id}/>
  </>)
}

export default OrderListItem