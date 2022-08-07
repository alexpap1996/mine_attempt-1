import { ListItem, List } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

// const OrderProductItem = () => {
//   return (<>
  
//   </>)
// }

const OrderListItem = ({order, products}) => {
  const { i18n } = useTranslation()
  const currLang = i18n.language

  const date = new Date(order.date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const locale = currLang === 'gr' ? 'el-GR' : 'en-US'

  const displayPrice = Number.parseInt(order.price || 0).toFixed(2)

  return (
  <ListItem>
    <p>{date.toLocaleDateString(locale, options)} {displayPrice} f</p>
    {
      products
        .filter(prod => order.products.includes(prod.id))
        .map(prod => 
          <p>{prod.id}</p>
      )
    }
  </ListItem>)
}

const OrdersList = ({orders = [], products = []}) => {
  return (<>
    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0' }}>  
      {
        orders.map(order => <OrderListItem order={order} products={products}/>)
      }
    </List>
  </>)
}
export default OrdersList