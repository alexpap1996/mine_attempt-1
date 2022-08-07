import { Grid } from '@mui/material'
import React from 'react'

// const OrderProductItem = () => {
//   return (<>
  
//   </>)
// }

const OrderGridItem = ({order, products}) => {
  return (
  <Grid item>
    <p>{order.date} ' ' {order.price}</p>
    {products.filter(prod => order.products.includes(prod.id)).map(prod => 
      <p>{prod.id}</p>
    )}
  </Grid>)
}

const OrdersList = ({orders = [], products = []}) => {
  return (<>
    {orders.map(order => <OrderGridItem order={order} products={products}/>)}
  </>)
}
export default OrdersList