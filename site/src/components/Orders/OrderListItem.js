import React, { useState } from 'react'
import { ListItem, ListItemButton, Grid, Typography, Divider, Modal, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { ENDPOINT } from '../../constants/routeConstants'
import OrderProductsModal from './OrderProductsModal'

const OrderListItem = ({order}) => {
  const { i18n } = useTranslation()
  const currLang = i18n.language
  const [modalProducts, setModalProducts] = useState([])

  const date = new Date(order.date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const locale = currLang === 'gr' ? 'el-GR' : 'en-US'

  const displayPrice = Number.parseInt(order.price || 0).toFixed(2)
  const displayDate = date.toLocaleDateString(locale, options)

  const getOrderProducts = async (productIds) => {
    const res = await axios.post(ENDPOINT + '/api/orders/products/', {
      productIds
    })
    if (res.status === 200) {
      return res.data
    }
  }

  const onClickHandler = async () => {
    const idsToQuantities = order.products.reduce((acc, product) => {
      acc[product.id] = product.quantity
      return acc
    }, {})

    const data = await getOrderProducts(Object.keys(idsToQuantities))
    const dataWithQuantity = data.map(prod => {
      return {
        ...prod,
        quantity: idsToQuantities[prod.id]
      }
    })
    setModalProducts(dataWithQuantity)
  }

  const unsetModalProducts = () => {
    setModalProducts([])
  }

  return (<>
    <ListItem sx={{padding:'0'}}>
      <ListItemButton onClick={onClickHandler} component="a" href="#simple-list" sx={{p:3}}>
        <Grid container>
          <Grid item xs={9}>
            <Typography>
              {displayDate}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ textAlign:'right' }}>
              {displayPrice}€
            </Typography>
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>

    <OrderProductsModal products={modalProducts} unsetModalProducts={unsetModalProducts}/>
  </>)
}

export default OrderListItem