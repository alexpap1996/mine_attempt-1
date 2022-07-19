import React from 'react'
import { List, Divider, Card } from '@mui/material';
import ProductCartItem from '../Product/ProductCartItem';

const ProductWithDivider = ({product, isLastItem = false}) => {
  return (
    <>
      <ProductCartItem product={product}/>
      {!isLastItem && <Divider />}
    </>
  )
}

const CartProductsList = ({ cartItems }) => {
  return <>
    <Card sx={{bgcolor: 'white' }}>
      <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0' }}>
        {
          cartItems.map((product, index, arr) => 
            <ProductWithDivider 
              key={product.id}
              product={product} 
              isLastItem={index+1=== arr.length}
            />
          )
        }
      </List>
    </Card>
  </>
}

export default CartProductsList