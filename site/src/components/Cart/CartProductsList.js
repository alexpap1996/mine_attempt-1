import React from 'react'
import { List, Divider, Card, Box, Typography } from '@mui/material';
import ProductCartItem from '../Product/ProductCartItem';
import EmptyCartIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { useTranslation } from 'react-i18next';

const ProductWithDivider = ({product, isLastItem = false}) => {
  return (
    <>
      <ProductCartItem product={product}/>
      {!isLastItem && <Divider />}
    </>
  )
}

const EmptyCart = ({text}) => {
  return (
    <Box sx={{
      display: 'flex',
      p:5,
      justifyContent:
      'center', 
      alignItems:'center', 
      flexDirection: 'column'}}
    >
      <EmptyCartIcon sx={{width:'4rem', height:'4rem', pb:3 }}/>
      <Typography variant='h6' component='div'>{text}</Typography>
    </Box>
  )
}

// the list of products in the cart
// if list is empty we render the component EmptyCart
const CartProductsList = ({ cartItems }) => {
  const { t } = useTranslation()
  return <>
    <Card sx={{bgcolor: 'white' }}>
      {cartItems.length ? 
        <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0' }}>
          {
            cartItems.map((product, index, arr) => 
              <ProductWithDivider 
                key={product._id}
                product={product} 
                isLastItem={index+1=== arr.length}
              />
            )
          }
        </List>
        : <EmptyCart text={t('noCartItems')}/>
      }
    </Card>
  </>
}

export default CartProductsList