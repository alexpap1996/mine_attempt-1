import { List, Divider } from '@mui/material'
import React from 'react'
import OrderListItem from './OrderListItem'

const OrderList = ({orders = []}) => {
  return (<>
    <List spacing={2} sx={{ width: '100%', padding:'0'}}>  
      {
        orders.map(order => <>
          <Divider key={order._id + '_'}/>
          <OrderListItem key={order._id} order={order}/>
        </>)
      }
    </List>
    </>)
}
export default OrderList