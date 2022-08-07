import { ListItem, List, ListItemButton, Grid, Typography, Divider } from '@mui/material'
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
  const displayDate = date.toLocaleDateString(locale, options)

  return (<>
    <Divider />
    
    <ListItem sx={{padding:'0'}}>
      <ListItemButton component="a" href="#simple-list" sx={{p:3}}>
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
  </>)
}

const OrdersList = ({orders = [], products = []}) => {
  return (<>
    <List spacing={2} sx={{ width: '100%', padding:'0'}}>  
      {
        orders.map(order => <OrderListItem order={order} products={products}/>)
      }
    </List>
    </>)
}
export default OrdersList