import { ListItem, List, ListItemButton, Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import OrderListItem from './OrderListItem'
import { useTranslation } from 'react-i18next'

const OrderList = ({orders = [], products = []}) => {
  return (<>
    <List spacing={2} sx={{ width: '100%', padding:'0'}}>  
      {
        orders.map(order => <>
          <Divider />
          <OrderListItem order={order} products={products}/>
        </>)
      }
    </List>
    </>)
}
export default OrderList